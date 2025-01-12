import React, { useRef } from "react";
import Section1 from "./portfolio/Section1";
import Section2 from "./portfolio/Section2";
import StickySection1 from "./portfolio/StickySection1";
import StickySection2 from "./portfolio/StickySection2";
import Navbar from "./components/Navbar";

const App = () => {
  const contactRef = useRef(null);

  const handleDevOpsClick = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Section1 />
      <Section2 />
      <div className="relative">
        <StickySection1 handleDevOpsClick={handleDevOpsClick} />
        <StickySection2 contactRef={contactRef} />
      </div>
    </div>
  );
};

export default App;
