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
      window.removeEventListener("scroll", handleScroll); // Cleanup on unmount
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`bg-white text-orange-500 p-4 shadow-md transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } fixed top-0 left-0 w-full z-50`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <img src="/flavicon.png" alt="logo" className="w-10 h-10" />

        {/* Navigation Links */}
        <div className="flex gap-6 items-center text-lg font-medium">
          <a href="#home" className="hover:text-orange-600 hover:underline">
            Home
          </a>
          <a href="#about" className="hover:text-orange-600 hover:underline">
            About
          </a>
          <a href="#projects" className="hover:text-orange-600 hover:underline">
            Projects
          </a>
          <a href="#contact" className="hover:text-orange-600 hover:underline">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
