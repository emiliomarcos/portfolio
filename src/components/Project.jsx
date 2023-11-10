// eslint-disable-next-line react/prop-types
export default function Project({ name, description, link, code, image, technologies }) {
  return (
    <>
      <a href={link} target='_blank' rel='noreferrer'><h3>{name}</h3></a>
      <p>{description}</p>
      <img className='project-image' src={image} />
      <p>{technologies}</p>
      <p>{code}</p>
    </>
  )
}
