import React from "react";
import { motion } from "framer-motion";
import MySkills from "../components/MySkills";

const AboutMe = () => {
  // Animation variants for the cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="relative bg-gray-900 text-white min-h-screen ">
      <MySkills />

      {/* Skills Section */}
      <div className="py-20 w-[80vw] mx-auto xl:max-w-[70vw]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Skill Card 1 */}
          <motion.div
            className="bg-gray-800 p-6 shadow-lg"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-lime-500">01</h3>
            <h2 className="text-2xl font-bold mb-4 text-lime-500">
              <span className="text-gradient">WEB</span> DEVELOPMENT
              <div className="w-[50%] h-1 bg-gradient-to-r from-lime-500 to-lime-100 mb-4"></div>
            </h2>
            <p>
              With a strong foundation in full-stack web development, my skills
              include crafting responsive user interfaces using HTML5, CSS3,
              JavaScript, React, and TailwindCSS. On the backend, I specialize
              in building robust APIs with Python and Flask while managing
              databases using PostgreSQL.
            </p>
          </motion.div>

          {/* Skill Card 2 */}
          <motion.div
            className="bg-gray-800 p-6 shadow-lg"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.4 }}
          >
             <h3 className="text-2xl font-bold text-lime-500">02</h3>
            <h2 className="text-2xl font-bold mb-4 text-lime-500">
              <span className="text-gradient">DEVOPS PRACTICES</span> 
              <div className="w-[40%] h-1 bg-gradient-to-r from-lime-500 to-lime-100 mb-4"></div>
            </h2>
            <p>
              Expertise in containerization with Docker and setting up CI/CD
              pipelines using Jenkins allows me to streamline deployments. My
              focus also includes automating workflows to enhance efficiency and
              ensure scalability in software delivery.
            </p>
          </motion.div>

          {/* Skill Card 3 */}
          <motion.div
            className="bg-gray-800 p-6 shadow-lg"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-lime-500">03 </h3>
            <h2 className="text-2xl font-bold mb-4 text-lime-500">
              <span className="text-gradient">COLLABORATION</span> 
              <div className="w-[30%] h-1 bg-gradient-to-r from-lime-500 to-lime-100 mb-4"></div>
            </h2>
            <p>
              Collaboration is at the core of my work, where I excel in teaming
              up with cross-functional groups to solve problems, share
              knowledge, and deliver impactful results. Activities like
              brainstorming, code reviews, and pair programming help foster
              teamwork and build scalable solutions.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
