import React, { useState, useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import NavbarMobile from "./components/NavbarMobile";

const Layout = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust this based on your needs
    };

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

    // Detect clicks outside the navbar to close the mobile menu
    const handleClickOutside = (e) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(e.target) &&
        isMobile
      ) {
        setShowNavbar(false); // Close the navbar if clicked outside
      }
    };

    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [lastScrollY, isMobile]);

  return (
    <div className="min-h-screen flex flex-col no-scrollbar">
      {/* Render Navbar based on screen size */}
      {isMobile ? (
        <NavbarMobile
          isMobile={isMobile}
          showNavbar={showNavbar}
          setShowNavbar={setShowNavbar} // Pass setter to close navbar on link click
          navbarRef={navbarRef} // Pass ref to NavbarMobile
        />
      ) : (
        <Navbar isMobile={isMobile} showNavbar={showNavbar} />
      )}

      <main className="flex-grow no-scrollbar">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
