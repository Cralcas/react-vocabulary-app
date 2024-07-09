import { useNavigate } from "react-router-dom";
import { Course } from "../../models/Course";
import "./ShowCard.scss";

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
      <section className="card">
        <h3 className="card__language">{course.language}</h3>
        <h4 className="card__subject">{course.subject}</h4>
        <button className="card__btn--practice" onClick={handleNavigate}>
          Practice
        </button>
      </section>
    </>
  );
};
