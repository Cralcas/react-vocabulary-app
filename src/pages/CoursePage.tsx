import { useParams } from "react-router-dom";
import { useCourse } from "../hooks/useCourse";
import { useState } from "react";
import { CourseTable } from "../components/CourseTable";
import { VocabularyTest } from "../components/VocabularyTest";

export const CoursePage = () => {
  const { courseId } = useParams();
  const { courses } = useCourse();

  const [startPractice, setStartPractice] = useState<boolean>(false);

  if (!courseId) {
    return <span>Course ID is missing or invalid</span>;
  }

  const course = courses.find((course) => course.id === parseInt(courseId));

  return (
    <>
      {!startPractice ? (
        <>
          {course && <CourseTable course={course} />}
          <button onClick={() => setStartPractice(true)}>Start Practice</button>
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
