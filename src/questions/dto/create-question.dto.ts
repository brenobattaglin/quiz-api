export class CreateQuestionDto {
  description: string;
  alternatives: [
    {
      text: string;
      isCorrect: boolean;
    },
  ];
}
