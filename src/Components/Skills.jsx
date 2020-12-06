import React from "react";
import "../Style/index.css";
import { Link } from "react-scroll";

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
            I have good knowledge in JavaScript, ReactJS, Google Firebase,
            NodeJS, ExpressJS, MongoDB, CSS, Data Structure and Algorithm in C++
            and I can guide you to become an excellent developer.
          </p>
        </div>
      </div>

      <Link to="work" className="btn" smooth duration={1500}>
        My Work
      </Link>
    </section>
  );
}

export default Skills;
