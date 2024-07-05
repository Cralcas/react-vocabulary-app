import { useState } from "react";
import { Course } from "../models/Course";

interface IVocabularyTestProps {
  course: Course;
  onEndPractice: () => void;
}

interface AnswerStatus {
  allCorrect: boolean;
}

export const VocabularyTest = ({
  course,
  onEndPractice,
}: IVocabularyTestProps) => {
  const [answer, setAnswer] = useState<string>("");
  const [showAnswers, setShowAnswers] = useState<{ [key: string]: boolean }>(
    {}
  );
  const [feedback, setFeedback] = useState<string>("");
  const [gameOn, setGameOn] = useState<boolean>(true);
  const [answerStatus, setAnswerStatus] = useState<AnswerStatus>({
    allCorrect: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (gameOn) {
      setAnswer(e.target.value);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!gameOn) return;

    let correctAnswer = false;
    const newShowAnswers = { ...showAnswers };
    for (const testWord of course.words) {
      if (answer.trim().toLowerCase() === testWord.word.trim().toLowerCase()) {
        newShowAnswers[testWord.word] = true;
        correctAnswer = true;
        course.correctWords++;
      }
    }
    if (correctAnswer) {
      setFeedback("Correct!");
    } else {
      setFeedback("Incorrect, try again!");
    }
    setShowAnswers(newShowAnswers);
    setAnswer("");

    const allCorrect = course.words.every(
      (courseWord) => newShowAnswers[courseWord.word] === true
    );
    if (allCorrect) {
      setGameOn(false);
      setFeedback("Congratulations! You have completed the practice.");
      setAnswerStatus({ ...answerStatus, allCorrect: true });
    }
  };

  const revealAnswers = () => {
    const allShowAnswers = { ...showAnswers };
    course.words.forEach((courseWord) => {
      allShowAnswers[courseWord.word] = true;
    });
    setShowAnswers(allShowAnswers);
    setGameOn(false);
    setAnswerStatus({ ...answerStatus, allCorrect: true });
  };

  return (
    <section>
      <h3>{course.genre}</h3>
      <span>
        Correct words: {course.correctWords}/ {course.words.length}
      </span>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={answer}
          onChange={handleChange}
          placeholder="Enter word"
          disabled={!gameOn}
        />
        <button type="submit" disabled={!gameOn}>
          Submit
        </button>
        <button type="button" onClick={revealAnswers} disabled={!gameOn}>
          Show All Answers
        </button>
        <button type="button" onClick={onEndPractice}>
          End Practice
        </button>
      </form>
      {feedback && <p>{feedback}</p>}
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
              <td>{showAnswers[courseWord.word] ? courseWord.word : "???"}</td>
              <td>{courseWord.translation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};
