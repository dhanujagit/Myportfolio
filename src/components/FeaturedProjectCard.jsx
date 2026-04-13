import { Link } from 'react-router-dom'

function FeaturedProjectCard({ project }) {
  return (
    <article className="featured-card">
      <img src={project.image} alt={`${project.title} featured project preview`} loading="lazy" />
      <div className="featured-card-content">
        <span>{project.category}</span>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <Link to={project.link}>Explore More</Link>
      </div>
    </article>
  )
}

export default FeaturedProjectCard
