import React from "react";

const Section1 = () => {
  return (
    <div className="relative min-h-screen bg-[#0f0f2d] text-white flex items-center justify-center">
      {/* Left Section: Text Content */}
      <div className="text-center max-w-lg">
        {/* Name Section */}
        <h1 className="text-5xl font-bold mb-2">
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Brian Marete</span>
        </h1>

        {/* Description */}
        <p className="text-lg mb-8">
          Hi! 👋 I'm a software developer from Nairobi, Kenya.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mb-6">
          <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded hover:opacity-90">
            Projects
          </button>
          <button className="px-6 py-3 border-2 border-white text-white font-semibold rounded hover:bg-white hover:text-black">
            Let's talk
          </button>
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
      <div className="absolute right-10 top-1/2 transform -translate-y-1/2 rounded-full overflow-hidden border-4 border-white w-40 h-40 md:w-48 md:h-48">
        <img
          src="your-profile-image.jpg"
          alt="Profile"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default Section1;