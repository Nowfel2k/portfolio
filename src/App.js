import React from "react";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Intro from "./Components/Intro";
import NavBar from "./Components/NavBar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import "./App.css";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Intro />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
