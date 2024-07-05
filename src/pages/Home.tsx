import { useNavigate } from "react-router-dom";
import { useCourse } from "../hooks/useCourse";
import { ShowCourses } from "../components/ShowCourses";

export const Home = () => {
  const navigate = useNavigate();
  const { courses } = useCourse();

  const handleClick = () => {
    navigate("/create-course");
  };

  return (
    <>
      <button onClick={handleClick}>Create a course</button>

      <ShowCourses courses={courses} />
    </>
  );
};
