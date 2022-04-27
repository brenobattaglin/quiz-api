import { Module } from '@nestjs/common';
import { QuestionsModule } from './questions/questions.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [QuestionsModule, DatabaseModule],
})
export class AppModule {}
