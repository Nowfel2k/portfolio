import React from "react";
import "../Style/index.css";

function Intro() {
  return (
    <section className="intro" id="home">
      <h1 className="section__title section__title--intro">
        Hi, I am <strong>Muhammed Navfal</strong>
      </h1>
      <p className="section__subtitle section__subtitle--intro">
        Full Stack Web Developer
      </p>
      <img
        src={`${process.env.PUBLIC_URL}/assets/images/hottie.jpg`}
        alt="Portrait of Navfal"
        className="intro__img"
      />
    </section>
  );
}

export default Intro;
