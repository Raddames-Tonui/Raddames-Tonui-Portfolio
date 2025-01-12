import React from "react";

const Section2 = () => {
  return (
    <div className="relative min-h-screen bg-[#0f0f2d] text-white">
     

      {/* Skills Section */}
      <div className="py-20 px-6">
        <h2 className="text-4xl font-bold mb-4 text-center">
          <span className="text-white">MY </span>
          <span className="text-gradient bg-gradient-to-r from-pink-500 via-purple-500 to-blue-400 bg-clip-text text-transparent">SKILLS</span>
        </h2>

        <p className="text-center max-w-3xl mx-auto mb-16">
          I’m a passionate software engineer who loves building modern web applications with frameworks like React and Vue.js. I enjoy working with APIs, cloud tools like AWS and Docker, and setting up smooth CI/CD pipelines. With experience leading teams, mentoring others, and creating tech curricula, I’m all about crafting solutions that are not just innovative but also practical and scalable.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Skill Card 1 */}
          <div className="bg-[#1a1a3d] p-6 rounded shadow-lg">
            <h3 className="text-2xl font-bold mb-4">01 WEB DEVELOPMENT</h3>
            <p>
              I have extensive full-stack web development experience that encompasses both frontend and backend technologies. I’m proficient in HTML5, CSS3, Tailwind, and frameworks like React.js, Vue.js, Angular, and Ember.js, as well as GraphQL and TypeScript for creating dynamic user interfaces.
            </p>
          </div>

          {/* Skill Card 2 */}
          <div className="bg-[#1a1a3d] p-6 rounded shadow-lg">
            <h3 className="text-2xl font-bold mb-4">02 DEVOPS</h3>
            <p>
              I also possess solid database management and DevOps skills, with experience in both SQL and NoSQL databases like PostgreSQL, MySQL, and MongoDB. I’ve built and maintained CI/CD pipelines using tools like Git, Docker, and AWS, ensuring efficient workflows and deployments.
            </p>
          </div>

          {/* Skill Card 3 */}
          <div className="bg-[#1a1a3d] p-6 rounded shadow-lg">
            <h3 className="text-2xl font-bold mb-4">03 LEADERSHIP</h3>
            <p>
              Beyond my technical expertise, I have strong leadership and mentorship experience. As an Engineering Manager, I’ve led teams and coordinated agile sprints, working closely with product and design teams to meet project goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
