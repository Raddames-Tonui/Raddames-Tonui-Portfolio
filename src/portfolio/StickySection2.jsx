import React, { useRef } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import ContactMe from "./ContactMeForm";
import Footer from "../components/Footer";

const words = ["impressed", "excited", "inspired", "driven", "curious", "motivated", "eager", "ready"];

const StickySection2= () => {
  const contactRef = useRef(null);

  const handleDevOpsClick = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="h-screen sticky top-0 bg-gray-800">
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-[60vh] text-white px-4">
        {/* ToAbout Section */}
        <div className="bg-gray-800 h-[50vh] flex flex-col justify-center items-center text-center mt-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-lime-500">
            To all who are{" "}
            <span>
              <motion.div
                className="relative inline-block text-white font-extrabold h-14 overflow-hidden sm:text-5xl text-3xl"
                style={{ display: "inline-block" }}
              >
                <motion.div
                  animate={{
                    y: ["0%", "-100%"],
                  }}
                  transition={{
                    duration: 10,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "loop",
                    delay: 4,
                  }}
                >
                  {words.map((word, index) => (
                    <div
                      key={index}
                      className="h-14 mb-8 flex items-center"
                      style={{ fontSize: "1.35em" }}
                    >
                      {word}
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            </span>
          </h1>

         
          {/* Social Media Icons */}
          <div className="flex mt-12 space-x-8">
            <a
              href="https://www.linkedin.com/in/raddames-tonui-01a751277/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-white hover:text-lime-600 text-4xl" />
            </a>
            <a
              href="https://github.com/Raddames-Tonui"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-white hover:text-lime-600 text-4xl" />
            </a>
          </div>
        </div>
      </div>
      <ContactMe ref={contactRef} />
      <Footer />
    </div>
  );
};

export default StickySection2
