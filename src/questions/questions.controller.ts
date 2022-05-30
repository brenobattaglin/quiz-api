import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
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
  findAll() {
    return this.questionsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    try {
      if (!Types.ObjectId.isValid(id)) {
        throw new HttpException('Invalid object id', HttpStatus.BAD_REQUEST);
      }

      const question = await this.questionsService.findOne(id);

      if (!question) {
        throw new HttpException(
          'No question found with this id.',
          HttpStatus.NOT_FOUND,
        );
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
