import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const words = ["stuck?", "sparked?", "intrigued?", "fired up?", "collaborative?", "motivated?"];
const loopedWords = [...words, ...words]; // duplicated list for looping

const MyContacts = () => {
  return (
    <div className="bg-gray-900">
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4 min-h-[70vh]">
        <div className="flex flex-col justify-center items-center text-center mt-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-lime-500">
            Feeling{" "}
            <span className="inline-block relative h-14 overflow-hidden align-middle">
              <motion.div
                className="flex flex-col"
                animate={{ y: [`0%`, `-50%`] }} // move through half since list is doubled
                transition={{
                  duration: loopedWords.length * 1.2, // adjust speed
                  ease: "linear",
                  repeat: Infinity,
                }}
              >
                {loopedWords.map((word, index) => (
                  <div
                    key={index}
                    className="h-20 flex items-center justify-start text-white"
                    style={{ lineHeight: "3.5rem" }} 
                  >
                    {word}
                  </div>
                ))}
              </motion.div>
            </span>
          </h1>

          <div className="flex mt-8 space-x-8">
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
    </div>
  );
};

export default MyContacts;
