import React from "react";
import "../Style/index.css";

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
            <a href="#home" onClick={handleClick} className="nav__link">
              Home
            </a>
          </li>
          <li className="nav__item">
            <a href="#services" onClick={handleClick} className="nav__link">
              My Services
            </a>
          </li>
          <li className="nav__item">
            <a href="#about" onClick={handleClick} className="nav__link">
              About me
            </a>
          </li>
          <li className="nav__item">
            <a href="#work" onClick={handleClick} className="nav__link">
              My Work
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
