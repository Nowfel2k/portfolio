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
            bootstrap, npm, git, CSS Flex, Grid and more. I can create stunning
            UI components to provide a good user experience.
          </p>
        </div>

        <div className="service">
          <h3>C++ Programming</h3>
          <p>
            I love solving competitive programming/interview questions which are
            based on logical thinking and aptitude. I learn from various sources
            such as GeeksForGeeks, Leetcode, Hackerrank, YouTube - Prepbytes,
            Abdul Bari.
          </p>
        </div>

        <div className="service">
          <h3>Tutor</h3>
          <p>
            I have good knowledge in HTML & CSS, JavaScript, ReactJS, Bootstrap,
            Google Firebase - Authentication, Firestore, Hosting, Data Structure
            and Algorithm in C++ and I can guide you to become an excellent
            developer.
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
