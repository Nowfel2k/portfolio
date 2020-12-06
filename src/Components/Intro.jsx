import React from "react";
import "../Style/index.css";
import selfie from "../Assets/images/selfie.jpg";

import react from "../Assets/images/language-icons/react.png";
import mern from "../Assets/images/language-icons/mern.png";
import nodedark from "../Assets/images/language-icons/nodedark.png";
import javascript from "../Assets/images/language-icons/javascript.png";
import css from "../Assets/images/language-icons/css.png";
import firebase from "../Assets/images/language-icons/firebase.png";

function Intro() {
  return (
    <section className="intro" id="home">
      <h1 className="section__title section__title--intro  title__left">
        Hi, I am <strong>Muhammed Navfal</strong>
      </h1>
      <p className="section__languages">
        <img src={javascript} alt="" />
        <img src={react} alt="" />
        <img src={nodedark} alt="" />
        <img src={mern} alt="" />
        <img src={css} alt="" />
        <img src={firebase} alt="" />
      </p>
      <p className="section__subtitle section__subtitle--intro">
        Full Stack Web Developer
      </p>
      <img src={selfie} alt="Portrait of Navfal" className="intro__img" />
    </section>
  );
}

export default Intro;
