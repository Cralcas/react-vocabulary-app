import { useNavigate } from "react-router-dom";
import { useCourse } from "../hooks/useCourse";
import { Card } from "../components/Card";
import { ErrorMessage } from "../components/ErrorMessage";

export const Home = () => {
  const navigate = useNavigate();
  const { courses } = useCourse();

  const handleClick = () => {
    navigate("/create-course");
  };

  return (
    <>
      <button onClick={handleClick} aria-label="Create a new course">
        Create a course
      </button>

      <section>
        {courses.length > 0 ? (
          courses.map((course) => <Card course={course} key={course.id} />)
        ) : (
          <ErrorMessage message="No courses available. Please create one!" />
        )}
      </section>
    </>
  );
};
