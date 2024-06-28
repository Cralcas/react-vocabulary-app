import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/create-course");
  };

  return (
    <>
      <button onClick={handleClick}>Create a course</button>
    </>
  );
};
