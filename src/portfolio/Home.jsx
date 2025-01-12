import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      {/* Container with 80% viewport width */}
      <div className="w-[80vw] flex items-center justify-between">
        {/* Left Section: Text Content */}
        <div className="text-center max-w-lg">
          {/* Name Section */}
          <h1 className="text-5xl font-bold mb-2">
            <span className="bg-gradient-to-r from-blue-400 via-green-500 to-teal-300 bg-clip-text text-transparent">
              Raddames Tonui
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg mb-8">
            Hi! 👋 I'm a software developer from Nairobi, Kenya.
          </p>

          {/* Buttons */}
          <div className="flex justify-center gap-4 mb-6">
            <a
              href="#projects"
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold rounded hover:opacity-90"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border-2 border-white text-white font-semibold rounded hover:bg-white hover:text-black"
            >
              Let's talk
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 text-3xl">
            <a
              href="#"
              className="hover:text-blue-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="#"
              className="hover:text-gray-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>

        {/* Right Section: Profile Image */}
        <div className="relative w-40 h-40 md:w-48 md:h-48">
          <img
            src="/myimage.jpg"
            alt="Profile"
            className="object-cover w-full h-full rounded-full border-4 border-white"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
