import React from "react";
import Section1 from "./portfolio/Section1";
import Section2 from "./portfolio/Section2";
import StickySection1 from "./portfolio/StickySection1";
import StickySection2 from "./portfolio/StickySection2";
import StickySection3 from "./portfolio/StickySection3";
import StickySection4 from "./portfolio/StickySection4 ";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ContactMe from "./portfolio/ContactMe";


const App = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar/>
    <Section1 />
    <Section2 />
    <div className="relative "> 
      <StickySection1 />
      <StickySection2 />
      <StickySection3 />
      <StickySection4 />
    </div>
    <ContactMe />
    <Footer />
  </div>
);



export default App;