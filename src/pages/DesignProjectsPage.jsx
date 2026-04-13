import { useEffect, useState } from 'react'
import DesignGalleryItem from '../components/DesignGalleryItem'
import RevealSection from '../components/RevealSection'
import Seo from '../components/Seo'

const designProjects = [
  {
    id: 'design-1',
    title: 'Aether Brand Identity',
    description:
      'Complete brand identity including logo system, typography hierarchy, and visual language.',
    image: '/src/assets/Services.png',
  },
  {
    id: 'design-2',
    title: 'Nova UI Landing Concept',
    description:
      'A high-converting landing page concept with visual storytelling and bold product sections.',
    image: '/src/assets/Services.png',
  },
  {
    id: 'design-3',
    title: 'Pulse Mobile App Screens',
    description:
      'A set of polished app screens focused on intuitive UX patterns and visual consistency.',
    image: '/src/assets/Services.png',
  },
  {
    id: 'design-4',
    title: 'Vertex Social Campaign',
    description:
      'A social media campaign kit with post templates, story layouts, and ad variations.',
    image: '/src/assets/Services.png',
  },
  {
    id: 'design-5',
    title: 'Studio Editorial Posters',
    description:
      'A poster series using expressive typography and layered compositions for a creative event.',
    image: '/src/assets/Services.png',
  },
  {
    id: 'design-6',
    title: 'Orbit Product Campaign',
    description:
      'Digital campaign visuals for a product launch with cohesive hero imagery and motion-ready assets.',
    image: '/src/assets/Services.png',
  },
]

function DesignProjectsPage() {
  const [activeProject, setActiveProject] = useState(null)

  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [activeProject])

  return (
    <section className="section-spacing">
      <Seo
        title="Graphic Design Projects | Dhanuja Kandegama"
        description="Browse graphic design projects by Dhanuja Kandegama including branding, product visuals, and campaign concepts."
        keywords="Dhanuja Kandegama graphic design projects, branding portfolio, UI visual design"
      />
      <div className="container">
        <RevealSection>
          <p className="eyebrow">Graphic Design Projects</p>
          <h1 className="page-heading">Visual Stories With Impact</h1>
          <p className="section-copy">
            A curated gallery of brand, campaign, and product design concepts with strong visual
            language and clear communication.
          </p>
        </RevealSection>

        <div className="design-grid">
          {designProjects.map((project, index) => (
            <RevealSection key={project.id} delay={index * 70}>
              <DesignGalleryItem project={project} onOpen={setActiveProject} />
            </RevealSection>
          ))}
        </div>
      </div>

      {activeProject && (
        <div className="lightbox" onClick={() => setActiveProject(null)} role="presentation">
          <div className="lightbox-content" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="lightbox-close"
              onClick={() => setActiveProject(null)}
              aria-label="Close preview"
            >
              x
            </button>
            <img
              src={activeProject.image}
              alt={`${activeProject.title} enlarged graphic design preview`}
              loading="lazy"
            />
            <h3>{activeProject.title}</h3>
            <p>{activeProject.description}</p>
          </div>
        </div>
      )}
    </section>
  )
}

export default DesignProjectsPage
