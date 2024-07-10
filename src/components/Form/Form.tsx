import { ChangeEvent, FormEvent, useState } from "react";
import { Course } from "../../models/Course";
import { IWord } from "../../models/IWord";
import { useNavigate } from "react-router-dom";
import "./Form.scss";

interface ICourseFormState {
  subject: string;
  language: string;
  words: IWord[];
}

interface IFormProps {
  addCourse: (course: Course) => void;
}

export const Form = ({ addCourse }: IFormProps) => {
  const [courseForm, setCourseForm] = useState<ICourseFormState>({
    subject: "",
    language: "",
    words: [{ word: "", translation: "" }],
  });

  const navigate = useNavigate();

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
      courseForm.subject,
      courseForm.language,
      courseForm.words
    );
    addCourse(newCourse);
    setCourseForm({
      subject: "",
      language: "",
      words: [{ word: "", translation: "" }],
    });

    navigate("/");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Create a course</h2>
      <div className="form__group">
        <label className="form__label" htmlFor="language">
          Language
        </label>
        <input
          className="form__input"
          id="language"
          type="text"
          name="language"
          value={courseForm.language}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form__group">
        <label className="form__label" htmlFor="subject">
          Subject
        </label>
        <input
          className="form__input"
          id="subject"
          type="text"
          name="subject"
          value={courseForm.subject}
          onChange={handleChange}
          required
        />
      </div>
      <hr />
      <div className="form__words-container">
        {courseForm.words.map((word, index) => (
          <div className="form__words-box" key={index}>
            {index > 0 && (
              <div className="form__remove-btn-container">
                <button
                  className="form__btn--remove"
                  type="button"
                  onClick={() => handleRemoveWord(index)}
                >
                  x
                </button>
              </div>
            )}
            <div className="form__input-box">
              <label className="form__label" htmlFor={`word-${index}`}>
                Word
              </label>

              <input
                className="form__input"
                id={`word-${index}`}
                type="text"
                name="word"
                value={word.word}
                onChange={(e) => handleWordsChange(e, index)}
                required
              />
            </div>
            <div className="form__input-box">
              <label className="form__label" htmlFor={`translation-${index}`}>
                Translation
              </label>
              <input
                className="form__input"
                id={`translation-${index}`}
                type="text"
                name="translation"
                value={word.translation}
                onChange={(e) => handleWordsChange(e, index)}
                required
              />
            </div>
          </div>
        ))}
      </div>

      <button
        className="form__btn form__btn--new"
        type="button"
        onClick={handleAddWord}
      >
        New Word
      </button>
      <button className="form__btn form__btn--submit" type="submit">
        Create
      </button>
    </form>
  );
};
