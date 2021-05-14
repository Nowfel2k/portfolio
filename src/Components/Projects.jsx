import React, { useEffect, useState } from "react";
import "../Style/index.css";
import projects from "../projects";
import ProjectCard from "./ProjectCard";

import react from "../Assets/images/language-icons/react.png";
import mern from "../Assets/images/language-icons/mern.png";
import python from "../Assets/images/language-icons/python.png";
import nodeimg from "../Assets/images/language-icons/node.png";
import javascript from "../Assets/images/language-icons/javascript.png";
import c from "../Assets/images/language-icons/c.png";

function Projects() {
  const [section, setSection] = useState("React");
  const [projectList, setProjectList] = useState([]);

  const changeSection = (language) => {
    console.log(projectList);

    return setSection(language);
  };

  useEffect(() => {
    setProjectList(projects.filter((proj) => proj.section === section));
  }, [section]);

  return (
    <section className="my-work" id="work">
      <h2 className="section__title section__title--work">My works</h2>
      <p className="section__subtitle section__subtitle--work">
        A selection of my range of works
      </p>

      <nav>
        <ul className={"my-work__navigation"}>
          <li onClick={() => changeSection("JavaScript")}>
            <img src={javascript} alt="" />
          </li>
          <li onClick={() => changeSection("React")}>
            <img src={react} alt="" />
          </li>
          <li onClick={() => changeSection("MERN")}>
            <img src={mern} alt="" />
          </li>
          <li onClick={() => changeSection("NodeJS")}>
            <img src={nodeimg} alt="" />
          </li>
          <li onClick={() => changeSection("C/C++")}>
            <img src={c} alt="" />
          </li>
          <li onClick={() => changeSection("Python")}>
            <img src={python} alt="" />
          </li>
        </ul>
      </nav>

      {projectList.map(({ image, name, language, date, site, code }) => (
        <ProjectCard
          image={image}
          name={name}
          language={language}
          date={date}
          site={site}
          code={code}
        />
      ))}

      {/* <ReactProjects /> */}

      {/* <div className="portfolio">
        <a  rel="noreferrer" 
          target="_blank"
          href="https://www.youtube.com/watch?v=KovLKs5n7_A"
          className="portfolio__item"
        >
          <img
            src={`/Assets/images/chess.jpg`}
            alt=""
            className="portfolio__img"
          />
        </a>

        <a  rel="noreferrer"  target="_blank" href="#" className="portfolio__item">
          <img
            src={`/Assets/images/connect4.jpg`}
            alt=""
            className="portfolio__img"
          />
        </a>

        <a  rel="noreferrer"  target="_blank" href="#" className="portfolio__item">
          <img
            src={`/Assets/images/ssn.jpg`}
            alt=""
            className="portfolio__img"
          />
        </a>

        <a  rel="noreferrer"  target="_blank" href="#" className="portfolio__item">
          <img
            src={`/Assets/images/patient.jpg`}
            alt=""
            className="portfolio__img"
          />
        </a>

        <a  rel="noreferrer" 
          target="_blank"
          href="http://navfal-dev.github.io/js-calculator"
          className="portfolio__item"
        >
          <img
            src={`/Assets/images/calci.jpg`}
            alt=""
            className="portfolio__img"
          />
        </a>

        <a  rel="noreferrer"  target="_blank" href="#" className="portfolio__item">
          <img
            src={`/Assets/images/tictactoe.png`}
            alt=""
            className="portfolio__img"
          />
        </a>

        <a  rel="noreferrer"  target="_blank" href="#" className="portfolio__item">
          <img
            src={`/Assets/images/profile.jpg`}
            alt=""
            className="portfolio__img"
          />
        </a>

        <a  rel="noreferrer"  target="_blank" href="#" className="portfolio__item">
          <img
            src={`/Assets/images/library.jpg`}
            alt=""
            className="portfolio__img"
          />
        </a>

        <a  rel="noreferrer"  target="_blank" href="#" className="portfolio__item">
          <img
            src={`/Assets/images/string.jpg`}
            alt=""
            className="portfolio__img"
          />
        </a>

        <a  rel="noreferrer"  target="_blank" href="#" className="portfolio__item">
          <img
            src={`/Assets/images/taxi.jpg`}
            alt=""
            className="portfolio__img"
          />
        </a>

        <a  rel="noreferrer"  target="_blank" href="#" className="portfolio__item">
          <img
            src={`/Assets/images/lift.jpg`}
            alt=""
            className="portfolio__img"
          />
        </a>
      </div> */}
    </section>
  );
}

export default Projects;
