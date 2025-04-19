import React from "react";

const MyProjects = () => {
  const handleClick = (e, url) => {
    if (url.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(url);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const projects = [
    {
      title: "Marps Africa Portfolio",
      img: "marpsAfrica.png",
      url: "https://marps.co.ke",
      description: "A portfolio website showcasing Marps Africa's services.",
    },
    {
      title: "Atibule Institute",
      img: "atibule.png",
      url: "https://atibule.com",
      description:
        "Empowering learners with skills in business, IT, and leadership.",
    },
    {
      title: "Sheria 360",
      img: "sheria360.png",
      url: "https://sheria360.netlify.app",
      description:
        "Award-winning legal services platform recognized at the PLP Hackathon for accessing law resources",
    },
    {
      title: "School System",
      img: "schoolsystem.png",
      url: "https://sms.marps.co.ke/",
      description: "A comprehensive system for managing school operations.",
    },
    {
      title: "JazaForm",
      img: "jazaform.png",
      url: "https://simple-survey-client-alpha.vercel.app/",
      description:
        "Simple, dynamic platform for creating and analyzing responses with ease.",
    },
    {
      title: "Ask Me About DevOps",
      img: "Devops.webp",
      url: "#contact",
      description: "jenkins, docker, kubernetes, ansible, terraform, cicd",
    },
  ];

  return (
    <div className="h-screen  top-0 bg-gray-800 relative">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gray-800"></div>

      {/* Content */}
      <div className="overflow-y-scroll md:overflow-hidden relative z-10 flex flex-col items-center text-center h-full text-white px-6 py-16 animate-fadeIn   md:w-[80vw] mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl font-bold mb-10 text-lime-500">
          <span className="text-gradient">MY</span> PROJECTS
          <div className="w-[50%] h-1 bg-gradient-to-r from-lime-500 to-lime-100 mt-3"></div>
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5  xl:w-[70vw] w-full max-w-7xl">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group bg-gray-800 shadow-lg overflow-hidden hover:scale-105 transform transition-all duration-300"
            >
              {/* Project Thumbnail */}
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-48  object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 className="text-2xl font-bold text-gray-300">
                  {project.title}
                </h3>
                <p className="text-gray-300">{project.description}</p>
              </div>
              {/* Clickable Area */}
              {project.url ? (
                <a
                  href={project.url}
                  onClick={(e) => handleClick(e, project.url)}
                  target={project.url.startsWith("#") ? "_self" : "_blank"}
                  rel={project.url.startsWith("#") ? "" : "noopener noreferrer"}
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
};

export default MyProjects;
