import { useNavigate } from "react-router-dom";
import { Form } from "../../components/Form/Form";
import { useCourse } from "../../hooks/useCourse";
import "./CreateCourse.scss";

export const CreateCourse = () => {
  const { addCourse } = useCourse();

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  return (
    <section className="create-course__container  container">
      <button className="back-btn" onClick={handleClick}>
        🡸 Back
      </button>

      <Form addCourse={addCourse} />
    </section>
  );
};