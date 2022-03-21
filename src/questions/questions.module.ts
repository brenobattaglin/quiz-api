import { Module } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { QuestionsController } from './questions.controller';
import { DatabaseModule } from 'src/database/database.module';
import { questionProviders } from './questions.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [QuestionsController],
  providers: [QuestionsService, ...questionProviders],
})
export class QuestionsModule {}
