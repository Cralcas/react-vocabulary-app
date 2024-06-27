import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to={"/"}>Start</NavLink>
            </li>
            <li>
              <NavLink to={"/createcourse"}>Course</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
