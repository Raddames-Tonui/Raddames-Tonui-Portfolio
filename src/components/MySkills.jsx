import React from "react";

const MySkills = () => {
  return (
    <section className="bg-gray-800 text-white py-16 w-[80vw] mx-auto">
      <div className="container  flex flex-col lg:flex-row items-center">
        {/* Left Content */}
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-bold mb-4 text-lime-500">
            <span className="text-gradient">MY</span> SKILLS
            <div className="w-[18%] h-1 bg-gradient-to-r from-lime-500 to-lime-100 mb-6"></div>
          </h2>

          <p className="text-lg leading-relaxed">
            I’m a passionate software engineer who loves building modern web
            applications with frameworks like React and Vue.js. I enjoy working
            with APIs, cloud tools like AWS and Docker, and setting up smooth
            CI/CD pipelines. With experience leading teams, mentoring others,
            and creating tech curricula, I’m all about crafting solutions that
            are not just innovative but also practical and scalable.
          </p>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 mt-8 lg:mt-0 lg:pl-16 relative">
          {/* Box Behind the Image */}
          <div className="absolute border-2 border-lime-500 w-[70%] h-full bottom-6 left-6 "></div>
          {/* Image */}
          <img
            src="/keyboard.webp"
            alt="keyboard image"
            className="relative  shadow-lg z-10 w-[90%]"
          />
        </div>
      </div>
    </section>
  );
};

export default MySkills;
