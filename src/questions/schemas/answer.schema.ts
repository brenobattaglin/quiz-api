import mongoose from 'mongoose';

export const AnswerSchema = new mongoose.Schema({
  id: Number,
  text: String,
  isCorrect: Boolean,
});
