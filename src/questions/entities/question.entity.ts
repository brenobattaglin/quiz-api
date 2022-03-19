export default class Question {
  description: string;
  alternatives: [
    {
      text: {
        type: string;
      };
      isCorrect: {
        type: boolean;
        default: false;
      };
    },
  ];
}
