import { useParams } from "react-router-dom";
import { useCourse } from "../hooks/useCourse";

export const CoursePage = () => {
  const { courseId } = useParams();
  const { courses } = useCourse();

  if (!courseId) {
    return <span>Course ID is missing or invalid</span>;
  }

  const course = courses.find((course) => course.id === parseInt(courseId));

  return <>{course && <p>{course.language}</p>}</>;
};
