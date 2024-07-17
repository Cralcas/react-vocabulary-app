import { useCourse } from "../../hooks/useCourse";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CourseTable } from "../../components/CourseTable/CourseTable";
import { VocabularyTest } from "../../components/VocabularyTest/VocabularyTest";
import "./CoursePage.scss";

export const CoursePage = () => {
  const { courses, deleteCourse } = useCourse();
  const [startPractice, setStartPractice] = useState<boolean>(false);
  const { courseId } = useParams();

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

  const handleClick = () => {
    if (startPractice) {
      setStartPractice(false);
    } else {
      navigate("/");
    }
  };
  return (
    <section className="course__container container">
      <div className="btn__container">
        <button className="back-btn" onClick={handleClick}>
          🡸 Back
        </button>

        {!startPractice && (
          <button className="delete-btn" onClick={handleDelete}>
            Delete
          </button>
        )}
      </div>
      {!startPractice ? (
        <section className="course__overview">
          {course && <CourseTable course={course} />}

          <button
            className="practice-btn"
            onClick={() => setStartPractice(true)}
          >
            Start Practice
          </button>
        </section>
      ) : (
        <>{course && <VocabularyTest course={course} />}</>
      )}
    </section>
  );
};
