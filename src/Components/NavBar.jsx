import React from "react";
import "../Style/index.css";
import { Link } from "react-scroll";

function NavBar() {
  const handleClick = () => {
    document.body.classList.remove("nav-open");
  };

  return (
    <header>
      <button
        onClick={() => {
          document.body.classList.toggle("nav-open");
        }}
        className="nav-toggle"
        aria-label="toggle navigation"
      >
        <span className="hamburger"></span>
      </button>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <Link
              to="home"
              onClick={handleClick}
              className="nav__link"
              duration={1500}
              delay={500}
              smooth
            >
              Home
            </Link>
          </li>

          <li className="nav__item">
            <Link
              to="about"
              onClick={handleClick}
              className="nav__link"
              duration={1500}
              delay={500}
              smooth
            >
              About me
            </Link>
          </li>

          <li className="nav__item">
            <Link
              to="services"
              onClick={handleClick}
              className="nav__link"
              duration={1500}
              delay={500}
              smooth
            >
              My Services
            </Link>
          </li>

          <li className="nav__item">
            <Link
              to="work"
              onClick={handleClick}
              className="nav__link"
              duration={1500}
              delay={500}
              smooth
            >
              My Work
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
