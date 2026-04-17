import ProjectCard from '../components/ProjectCard'
import RevealSection from '../components/RevealSection'
import Seo from '../components/Seo'

const developmentProjects = [
  {
    id: 'dev-1',
    title: 'Insight Analytics Dashboard',
    description:
      'A scalable analytics dashboard with role-based views, KPI widgets, and exportable business reports.',
    techStack: ['React', 'TypeScript', 'Chart.js', 'Firebase'],
    image: '/assets/services.png',
    codeUrl: '#',
    demoUrl: '#',
  },
  {
    id: 'dev-2',
    title: 'TeamFlow Task Platform',
    description:
      'A collaborative task management app with drag-and-drop boards, custom workflows, and live notifications.',
    techStack: ['React', 'JavaScript', 'Node.js', 'Socket.IO'],
    image: '/assets/services.png',
    codeUrl: '#',
    demoUrl: '#',
  },
  {
    id: 'dev-3',
    title: 'CommerceX Storefront',
    description:
      'A modern e-commerce experience with product filtering, secure checkout simulation, and dynamic recommendations.',
    techStack: ['React', 'Redux', 'Stripe API', 'Sass'],
    image: '/assets/services.png',
    codeUrl: '#',
    demoUrl: '#',
  },
  {
    id: 'dev-4',
    title: 'MentorHub Learning Portal',
    description:
      'An online learning interface featuring lesson tracking, progress analytics, and certificate generation.',
    techStack: ['React', 'Vite', 'MongoDB', 'Express'],
    image: '/assets/services.png',
    codeUrl: '#',
    demoUrl: '#',
  },
]

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
