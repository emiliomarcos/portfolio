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
        <h3>Project 1</h3>
        <p>Description of Project 1</p>
      </div>
      <div>
        <h3>Project 2</h3>
        <p>Description of Project 2</p>
      </div>
    </motion.div>
  );
}

export default Projects;
