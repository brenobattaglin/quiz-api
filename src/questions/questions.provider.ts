import { Connection } from 'mongoose';
import { QuestionSchema } from './schemas/question.schema';

export const questionProviders = [
  {
    provide: questionModel,
    useFactory: (connection: Connection) =>
      connection.model('Question', QuestionSchema),
    inject: [databaseConnection],
  },
];
