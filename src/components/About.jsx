import { motion } from 'framer-motion';

export default function About() {
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
      <h2>Favorite Technologies</h2>
      <p>Web Apps: JavaScript with React, Node, Express, and MongoDB</p>
      <p>Other: Python</p>
    </motion.div>
  );
}
