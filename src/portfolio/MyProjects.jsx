import React from "react";

const MyProjects = () => (
  <div className="h-screen sticky top-0 bg-gray-900 relative ">
    {/* Background Overlay */}
    <div className="absolute inset-0 bg-gray-80"></div>

    {/* Content */}
    <div className="relative z-10 flex flex-col items-center text-center h-full  text-white px-6 py-10 animate-fadeIn w-[80vw] mx-auto">
      {/* Section Title */}
      <h2 className="text-4xl font-bold mb-10 text-lime-500">
        <span className="text-gradient">MY</span> PROJECTS
        <div className="w-[50%] h-1 bg-gradient-to-r from-lime-500 to-lime-100 mt-3"></div>
      </h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full max-w-7xl">
        {[
          {
            title: "Marps Africa Portfolio",
            img: "marpsAfrica.png",
            url: "https://marps.co.ke",
            description:
              "A portfolio website showcasing Marps Africa's services.",
          },
          {
            title: "Job Mtaani",
            img: "jobmtaani.png",
            url: "https://job-mtaani.netlify.app",
            description: "A platform connecting job seekers and employers.",
          },
          {
            title: "Sheria 360",
            img: "sheria360.png",
            url: "https://sheria360.netlify.app",
            description:
              "A legal services platform for accessing law resources.",
          },
          {
            title: "School System",
            img: "schoolsystem.png",
            url: "https://schoolsystem.com",
            description:
              "A comprehensive system for managing school operations.",
          },
          {
            title: "Jua Movie",
            img: "JuaMovie.png",
            url: "https://jua-movie.netlify.app",
            description:
              "A movie streaming platform with a modern user interface.",
          },
          {
            title: "Ask Me About DevOps",
            img: "Devops.webp",
            url: "#contact", // Linking to the contact section
            description:
              "jenkins, docker, kubernetes, ansible, terraform, cicd",
          },
        ].map((project, index) => (
          <div
            key={index}
            className="relative group bg-gray-700 shadow-lg overflow-hidden hover:scale-105 transform transition-all duration-300"
          >
            {/* Project Thumbnail */}
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <h3 className="text-2xl font-bold text-gray-300 ">{project.title}</h3>
              <p className="text-gray-300">{project.description}</p>
            </div>
            {/* Clickable Area */}
            {project.url ? (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 w-full h-full"
                aria-label={`Go to ${project.title}`}
              ></a>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default MyProjects;
