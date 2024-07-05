import { IWord } from "./IWord";

export class Course {
  id: number;
  correctWords: number;

  constructor(
    public subject: string,
    public language: string,
    public words: IWord[]
  ) {
    this.id = Date.now();
    this.correctWords = 0;
  }
}
