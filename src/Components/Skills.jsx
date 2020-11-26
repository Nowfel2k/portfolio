import React from "react";
import "../Style/index.css";

function Skills() {
  return (
    <section className="my-services" id="services">
      <h2 className="section__title section__title--services">What I do</h2>
      <div className="services">
        <div className="service">
          <h3>Web Development</h3>
          <p>
            I can create amazing websites using javascript libraries such as
            React, JQuery and Frameworks like Angular. I can create stunning UI
            components to provide a good user experience.
          </p>
        </div>

        <div className="service">
          <h3>C++ Programming</h3>
          <p>
            I love solving competitive questions based on logic and aptitude. I
            have a good profile in coding platforms such as in HackerRank,
            HackerEarth{" "}
          </p>
        </div>

        <div className="service">
          <h3>Tutor</h3>
          <p>
            I have good knowledge in JavaScript, C, C++, Angular, React and I
            can use this to teach you to become an excellent developer. You can
            score high marks in your exams, solve your assignments, clear
            interviews and get placed in reputed IT companies.
          </p>
        </div>
      </div>

      <a href="#work" className="btn">
        My Work
      </a>
    </section>
  );
}

export default Skills;
