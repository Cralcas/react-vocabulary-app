import { Course } from "../models/Course";
import { ErrorMessage } from "./ErrorMessage";
import { ShowCard } from "./ShowCard";

interface ICardProps {
  courses: Course[];
}

export const ShowCourses = ({ courses }: ICardProps) => {
  return (
    <section className="course__container">
      {courses.length > 0 ? (
        courses.map((course) => <ShowCard course={course} key={course.id} />)
      ) : (
        <ErrorMessage message="No courses available. Please create one!" />
      )}
    </section>
  );
};
