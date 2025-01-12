import React, { useState, useEffect } from "react";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  // Handle smooth scrolling to sections
  const handleNavClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`bg-white text-orange-500 p-4 shadow-md w-[40vw] mx-auto transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } fixed top-0 left-0 w-full z-50`}
    >
      <div className="max-w-7xl mx-auto w-full flex justify-center items-center">
        {/* Navigation Links */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:flex gap-6 items-center text-lg font-medium justify-center w-full`}
        >
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("home");
            }}
            className="hover:text-orange-600 hover:underline"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("about");
            }}
            className="hover:text-orange-600 hover:underline"
          >
            About
          </a>
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("projects");
            }}
            className="hover:text-orange-600 hover:underline"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("contact");
            }}
            className="hover:text-orange-600 hover:underline"
          >
            Contact
          </a>
        </div>

        {/* Hamburger Button for Mobile */}
        <button
          className="lg:hidden text-orange-500"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
