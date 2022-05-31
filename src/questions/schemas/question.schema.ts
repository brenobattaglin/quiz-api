import * as mongoose from 'mongoose';

const Answer = new mongoose.Schema({
  id: Number,
  text: String,
  isCorrect: Boolean,
});

export const QuestionSchema = new mongoose.Schema({
  description: String,
  alternatives: [Answer],
});
