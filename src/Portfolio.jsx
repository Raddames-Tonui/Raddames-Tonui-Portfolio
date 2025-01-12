// Portfolio.js
import React, { useRef } from "react";
import StickySection2 from "./portfolio/StickySection2";
import Home from "./portfolio/Home";
import AboutMe from "./portfolio/AboutMe";
import MyProjects from "./portfolio/MyProjects";
import Navbar from "./components/Navbar";

const Portfolio = () => {
  const contactRef = useRef(null);

  const handleDevOpsClick = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div >
     
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <AboutMe />
      </section>
      <section id="projects">
        <MyProjects handleDevOpsClick={handleDevOpsClick} />
      </section>
      <section id="contact">
        <StickySection2 contactRef={contactRef} />
      </section>
    </div>
  );
};

export default Portfolio;
