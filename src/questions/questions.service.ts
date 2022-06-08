import { Injectable } from '@nestjs/common';
import { QuestionDto } from './dto/question.dto';
import Question from './interfaces/question.interface';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class QuestionsService {
  constructor(
    @InjectModel('Question') private questionModel: Model<Question>,
  ) {}

  async create(createQuestionDto: QuestionDto) {
    const createdQuestion = new this.questionModel(createQuestionDto);
    return createdQuestion.save();
  }

  async findAll() {
    return this.questionModel.find().exec();
  }

  async findOne(id: number) {
    return this.questionModel.findById(id).exec();
  }

  async update(id: number, updateQuestionDto: QuestionDto) {
    try {
      await this.questionModel.updateOne({ _id: id }, updateQuestionDto).exec();
      return { message: 'Question updated.' };
    } catch (error) {
      return {
        message: error.message,
      };
    }
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
