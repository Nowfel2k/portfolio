import React from "react";
import "../Style/ProjectCard.scss";

function ProjectCard({ name, language, site, code, image, date }) {
  return (
    <div className="projectCard">
      <a target="_blank" rel="noreferrer" href={site}>
        <img src={image} alt="project" />
      </a>

      <div className="projectCard__info">
        <h2>{name}</h2>
        <h4>{language}</h4>
        <p>{date}</p>
        <div className="projectCard__buttons">
          {site && (
            <a
              target="_blank"
              rel="noreferrer"
              href={site}
              className="projectCard__btn live-site"
            >
              Live<span class="live-icon"></span>
            </a>
          )}
          {code && (
            <a
              target="_blank"
              rel="noreferrer"
              href={code}
              className="projectCard__btn github-site"
            >
              Code <i class="fab fa-github"></i>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
