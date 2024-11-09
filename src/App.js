import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <main>
      <Navbar />
      <Home />
      <About/>
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
