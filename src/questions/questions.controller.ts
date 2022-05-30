import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { Types } from 'mongoose';

@Controller('questions')
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) {}

  @Post()
  create(@Body() createQuestionDto: CreateQuestionDto) {
    return this.questionsService.create(createQuestionDto);
  }

  @Get()
  async findAll() {
    try {
      const questions = await this.questionsService.findAll();
      if (!questions || questions.length === 0) {
        throw new NotFoundException('No questions found on the database.');
      }

      return questions;
    } catch (error) {
      throw error;
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    try {
      if (!Types.ObjectId.isValid(id)) {
        throw new BadRequestException('Invalid object id');
      }

      const question = await this.questionsService.findOne(id);

      if (!question) {
        throw new NotFoundException('No question found with this id.');
      }

      return question;
    } catch (error) {
      throw error;
    }
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateQuestionDto: UpdateQuestionDto,
  ) {
    return this.questionsService.update(+id, updateQuestionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.questionsService.remove(id);
  }
}
