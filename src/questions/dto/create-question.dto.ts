import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsDefined,
  IsNotEmpty,
  IsString,
  ValidateNested,
} from 'class-validator';
import { AnswerDto } from './answer.dto';

export class CreateQuestionDto {
  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @ArrayMinSize(2)
  @IsDefined()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => AnswerDto)
  readonly alternatives: [AnswerDto];
}
