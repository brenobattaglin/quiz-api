import { PartialType } from '@nestjs/mapped-types';
import Answer from '../interfaces/answer.interface';
import { CreateQuestionDto } from './create-question.dto';

export class UpdateQuestionDto extends PartialType(CreateQuestionDto) {
  id: number;
  description: string;
  alternatives: [Answer];
}
