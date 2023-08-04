import { motion } from 'framer-motion';

export default function Home() {
  const variants = {
    hidden: { opacity: 0, y: '-100vh' },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      id="home"
      initial='hidden'
      animate='visible'
      variants={variants}
      transition={{ type: 'spring', stiffness: 120 }}
    >
      <h2>Emilio Marcos</h2>
      <p>I am a full stack developer with an inner drive to build and learn as much as I can. I mainly value the product, user experience, and efficiency.</p>
    </motion.div>
  );
}
