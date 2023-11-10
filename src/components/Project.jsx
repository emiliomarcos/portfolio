import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

// eslint-disable-next-line react/prop-types
export default function Project({ name, description, link, code, image, technologies }) {
  return (
    <div className="project">
      <a href={link} target='_blank' rel='noreferrer'><h3>{name}</h3></a>
      <p>{description}<a className="github-icon" href={code} target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faGithub} size="xl" /></a></p>
      <img className='project-image' src={image} />
      <p>{technologies}</p>
    </div>
  )
}
