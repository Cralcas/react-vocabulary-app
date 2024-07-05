import { useState } from "react";
import { Course } from "../models/Course";

export const useCourse = () => {
  const getSavedCourses = (): Course[] => {
    const savedCourses = localStorage.getItem("courses");
    return savedCourses ? JSON.parse(savedCourses) : [];
  };

  const [courses, setCourses] = useState<Course[]>(getSavedCourses);

  const addCourse = (course: Course) => {
    const newCourse = new Course(course.genre, course.language, course.words);
    const updatedCourses = [...courses, newCourse];
    setCourses(updatedCourses);
    localStorage.setItem("courses", JSON.stringify(updatedCourses));
  };

  const deleteCourse = (id: number) => {
    const updatedCourses = courses.filter((course) => course.id !== id);
    setCourses(updatedCourses);
    localStorage.setItem("courses", JSON.stringify(updatedCourses));
  };

  return { courses, addCourse, deleteCourse };
};
