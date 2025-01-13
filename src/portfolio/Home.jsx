import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-800 text-white flex items-center justify-center">
      {/* Container with 80% viewport width */}
      <div className="w-[80vw] flex flex-col-reverse md:flex-row items-center justify-between ">
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

       
        </div>

        {/* Right Section: Profile Image with Circles */}
        <div className="relative flex-shrink-0 m-5">
          {/* Decorative Circles */}
          <div className=" relative flex justify-end">
            {/* Box Behind the Image */}
            <div className="absolute border-2 border-lime-500 w-[100%]  h-full top-8 right-8  rounded-full "></div>
            {/* Image */}
            <img
              src="/MyImage.jpg"
              alt="Raddames Tonui Image"
              className="relative rounded-full  shadow-lg z-10 w-[100%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
