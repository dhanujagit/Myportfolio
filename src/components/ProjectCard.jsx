function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-image-wrapper">
        <img
          src={project.image}
          alt={`${project.title} development project screenshot`}
          className="project-image"
          loading="lazy"
        />
      </div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul className="tag-list">
          {project.techStack.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <div className="project-actions">
          <a href={project.codeUrl} target="_blank" rel="noreferrer">
            View Code
          </a>
          <a href={project.demoUrl} target="_blank" rel="noreferrer">
            Live Demo
          </a>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
