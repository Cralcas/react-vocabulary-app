import { ChangeEvent, FormEvent, useState, useEffect } from "react";
import { Course } from "../../models/Course";
import "./VocabularyTest.scss";

interface IVocabularyTestProps {
  course: Course;
}

interface IShowAnswers {
  [key: string]: boolean;
}

export const VocabularyTest = ({ course }: IVocabularyTestProps) => {
  const [answer, setAnswer] = useState<string>("");
  const [showAnswers, setShowAnswers] = useState<IShowAnswers>({});
  const [gameMessage, setGameMessage] = useState<string>("");
  const [gameOn, setGameOn] = useState<boolean>(true);
  const [correctWordsCount, setCorrectWordsCount] = useState<number>(0);

  useEffect(() => {
    setCorrectWordsCount(0);
  }, [course]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (gameOn) {
      setAnswer(e.target.value);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!gameOn) return;

    const [newShowAnswers, correctAnswer] = checkAnswer(answer);

    if (correctAnswer) {
      setGameMessage("Correct!");
    } else {
      setGameMessage("Incorrect, try again!");
    }

    setShowAnswers(newShowAnswers);
    setAnswer("");

    if (Object.keys(newShowAnswers).length === course.words.length) {
      setGameOn(false);
      setGameMessage(
        `You got ${correctWordsCount + 1}/${course.words.length} words correct!`
      );
    }
  };

  const checkAnswer = (input: string): [IShowAnswers, boolean] => {
    const newShowAnswers = { ...showAnswers };
    let correctAnswer = false;

    course.words.forEach((courseWord) => {
      if (input.trim().toLowerCase() === courseWord.word.trim().toLowerCase()) {
        newShowAnswers[courseWord.word] = true;
        correctAnswer = true;
        setCorrectWordsCount((prevCount) => prevCount + 1);
      }
    });

    return [newShowAnswers, correctAnswer];
  };

  const handleShowAnswers = () => {
    const showAllAnswers: IShowAnswers = {};
    course.words.forEach((courseWord) => {
      showAllAnswers[courseWord.word] = true;
    });
    setShowAnswers(showAllAnswers);
    setGameOn(false);
  };

  const handleReset = () => {
    setAnswer("");
    setShowAnswers({});
    setGameMessage("");
    setGameOn(true);
    setCorrectWordsCount(0);
  };

  return (
    <section className="test__container">
      <form className="test-form" onSubmit={handleSubmit}>
        <div className="test-form__group">
          <input
            className="test-form__input"
            type="text"
            value={answer}
            onChange={handleChange}
            placeholder="Enter word"
            disabled={!gameOn}
            aria-label="Enter word"
          />
          <button className="test-btn--submit" type="submit" disabled={!gameOn}>
            Submit
          </button>
        </div>
        <div className="test-form-btn__container">
          {!gameOn && (
            <button
              className="test-btn--reset"
              type="button"
              onClick={handleReset}
            >
              Reset
            </button>
          )}
          <button
            className="test-btn--show"
            type="button"
            onClick={handleShowAnswers}
            disabled={!gameOn}
          >
            Show Answers
          </button>
        </div>
      </form>

      {gameMessage && <p className="feedback">{gameMessage}</p>}

      <section className="course__table-box">
        <table>
          <thead>
            <tr>
              <th>Word</th>
              <th>Translation</th>
            </tr>
          </thead>
          <tbody>
            {course.words.map((courseWord) => (
              <tr key={courseWord.word}>
                <td>
                  {showAnswers[courseWord.word] ? courseWord.word : "???"}
                </td>
                <td>{courseWord.translation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </section>
  );
};
