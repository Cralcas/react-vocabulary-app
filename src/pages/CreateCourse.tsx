import { useNavigate } from "react-router-dom";
import { Form } from "../components/Form";
import { useCourse } from "../hooks/useCourse";

export const CreateCourse = () => {
  const { addCourse } = useCourse();

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  return (
    <>
      <p onClick={handleClick}>Back</p>
      <h2>Create a course</h2>

      <Form addCourse={addCourse} />
    </>
  );
};
