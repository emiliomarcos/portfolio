import { motion } from 'framer-motion';

const Projects = () => {
  const variants = {
    hidden: { opacity: 0, y: '100vh' },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      id="projects"
      initial='hidden'
      animate='visible'
      variants={variants}
      transition={{ type: 'spring', stiffness: 120 }}
    >
      <h2>Projects</h2>
      <div>
        <h3>DreamWake AI</h3>
        <p>Description of DreamWake AI</p>
      </div>
      <div>
        <h3>The Big Wave</h3>
        <p>Description of The Big Wave</p>
      </div>
      <div>
        <h3>Homie</h3>
        <p>Description of Homie</p>
      </div>
      <div>
        <h3>Islands R Us</h3>
        <p>Description of Islands R Us</p>
      </div>
    </motion.div>
  );
}

export default Projects;
