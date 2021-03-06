import React, { useEffect } from "react";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Intro from "./Components/Intro";
import NavBar from "./Components/NavBar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import "./Style/App.css";
import ReturnToTop from "./Components/ReturnToTop";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="app">
      <NavBar />
      <Intro />
      <About />
      <Skills />
      <Projects />
      <Footer />
      <ReturnToTop />
    </div>
  );
}

export default App;
