import * as mongoose from 'mongoose';

export const databaseProvider = [
  {
    provide: databaseConnection,
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect('mongodb+srv://localhost/nest'),
  },
];
