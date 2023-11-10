import Project from './Project';
import projectsData from '../data/Projects';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Projects() {
  const variants = {
    hidden: { opacity: 0, y: '100vh' },
    visible: { opacity: 1, y: 0 }
  };

  const projects = projectsData.map(project => <Project key={project.name} />)

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
        <a href='https://dreamwake.ai' target='_blank' rel='noreferrer'><h3>DreamWake AI 💭</h3></a>
        <p>Full Stack MERN app integrating AI with dreams.<a className="github-icon" href='https://github.com/emiliomarcos/dreamwake-ai' target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faGithub} size="xl" /></a></p>
      </div>
      <div>
        <a href='https://thebigwave.surf' target='_blank' rel='noreferrer'><h3>The Big Wave 🌊</h3></a>
        <p>Front End React app to explore surfing spots.<a className="github-icon" href='https://github.com/emiliomarcos/the-big-wave' target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faGithub} size="xl" /></a></p>
      </div>
      <div>
        <a href='https://yoving.com' target='_blank' rel='noreferrer'><h3>Yoving ꩜</h3></a>
        <p>Work in Progress MERN travel experiences AI assistant.<a className="github-icon" href='https://github.com/emiliomarcos/yoving' target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faGithub} size="xl" /></a></p>
      </div>
      <div>
        <a href='http://www.homie.help' target='_blank' rel='noreferrer'><h3>Homie 🏠</h3></a>
        <p>Team Full Stack Ruby on Rails home products helper.<a className="github-icon" href='https://github.com/Lou951/HOMIE' target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faGithub} size="xl" /></a></p>
      </div>
      <div>
        <a href='https://islands-r-us.herokuapp.com' target='_blank' rel='noreferrer'><h3>Islands R Us 🏝</h3></a>
        <p>Team Full Stack Ruby on Rails airbnb clone.<a className="github-icon" href='https://github.com/BirchAD/Islands-R-Us' target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faGithub} size="xl" /></a></p>
      </div>
    </motion.div>
  );
}
