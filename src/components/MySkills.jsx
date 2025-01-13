import React from "react";

const MySkills = () => {
  return (
    <section className="bg-gray-900 text-white pt-20 w-[80vw] mx-auto">
      <div className="container flex flex-col lg:flex-row items-center">
        {/* Left Content */}
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-bold mb-4 text-lime-500">
            <span className="text-gradient">MY</span> SKILLS
            <div className="w-[18%] h-1 bg-gradient-to-r from-lime-500 to-lime-100 mb-6"></div>
          </h2>

          <p className="text-lg leading-relaxed text-justify">
            I’m a full-stack engineer with a strong focus on backend development, 
            specializing in Python, Flask, and PostgreSQL. I enjoy creating robust, scalable APIs 
            and love diving into database optimization. Alongside backend development, I have experience 
            with DevOps practices, including containerization, CI/CD pipelines, and workflow automation. 
            My goal is to build seamless systems that drive efficiency, scale effortlessly, and deliver exceptional value.
          </p>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 mt-10 lg:mt-0 lg:pl-16 relative flex justify-start  md:justify-end">
          {/* Box Behind the Image */}
          <div className="absolute border-2 border-lime-500 w-[80%] h-full bottom-5 right-5"></div>
          {/* Image */}
          <img
            src="/keyboard.webp"
            alt="keyboard image"
            className="relative shadow-lg z-10 w-[90%]"
          />
        </div>
      </div>
    </section>
  );
};

export default MySkills;
