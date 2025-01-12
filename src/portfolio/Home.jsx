import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-800 text-white flex items-center justify-center">
      {/* Container with 80% viewport width */}
      <div className="w-[80vw] flex flex-col-reverse md:flex-row items-center justify-center gap-10">
        {/* Left Section: Text Content */}
        <div className="text-center md:text-left max-w-lg">
          {/* Name Section */}
          <h1 className="text-5xl font-bold mb-2">
            <span className="bg-gradient-to-r from-lime-600 lime-900 to-lime-200 bg-clip-text text-transparent">
              Raddames Tonui
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg mb-6">
            Hi! 👋 I'm a software developer from Nairobi, Kenya.
          </p>

          {/* Buttons */}
          <div className="flex justify-center md:justify-start gap-4 mb-6">
            <a
              href="#projects"
              className="px-6 py-3 bg-gradient-to-r from-lime-500  text-white font-semibold rounded hover:opacity-90"
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
          <div className="flex justify-center md:justify-start gap-6 text-3xl">
            <a
              href="#"
              className="hover:text-lime-400"
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

        {/* Right Section: Profile Image with Circles */}
        <div className="relative flex-shrink-0">
          {/* Decorative Circles */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-lime-400 via-purple-500 to-lime-100 opacity-30 w-72 h-72 sm:w-96 sm:h-96 -z-10 blur-3xl "></div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-lime-100 via-purple-500 to-lime-400 opacity-20 w-64 h-64 sm:w-80 sm:h-80 -z-10 blur-2xl "></div>

          {/* Profile Image */}
          <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64">
            <img
              src="/myimage.jpg"
              alt="Profile"
              className="object-cover w-full h-full rounded-full border-4 border-white"
            />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Home;
