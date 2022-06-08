export default interface Answer extends Document {
  readonly id: number;
  readonly text: string;
  readonly isCorrect: boolean;
}
