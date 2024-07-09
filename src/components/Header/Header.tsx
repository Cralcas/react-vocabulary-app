import { NavLink } from "react-router-dom";
import "./Header.scss";
import { useEffect, useState } from "react";

export const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <header className={`header ${hasScrolled ? "shadow" : ""}`}>
        <nav>
          <NavLink to={"/"}>
            <img src="/images/book-study.svg" />
          </NavLink>
        </nav>
      </header>
    </>
  );
};
