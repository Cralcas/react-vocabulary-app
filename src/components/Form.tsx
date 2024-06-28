import { ChangeEvent, FormEvent, useState } from "react";
import { Course } from "../models/Course";
import { IWord } from "../models/IWord";

interface ICourseFormState {
  genre: string;
  language: string;
  words: IWord[];
}

interface IFormProps {
  addCourse: (course: Course) => void;
}

export const Form = ({ addCourse }: IFormProps) => {
  const [courseForm, setCourseForm] = useState<ICourseFormState>({
    genre: "",
    language: "",
    words: [] as IWord[],
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const property = e.target.name;
    const value = e.target.value;
    setCourseForm({ ...courseForm, [property]: value });
  };

  const handleWordsChange = (
    e: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const updatedWords = [...courseForm.words];
    updatedWords[index] = {
      ...updatedWords[index],
      [e.target.name]: e.target.value,
    };
    setCourseForm({ ...courseForm, words: updatedWords });
  };

  const handleAddWord = () => {
    setCourseForm({
      ...courseForm,
      words: [...courseForm.words, { word: "", translation: "" }],
    });
  };

  const handleRemoveWord = (index: number) => {
    const updatedWords = [...courseForm.words];
    updatedWords.splice(index, 1);
    setCourseForm({ ...courseForm, words: updatedWords });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newCourse = new Course(
      courseForm.genre,
      courseForm.language,
      courseForm.words
    );
    addCourse(newCourse);
    setCourseForm({
      genre: "",
      language: "",
      words: [{ word: "", translation: "" }],
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="genre">Genre</label>
        <input
          id="genre"
          type="text"
          name="genre"
          value={courseForm.genre}
          onChange={handleChange}
          required
        />

        <label htmlFor="language">Language</label>
        <input
          id="language"
          type="text"
          name="language"
          value={courseForm.language}
          onChange={handleChange}
          required
        />

        <label htmlFor="words">Words</label>
        {courseForm.words.map((word, index) => (
          <div id="words" key={index}>
            <label htmlFor={`word-${index}`}>Word:</label>
            <input
              id={`word-${index}`}
              type="text"
              name="word"
              value={word.word}
              onChange={(e) => handleWordsChange(e, index)}
              required
            />

            <label htmlFor={`translation-${index}`}>Translation:</label>
            <input
              id={`translation-${index}`}
              type="text"
              name="translation"
              value={word.translation}
              onChange={(e) => handleWordsChange(e, index)}
              required
            />

            <button type="button" onClick={() => handleRemoveWord(index)}>
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={handleAddWord}>
          Add Word
        </button>
        <button type="submit">Create</button>
      </form>
    </>
  );
};
