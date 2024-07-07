import { useNavigate } from "react-router-dom";
import { useCourse } from "../../hooks/useCourse";
import { ShowCourses } from "../../components/Showcourses/ShowCourses";
import "./Home.scss";

export const Home = () => {
  const navigate = useNavigate();
  const { courses } = useCourse();

  const handleClick = () => {
    navigate("/create-course");
  };

  return (
    <>
      <section className="home__wrapper container">
        <button className="create-btn" onClick={handleClick}>
          Create a course +
        </button>
        <ShowCourses courses={courses} />
      </section>
    </>
  );
};
