import { Document } from 'mongoose';

export default interface Question extends Document {
  readonly description: string;
  readonly alternatives: [
    {
      readonly text: {
        type: string;
      };
      readonly isCorrect: {
        type: boolean;
        default: false;
      };
    },
  ];
}
