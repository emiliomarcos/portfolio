export default function Project({ name, description, link, code, image, technologies }) {
  return (
    <>
      <h2>{name}</h2>
      <p>{description}</p>
      <img className='project-image' src={image} />
      <p>{technologies}</p>
      <p>{link}</p>
      <p>{code}</p>
    </>
  )
}
