import { motion } from 'framer-motion';

const About = () => {
  const variants = {
    hidden: { opacity: 0, x: '-100vw' },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <motion.div
      id="about"
      initial='hidden'
      animate='visible'
      variants={variants}
      transition={{ type: 'spring', stiffness: 120 }}
    >
      <h2>About Me</h2>
      <p>I am a web developer with a passion for creating engaging and efficient applications. I have completed CS50 and a web development bootcamp. Technologies I love include React, Node.js, and Python.</p>
    </motion.div>
  );
}

export default About;
