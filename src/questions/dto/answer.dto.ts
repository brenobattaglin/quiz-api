import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class AnswerDto {
  readonly id: number;

  @IsString()
  @IsNotEmpty()
  readonly text: string;

  @IsBoolean()
  readonly isCorrect: boolean;
}
