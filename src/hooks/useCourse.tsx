import {useState} from "react";
import {Course} from "../models/Course";
import {IWord} from "../models/IWord";

export const useCourse = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  const addCourse = (genre: string, language: string, words: IWord[]) => {
    const newCourse = new Course(genre, language, words);
    setCourses([...courses, newCourse]);
  };

  return {courses, addCourse};
};
