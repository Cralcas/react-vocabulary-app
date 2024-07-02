import { useNavigate } from "react-router-dom";
import { Course } from "../models/Course";

interface ICardProps {
  course: Course;
}

export const ShowCard = ({ course }: ICardProps) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/course/" + course.id);
  };

  return (
    <>
      <div>
        <h3>{course.language}</h3>
        <button onClick={handleNavigate}>Practice</button>
      </div>
    </>
  );
};
