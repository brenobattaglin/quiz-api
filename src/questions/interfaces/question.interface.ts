import { Document } from 'mongoose';
import Answer from './answer.interface';

export default interface Question extends Document {
  readonly description: string;
  readonly alternatives: Answer;
}
