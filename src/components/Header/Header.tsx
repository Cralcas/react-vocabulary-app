import { NavLink } from "react-router-dom";
import "./Header.scss";

export const Header = () => {
  return (
    <header>
      <nav>
        <NavLink to={"/"}>
          <img src="/images/book-study.svg" alt="App logo" />
        </NavLink>
      </nav>
    </header>
  );
};
