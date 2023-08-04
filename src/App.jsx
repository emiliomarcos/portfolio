// import { Link } from 'react-scroll';
import { Home, About, Projects, Certifications } from "./components";
import './App.css';

function App() {
  return (
    <div>
      {/* <nav>
        <Link to="home" smooth={true} duration={500}>Home</Link>
        <Link to="about" smooth={true} duration={500}>About</Link>
        <Link to="projects" smooth={true} duration={500}>Projects</Link>
        <Link to="certifications" smooth={true} duration={500}>Certifications</Link>
      </nav> */}
      <Home />
      <br></br>
      <About />
      <br></br>
      <Projects />
      <br></br>
      <Certifications />
    </div>
  );
}

export default App;
