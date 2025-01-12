import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import NavbarMobile from "./components/NavbarMobile";

const Layout = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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

    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className="min-h-screen flex flex-col no-scrollbar ">
      {/* Render Navbar based on screen size */}
      {isMobile ? (
        <NavbarMobile isMobile={isMobile} showNavbar={showNavbar} />
      ) : (
        <Navbar isMobile={isMobile} showNavbar={showNavbar} />
      )}

      <main className=" flex-grow no-scrollbar">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
