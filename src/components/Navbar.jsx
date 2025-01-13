import React, { useState, useEffect } from "react";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false); // Hide navbar on scroll down
      } else {
        setShowNavbar(true); // Show navbar on scroll up
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const handleNavClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`bg-gray-900 text-lime-500 transition-transform duration-400 ${
        showNavbar ? "translate-y-0" : "-translate-y-[110vh]"
      } fixed top-2 px-7 rounded-full  left-1/2 transform -translate-x-1/2 z-50 py-4 border-2 border-lime-900`}
    >
      <div className="flex justify-between items-center">
        {/* Navigation Links for Medium and Above Screens */}
        <div className="lg:flex lg:justify-center lg:gap-6 lg:items-center lg:static lg:w-auto lg:bg-transparent lg:flex-row text-lg font-medium">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("home");
            }}
            className="hover:text-lime-600 hover:underline"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("about");
            }}
            className="hover:text-lime-600 hover:underline"
          >
            About
          </a>
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("projects");
            }}
            className="hover:text-lime-600 hover:underline"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("contact");
            }}
            className="hover:text-lime-600 hover:underline"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
