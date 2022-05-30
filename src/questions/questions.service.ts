import { Injectable } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import Question from './interfaces/question.interface';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class QuestionsService {
  constructor(
    @InjectModel('Question') private questionModel: Model<Question>,
  ) {}

  async create(createQuestionDto: CreateQuestionDto) {
    const createdQuestion = new this.questionModel(createQuestionDto);
    return createdQuestion.save();
  }

  async findAll() {
    return this.questionModel.find().exec();
  }

  async findOne(id: number) {
    try {
      const question = await this.questionModel.findById(id).exec();
      return question;
    } catch (error) {
      throw error;
    }
  }

  async update(id: number, updateQuestionDto: UpdateQuestionDto) {
    return `This action updates a #${id} question`;
  }

  async remove(id: number) {
    try {
      await this.questionModel.findByIdAndDelete(new Types.ObjectId(id)).exec();
      return { message: 'Question deleted.' };
    } catch (error) {
      return {
        message: error.message,
      };
    }
  }
}
