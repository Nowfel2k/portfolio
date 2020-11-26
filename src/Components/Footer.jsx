import React from "react";
import "../Style/index.css";

function Footer() {
  return (
    <footer className="footer">
      <a
        rel="noreferrer"
        href="mailto:muhammednavfal1@gmail.com"
        className="footer__link"
      >
        @muhammednavfal
      </a>
      <ul className="social-list">
        <li className="social-list__item">
          <a
            rel="noreferrer"
            className="social-list__link"
            target="_blank"
            href="https://github.com/nowfel2k"
          >
            <i className="fab fa-github"></i>
          </a>
        </li>
        <li className="social-list__item">
          <a
            rel="noreferrer"
            className="social-list__link"
            target="_blank"
            href="https://www.messenger.com/t/nowfel2k"
          >
            <i className="fab fa-facebook-messenger"></i>
          </a>
        </li>
        <li className="social-list__item">
          <a
            rel="noreferrer"
            className="social-list__link"
            target="_blank"
            href="https://twitter.com/Navfal14"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li className="social-list__item">
          <a
            rel="noreferrer"
            className="social-list__link"
            target="_blank"
            href="https://www.linkedin.com/in/nowfel2k"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </li>

        <li className="social-list__item">
          <a
            rel="noreferrer"
            className="social-list__link"
            target="_blank"
            href="https://instagram.com/navfal.js"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
