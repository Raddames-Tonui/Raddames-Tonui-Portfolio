import React from "react";

const StickySection1 = () => (
  <div
    className="h-screen sticky top-0 bg-cover bg-center relative"
    style={{ backgroundImage: `url('books2.jpeg')` }}
  >
    {/* Background Overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-80"></div>

    {/* Content */}
    <div className="relative z-10 flex flex-col items-center justify-center text-center h-full text-white px-6 animate-fadeIn">
      <h1 className="text-6xl sm:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-lime-500 to-cyan-500">
        Full-Stack Web Developer
      </h1>
      <p className="text-2xl sm:text-3xl mb-4 font-semibold text-gray-200">
        Crafting solutions for the web with passion and precision
      </p>

      {/* Skills Section */}
      <div className="mt-8 bg-gray-800 bg-opacity-70 p-6 sm:p-8 rounded-xl shadow-lg">
        <p className="text-xl sm:text-2xl font-bold mb-4 text-lime-400">
          Frontend Expertise
        </p>
        <p className="text-lg sm:text-xl mb-4 text-gray-300">
          HTML, CSS, JavaScript, React, Tailwind CSS
        </p>

        <p className="text-xl sm:text-2xl font-bold mb-4 text-cyan-400">
          Backend Knowledge
        </p>
        <p className="text-lg sm:text-xl mb-4 text-gray-300">Python, Flask</p>

        <p className="text-xl sm:text-2xl font-bold mb-4 text-orange-400">
          DevOps Mastery
        </p>
        <p className="text-lg sm:text-xl text-gray-300">
          CI/CD Pipelines, Docker, Linux
        </p>
      </div>

      {/* Subtle Animation */}
      <div className="mt-8">
        <button className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-lime-500 to-cyan-500 text-lg sm:text-xl font-bold text-black rounded-lg shadow-md hover:scale-105 transform transition-all duration-300">
          Explore My Portfolio
        </button>
      </div>
    </div>
  </div>
);

export default StickySection1;
