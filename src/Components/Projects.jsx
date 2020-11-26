import React from "react";
import "../Style/index.css";

function Projects() {
  return (
    <section className="my-work" id="work">
      <h2 className="section__title section__title--work">My work</h2>
      <p className="section__subtitle section__subtitle--work">
        A selection of my range of work
      </p>

      {/* <div className="portfolio">
        <a
          target="_blank"
          href="https://www.youtube.com/watch?v=KovLKs5n7_A"
          className="portfolio__item"
        >
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/chess.jpg`}
            alt=""
            className="portfolio__img"
          />
        </a>

        <a target="_blank" href="#" className="portfolio__item">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/connect4.jpg`}
            alt=""
            className="portfolio__img"
          />
        </a>

        <a target="_blank" href="#" className="portfolio__item">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/ssn.jpg`}
            alt=""
            className="portfolio__img"
          />
        </a>

        <a target="_blank" href="#" className="portfolio__item">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/patient.jpg`}
            alt=""
            className="portfolio__img"
          />
        </a>

        <a
          target="_blank"
          href="http://nowfel2k.github.io/js-calculator"
          className="portfolio__item"
        >
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/calci.jpg`}
            alt=""
            className="portfolio__img"
          />
        </a>

        <a target="_blank" href="#" className="portfolio__item">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/tictactoe.png`}
            alt=""
            className="portfolio__img"
          />
        </a>

        <a target="_blank" href="#" className="portfolio__item">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/profile.jpg`}
            alt=""
            className="portfolio__img"
          />
        </a>

        <a target="_blank" href="#" className="portfolio__item">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/library.jpg`}
            alt=""
            className="portfolio__img"
          />
        </a>

        <a target="_blank" href="#" className="portfolio__item">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/string.jpg`}
            alt=""
            className="portfolio__img"
          />
        </a>

        <a target="_blank" href="#" className="portfolio__item">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/taxi.jpg`}
            alt=""
            className="portfolio__img"
          />
        </a>

        <a target="_blank" href="#" className="portfolio__item">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/lift.jpg`}
            alt=""
            className="portfolio__img"
          />
        </a>
      </div> */}
    </section>
  );
}

export default Projects;
