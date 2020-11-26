import React from "react";
import "../Style/index.css";

function Footer() {
  return (
    <footer className="footer">
      <a href="mailto:muhammednavfal1@gmail.com" className="footer__link">
        @muhammednavfal
      </a>
      <ul className="social-list">
        <li className="social-list__item">
          <a
            className="social-list__link"
            target="_blank"
            href="https://www.messenger.com/t/nowfel2k"
          >
            <i className="fab fa-facebook"></i>
          </a>
        </li>
        <li className="social-list__item">
          <a
            className="social-list__link"
            target="_blank"
            href="https://twitter.com/navfal.js"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li className="social-list__item">
          <a
            className="social-list__link"
            target="_blank"
            href="https://www.linkedin.com/in/nowfel2k"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
        <li className="social-list__item">
          <a
            className="social-list__link"
            target="_blank"
            href="https://github.com/nowfel2k"
          >
            <i className="fab fa-github"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
