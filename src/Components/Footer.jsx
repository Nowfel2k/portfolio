import React from "react";
import "../Style/index.css";

function Footer() {
  return (
    <footer className="footer">
      <a
        rel="noreferrer"
        href="mailto:navfal.dev@gmail.com"
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
            href="https://github.com/navfal-dev"
          >
            <i className="fab fa-github"></i>
          </a>
        </li>
        <li className="social-list__item">
          <a
            rel="noreferrer"
            className="social-list__link"
            target="_blank"
            href="https://twitter.com/devNaufal"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li className="social-list__item">
          <a
            rel="noreferrer"
            className="social-list__link"
            target="_blank"
            href="https://www.linkedin.com/in/navfal-dev"
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
