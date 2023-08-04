import { motion } from 'framer-motion';

const Projects = () => {
  const variants = {
    hidden: { opacity: 0, y: '100vh' },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      id='projects'
      initial='hidden'
      animate='visible'
      variants={variants}
      transition={{ type: 'spring', stiffness: 120 }}
    >
      <h2>Projects</h2>
      <div>
        <a href='https://dreamwake.ai'><h3>DreamWake AI</h3></a>
        <p>Full Stack MERN app integrating AI with dreams.</p>
      </div>
      <div>
        <a href='https://thebigwave.surf'><h3>The Big Wave</h3></a>
        <p>Front End React app to explore surfing spots.</p>
      </div>
      <div>
        <a href='www.homie.help'><h3>Homie</h3></a>
        <p>Team Full Stack Ruby on Rails home products helper.</p>
      </div>
      <div>
        <a href='https://islands-r-us.herokuapp.com/'><h3>Islands R Us</h3></a>
        <p>Team Full Stack Ruby on Rails airbnb clone.</p>
      </div>
    </motion.div>
  );
}

export default Projects;
