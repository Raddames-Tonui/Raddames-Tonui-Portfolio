import React, { useRef } from "react";
import Home from "./portfolio/Home";
import AboutMe from "./portfolio/AboutMe";
import MyProjects from "./portfolio/MyProjects";
import MyContacts from "./portfolio/MyContacts";
import ContactMeForm from "./portfolio/ContactMeForm";
import Footer from "./components/Footer";

const Portfolio = () => {
  const contactRef = useRef(null);

  return (
    <div>
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <AboutMe />
      </section>
      <section id="projects">
        <MyProjects />
      </section>
      <section >
        <MyContacts />
      </section>
      <section id="contact">
        <ContactMeForm ref={contactRef} />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default Portfolio;
