import { useEffect, useState } from 'react'
import DesignGalleryItem from '../components/DesignGalleryItem'
import RevealSection from '../components/RevealSection'
import Seo from '../components/Seo'

const designProjects = [
  {
    id: 'design-1',
    title: 'TUTE COVER PAGE DESIGN',
    description:
      'I did this design for a tuter whose name is desplayed in the design.This is a cover page design for a biology tute.',
    image: '/assets/coverpage.png',
  },
  {
    id: 'design-2',
    title: 'TUTE COVER PAGE DESIGN',
    description:
      'I did this design for a tuter whose name is desplayed in the design.This is a cover page design for a Biology tute.',
    image: '/assets/coverpage2.png',
  },
  {
    id: 'design-3',
    title: 'FLYER DESIGN',
    description:
      'This is a thank you flyer design for a company.',
    image: '/assets/thank-you-random-copy.png',
  },
  {
    id: 'design-4',
    title: 'FLYER DESIGN',
    description:
      'This is a winner annoucement flyer for a hackathon event.',
    image: '/assets/winner-annoucement.png',
  },
  {
    id: 'design-5',
    title: 'FLYER DESIGN',
    description:
      'This is a flyer design for a hackathon event.',
    image: '/assets/top-performers-announcement-copy.png',
  },
  {
    id: 'design-6',
    title: 'POSTER DESIGN',
    description:
      'This is a winner annoucement poster design for a creative event.',
    image: '/assets/1st-runnerup-board.png',
  },
  {
    id: 'design-7',
    title: 'POSTER DESIGN',
    description:
      'This is a winner annoucement poster design for a creative event.',
    image: '/assets/2nd-runnerup-board.png',
  },
  {
    id: 'design-8',
    title: 'POSTER DESIGN',
    description:
      'This is a winner annoucement poster design for a creative event.',
    image: '/assets/winner-board-copy.png',
  },
  {
    id: 'design-9',
    title: 'FLYER DESIGN',
    description:
      'This is a member announcement flyer for MS Club.',
    image: '/assets/2026-exom-committee-welcome-flyer2-copy.png',
  },
  {
    id: 'design-10',
    title: 'FLYER DESIGN',
    description:
      'This is a member announcement flyer for MS Club.',
    image: '/assets/2026-exom-committee-welcome-flyer-copy.png',
  },
  {
    id: 'design-11',
    title: 'FLYER DESIGN',
    description:
      'This is a member announcement flyer for MS Club.',
    image: '/assets/2026-exom-welcome-flyer-copy3.png',
  },
  {
    id: 'design-12',
    title: 'TUTION SOCIAL MEDIA POST',
    description:
      'This is a sample social media post design for a tution.',
    image: '/assets/sample1.png',
  },
  {
    id: 'design-13',
    title: 'TUTION SOCIAL MEDIA POST',
    description:
      'This is a sample social media post design for a tution.',
    image: '/assets/sample2.1.png',
  },
  {
    id: 'design-14',
    title: 'LOGO DESIGN',
    description:
      'This is a simple logo design I did for aphotographer.',
    image: '/assets/ashan-photography3.png',
  },
  {
    id: 'design-15',
    title: 'SOCIAL MEDIA POST DESIGN',
    description:
      'This is a social media post design for an event.',
    image: '/assets/awurudu4.png',
  },
  {
    id: 'design-16',
    title: 'TUTION SOCIAL MEDIA POST',
    description:
      'This is a sample social media post design for a tution.',
    image: '/assets/dancing.png',
  },
  {
    id: 'design-17',
    title: 'FLYER DESIGN',
    description:
      'This is a flyer design for a club.',
    image: '/assets/taekwondo-pply-post-copy.png',
  }
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
