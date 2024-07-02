import { Course } from "../models/Course";

interface ICardProps {
  course: Course;
}

export const Card = ({ course }: ICardProps) => {
  return (
    <>
      <div>
        <h3>{course.language}</h3>
      </div>
    </>
  );
};
