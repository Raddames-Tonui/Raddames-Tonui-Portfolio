import React from "react";
import MySkills from "../components/MySkills";
import TechStackAnimation from "../components/TechStackAnimation";

const AboutMe = () => {
  return (
    <div className="relative   bg-gray-900 text-white">
      <MySkills />

      {/* Skills Section */}
      <div className="py-20  w-[80vw] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Skill Card 1 */}
          <div className="bg-gray-800 p-6  shadow-lg">
            <h3 className="text-2xl font-bold mb-4">01 WEB DEVELOPMENT</h3>
            <p>
              I have extensive full-stack web development experience that
              encompasses both frontend and backend technologies. I’m proficient
              in HTML5, CSS3, Tailwind, and frameworks like React.js, Vue.js,
              Angular, and Ember.js, as well as GraphQL and TypeScript for
              creating dynamic user interfaces.
            </p>
          </div>

          {/* Skill Card 2 */}
          <div className="bg-gray-800 p-6  shadow-lg">
            <h3 className="text-2xl font-bold mb-4">02 DEVOPS</h3>
            <p>
              I also possess solid database management and DevOps skills, with
              experience in both SQL and NoSQL databases like PostgreSQL, MySQL,
              and MongoDB. I’ve built and maintained CI/CD pipelines using tools
              like Git, Docker, and AWS, ensuring efficient workflows and
              deployments.
            </p>
          </div>

          {/* Skill Card 3 */}
          <div className="bg-gray-800 p-6  shadow-lg">
            <h3 className="text-2xl font-bold mb-4">03 LEADERSHIP</h3>
            <p>
              Beyond my technical expertise, I have strong leadership and
              mentorship experience. As an Engineering Manager, I’ve led teams
              and coordinated agile sprints, working closely with product and
              design teams to meet project goals.
            </p>
          </div>
        </div>
      </div>
      {/* <TechStackAnimation/> */}
    </div>
  );
};

export default AboutMe;
