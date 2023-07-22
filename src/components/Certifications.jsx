import { motion } from 'framer-motion';

const Certifications = () => {
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
      <p>CS50: Introduction to Computer Science</p>
      <p>Web Development Bootcamp</p>
    </motion.div>
  );
}

export default Certifications;
