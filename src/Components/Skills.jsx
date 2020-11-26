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
            I can create amazing websites using Javascript, Firebase, ReactJS,
            ExpressJS with MongoDB, npm, git, CSS Flexbox, Grid etc. I can
            create stunning UI components to provide a good user experience.
          </p>
        </div>

        <div className="service">
          <h3>C++ Programming</h3>
          <p>
            I love solving competitive programming questions which are based on
            logical thinking and aptitude. I am learning DSA via GeeksForGeeks
            Course and I solve DSA questions on leetcode.
          </p>
        </div>

        <div className="service">
          <h3>Tutor</h3>
          <p>
            I have good knowledge in JavaScript, ReactJS, CSS, Data Structures
            in C++ and I can use this to teach you to become an excellent
            developer. I can help you to score high marks in your exams, to get
            good in solving DSA questions and prepare you for interviews.
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
