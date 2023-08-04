import { motion } from 'framer-motion';

export default function Certifications() {
  const variants = {
    hidden: { opacity: 0, x: '100vw' },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <motion.div
      id="certifications"
      initial='hidden'
      animate='visible'
      variants={variants}
      transition={{ type: 'spring', stiffness: 120 }}
    >
      <h2>Certifications</h2>
      <p>Le Wagon Web Development Bootcamp</p>
      <p>HarvardX CS50: Introduction to Computer Science</p>
    </motion.div>
  );
}
