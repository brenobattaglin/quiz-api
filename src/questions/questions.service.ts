import { Injectable } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Question, QuestionDocument } from './schemas/question.schema';

@Injectable()
export class QuestionsService {
  constructor(
    @InjectModel('Question') private questionModel: Model<QuestionDocument>,
  ) {}

  async create(createQuestionDto: CreateQuestionDto) {
    const createdQuestion = new this.questionModel(createQuestionDto);
    return createdQuestion.save();
  }

  async findAll(): Promise<Question[]> {
    return this.questionModel.find().exec();
  }

  async findOne(id: number) {
    return `This action returns a #${id} question`;
  }

  async update(id: number, updateQuestionDto: UpdateQuestionDto) {
    console.log(updateQuestionDto);

    return `This action updates a #${id} question`;
  }

  async remove(id: number) {
    return `This action removes a #${id} question`;
  }
}
