import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to={"/create-course"}>Course</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
