import { useNavigate } from "react-router-dom";
import { useCourse } from "../hooks/useCourse";
import { ShowCards } from "../components/Showcards";

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

      <ShowCards courses={courses} />
    </>
  );
};
