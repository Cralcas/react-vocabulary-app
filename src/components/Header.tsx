import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to={"/"}>Icon</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
