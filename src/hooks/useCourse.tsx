import {useState} from "react";
import {Course} from "../models/Course";
import {IWord} from "../models/IWord";

export const useCourse = () => {
  const getSavedCourses = (): Course[] => {
    const savedCourses = localStorage.getItem("courses");
    return savedCourses ? JSON.parse(savedCourses) : [];
  };

  const [courses, setCourses] = useState<Course[]>(getSavedCourses);

  const addCourse = (genre: string, language: string, words: IWord[]) => {
    const newCourse = new Course(genre, language, words);
    const updatedCourses = [...courses, newCourse];
    setCourses(updatedCourses);
    localStorage.setItem("courses", JSON.stringify(updatedCourses));
  };

  return {courses, addCourse};
};
