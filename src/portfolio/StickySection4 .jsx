import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa"; // Importing icons from react-icons

const words = ["impressed", "excited", "inspired", "driven", "curious", "motivated", "eager", "ready"];

const StickySection4 = () => (
  <div className="h-[80vh] sticky top-0 bg-[#fdfaf5]">
    <div className="relative z-10 flex flex-col items-center justify-center text-center h-full text-black px-4">
      {/* ToAbout Section */}
      <div className="bg-[#fdfaf5] h-[50vh] flex flex-col justify-center items-center text-center mt-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-black">
          To all who are{" "}
          <span>
            <motion.div
              className="relative inline-block text-red-600 font-extrabold h-14 overflow-hidden sm:text-5xl text-3xl"
              style={{ display: "inline-block" }}
            >
              <motion.div
                animate={{
                  y: ["0%", "-100%"], // Moves from 0% to -100%
                }}
                transition={{
                  duration: 10,
                  ease: "linear", // Smooth transition
                  repeat: Infinity, // Loop indefinitely
                  repeatType: "loop", // Ensures continuous loop without any break
                  delay: 2, // Pause for 2 seconds before starting next word
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
            <FaLinkedin className="text-black hover:text-red-600 text-4xl" />
          </a>
          <a
            href="https://github.com/Raddames-Tonui"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-black hover:text-red-600 text-4xl" />
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default StickySection4;
