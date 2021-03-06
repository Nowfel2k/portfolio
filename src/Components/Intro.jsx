import React from "react";
import "../Style/index.css";

import selfie from "../Assets/images/selfie.jpg";
import react from "../Assets/images/language-icons/react.png";
import c from "../Assets/images/language-icons/c.png";
import javascript from "../Assets/images/language-icons/javascript.png";
import css from "../Assets/images/language-icons/css.png";
import firebase from "../Assets/images/language-icons/firebase.png";
import zoho from "../Assets/images/zoho.png";

function Intro() {
  return (
    <section className="intro__container" id="home">
      <div className="intro">
        <h1 className="section__title section__title--intro  title__left">
          Hi, I am <strong>Muhammed Navfal</strong>
        </h1>
        <p className="section__subtitle section__subtitle--intro">
          Front End Engineer @ Zoho Corporation
          {/* <img src={zoho} alt="companyLogo" className="company__logo" /> */}
        </p>
        <p className="section__languages">
          <img src={javascript} alt="" />
          <img src={react} alt="" />
          <img src={css} alt="" />
          <img src={c} alt="" />
          <img src={firebase} alt="" />
        </p>
        <img src={selfie} alt="Portrait of Navfal" className="intro__img" />
      </div>
    </section>
  );
}

export default Intro;
