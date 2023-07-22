import { motion } from 'framer-motion';

const Home = () => {
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
      <h1>My Name</h1>
      <p>Welcome to my portfolio. Scroll down to learn more about me and see my work!</p>
    </motion.div>
  );
}

export default Home;
