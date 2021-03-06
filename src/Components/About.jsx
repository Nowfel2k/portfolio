import React from "react";
import "../Style/index.css";
import profileleft from "../Assets/images/profile-left.jpg";

function About() {
  return (
    <section className="about-me" id="about">
      <h2 className="section__title section__title--about title__left">
        Who I am
      </h2>
      <p className="section__subtitle section__subtitle--about  title__left">
        Software Engineer from Chennai, India
      </p>
      <img src={profileleft} alt="Portrait" className="about-me__img" />

      <div className="about-me__body">
        <p>
          I am a Full-Stack Javascript Developer from Chennai, India. I have
          been coding for the past two years and I have worked on various
          languages and libraries such as JavaScript, Jquery, CSS, ReactJS,
          Google Firebase, C++ for DSA and more.
        </p>
        <p>
          On October 2020, I passed out of college as Bachelor's graduate with
          8.5 cumulative GPA. I had my fair share of coding fun in college by
          winning in coding contests, learning and teaching my friends, and
          conducting contests for other students.
        </p>
        <p>
          I was offered job by TATA Consultancy Service and Wipro but I had to
          reject them because I wanted to aim higher. So I applied for a
          developer position in Zoho and after some challenging rounds I cleared
          the interviews and joined Zoho in 2021.
        </p>
      </div>
    </section>
  );
}

export default About;
