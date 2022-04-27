import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Answer } from '../models/answer.model';

export type QuestionDocument = Question & Document;

@Schema()
export class Question {
  @Prop()
  id: number;

  @Prop()
  description: string;

  @Prop([Answer])
  options: Answer[];
}

export const QuestionSchema = SchemaFactory.createForClass(Question);
