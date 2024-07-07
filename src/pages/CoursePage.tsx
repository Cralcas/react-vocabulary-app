import { useCourse } from "../hooks/useCourse";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { CourseTable } from "../components/CourseTable";
import { VocabularyTest } from "../components/VocabularyTest";

export const CoursePage = () => {
  const { courseId } = useParams();
  const { courses, deleteCourse } = useCourse();
  const [startPractice, setStartPractice] = useState<boolean>(false);

  const navigate = useNavigate();

  if (!courseId) {
    return <span>Course ID is missing or invalid</span>;
  }

  const course = courses.find((course) => course.id === parseInt(courseId));

  const handleDelete = () => {
    if (course) {
      deleteCourse(course.id);
      navigate("/");
    }
  };

  return (
    <>
      {!startPractice ? (
        <>
          {course && <CourseTable course={course} />}
          <button onClick={() => setStartPractice(true)}>Start Practice</button>
          <button onClick={handleDelete}>Delete Course</button>
        </>
      ) : (
        <>
          {course && (
            <VocabularyTest
              course={course}
              onEndPractice={() => setStartPractice(false)}
            />
          )}
        </>
      )}
    </>
  );
};
