import React, { useState } from "react";
import { Course } from "../models/Course";

interface IVocabularyTestProps {
  course: Course;
  onEndPractice: () => void;
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (gameOn) {
      setAnswer(e.target.value);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!gameOn) return;

    const newShowAnswers = { ...showAnswers };
    let correctAnswer = false;

    course.words.forEach((courseWord) => {
      if (
        answer.trim().toLowerCase() === courseWord.word.trim().toLowerCase()
      ) {
        newShowAnswers[courseWord.word] = true;
        correctAnswer = true;
        course.correctWords++;
      }
    });

    if (correctAnswer) {
      setFeedback("Correct!");
    } else {
      setFeedback("Incorrect, try again!");
    }

    setShowAnswers(newShowAnswers);
    setAnswer("");

    if (Object.keys(newShowAnswers).length === course.words.length) {
      setGameOn(false);
      setFeedback("Congratulations! You have completed the practice.");
    }
  };

  const handleShowAnswers = () => {
    const showAllAnswers: { [key: string]: boolean } = {};
    course.words.forEach((courseWord) => {
      showAllAnswers[courseWord.word] = true;
    });
    setShowAnswers(showAllAnswers);
    setGameOn(false);
    setFeedback("Answers revealed!");
  };

  return (
    <section>
      <h3>{course.subject}</h3>
      <span>
        Correct words: {course.correctWords}/{course.words.length}
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
        <button type="button" onClick={handleShowAnswers} disabled={!gameOn}>
          Show Answers
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
