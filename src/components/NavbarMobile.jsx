import React, { useState } from "react";

function NavbarMobile({ showNavbar, setShowNavbar, navbarRef }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false); // Close the menu after a link is clicked
  };

  return (
    <nav
      ref={navbarRef}
      className={` text-lime-500 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } fixed top-0 left-0 w-full px-10 z-50 py-5`}
    >
      <div className="flex justify-between items-center">
        {/* Hamburger Button for Small Screens */}
        <button
          className="lg:hidden text-lime-500 focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            // X icon when menu is open
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Hamburger icon when menu is closed
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
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
          )}
        </button>

        {/* Mobile Navigation Menu */}
        <div
          className={`${
            isMenuOpen
              ? "fixed top-16 left-0 h-screen w-1/2 bg-gray-900 text-lime-500 flex flex-col items-start justify-center gap-6 p-8 transition-all duration-300"
              : "hidden"
          } lg:hidden text-lg font-medium`}
        >
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

export default NavbarMobile;
