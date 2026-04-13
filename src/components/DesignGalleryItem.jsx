function DesignGalleryItem({ project, onOpen }) {
  return (
    <button
      className="design-item"
      onClick={() => onOpen(project)}
      type="button"
      aria-label={`Open ${project.title} in full view`}
    >
      <img src={project.image} alt={`${project.title} graphic design preview`} loading="lazy" />
      <div className="design-overlay">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </button>
  )
}

export default DesignGalleryItem
