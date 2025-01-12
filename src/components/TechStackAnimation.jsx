import { motion } from 'framer-motion';

const TechStackAnimation = () => {
  const techStack = ['React', 'Vite', 'TailwindCSS', 'Flask', 'PostgreSQL', 'Docker', 'Jenkins', 'Terraform', 'Ansible'];

  return (
    <div style={{ overflow: 'hidden', width: '100vw' }}>
      <motion.div
        style={{
          display: 'flex',
          alignItems: 'center',
          whiteSpace: 'nowrap',
        }}
        animate={{
          x: ['100%', '-100%'], // Move from right to left
        }}
        transition={{
          x: {
            repeat: Infinity, // Repeats infinitely
            repeatType: 'loop', // Loops the animation
            duration: 20, // Adjust this for speed
            ease: 'linear', // Smooth continuous movement
          },
        }}
      >
        {/* Duplicate the array to create the seamless scroll effect */}
        {[...techStack, ...techStack].map((tech, index) => (
          <div
            key={index}
            style={{
              fontSize: '24px', // Adjust font size as needed
              fontWeight: 'bold',
              marginRight: 0, // No space between items
            }}
          >
            {tech}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default TechStackAnimation;
