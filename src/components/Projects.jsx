import Project from './Project';
import projectsData from '../data/Projects';
import { motion } from 'framer-motion';

export default function Projects() {
  const variants = {
    hidden: { opacity: 0, y: '100vh' },
    visible: { opacity: 1, y: 0 }
  };

  const projects = projectsData.map(project => <Project key={project.name} name={project.name} description={project.description} image={project.image} technologies={project.technologies} link={project.link} code={project.code} />)

  return (
    <motion.div
      id='projects'
      initial='hidden'
      animate='visible'
      variants={variants}
      transition={{ type: 'spring', stiffness: 120 }}
    >
      <h2>Projects</h2>
      {projects}
    </motion.div>
  );
}
