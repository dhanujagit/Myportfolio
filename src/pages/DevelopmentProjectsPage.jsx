import ProjectCard from '../components/ProjectCard'
import RevealSection from '../components/RevealSection'
import Seo from '../components/Seo'
import { developmentProjects } from '../data/projects'

function DevelopmentProjectsPage() {
  return (
    <section className="section-spacing">
      <Seo
        title="Development Projects | Dhanuja Kandegama"
        description="Explore web development projects by Dhanuja Kandegama built with React and modern frontend technologies."
        keywords="Dhanuja Kandegama development projects, React projects, frontend portfolio"
      />
      <div className="container">
        <RevealSection>
          <p className="eyebrow">Development Projects</p>
          <h1 className="page-heading">Code, Logic, and Product Thinking</h1>
          <p className="section-copy">
            Selected frontend and full-stack projects that focus on scalability, usability, and
            modern web standards.
          </p>
        </RevealSection>

        <div className="project-grid">
          {developmentProjects.map((project, index) => (
            <RevealSection key={project.id} delay={index * 70}>
              <ProjectCard project={project} />
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DevelopmentProjectsPage
