import Answer from '../interfaces/answer.interface';

export class CreateQuestionDto {
  description: string;
  alternatives: [Answer];
}
