import { Link } from 'react-router-dom'
import RevealSection from '../components/RevealSection'
import FeaturedProjectCard from '../components/FeaturedProjectCard'
import Seo from '../components/Seo'
import myImg from '../assets/Myimg.jpg'

const skills = ['React', 'JavaScript', 'UI/UX Design', 'Figma', 'Photoshop', 'Framer Motion']

const featuredProjects = [
  {
    id: 'featured-1',
    category: 'Development',
    title: 'Insight Analytics Dashboard',
    description: 'Data-first platform for product and growth teams.',
    image: '/src/assets/Services.png',
    link: '/development-projects',
  },
  {
    id: 'featured-2',
    category: 'Graphic Design',
    title: 'Aether Brand Identity',
    description: 'A complete visual identity system from concept to rollout.',
    image: '/src/assets/Services.png',
    link: '/graphic-design-projects',
  },
  {
    id: 'featured-3',
    category: 'Graphic Design',
    title: 'Pulse Mobile App Screens',
    description: 'Modern mobile interfaces focused on accessibility and flow.',
    image: '/src/assets/Services.png',
    link: '/graphic-design-projects',
  },
]

function HomePage() {
  return (
    <>
      <Seo
        title="Dhanuja Kandegama | Creative Developer and Designer"
        description="Portfolio of Dhanuja Kandegama showcasing modern web development and graphic design projects."
        keywords="Dhanuja Kandegama, frontend developer, graphic designer, React portfolio, UI UX designer"
      />
      <section className="hero-section">
        <div className="container hero-grid">
          <RevealSection className="hero-copy">
            <p className="eyebrow">Hi, my name is</p>
            <h1>DHANUJA KANDEGAMA</h1>
            <p className="tagline">Creative Developer & Designer</p>
            <p className="hero-description">
              I design and build delightful digital products that combine elegant visuals with
              high-performance front-end development.
            </p>
            <div className="hero-actions">
              <Link to="/development-projects" className="btn-primary" aria-label="View projects">
                View Projects
              </Link>
              <a href="#contact" className="btn-secondary" aria-label="Contact Dhanuja Kandegama">
                Contact
              </a>
            </div>
          </RevealSection>

          <RevealSection className="hero-visual" delay={120}>
            <img
              src={myImg}
              alt="placeholder image of Dhanuja Kandegama"
              loading="eager"
            />
          </RevealSection>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container">
          <RevealSection>
            <h2>About Me</h2>
            <p className="section-copy">
              Passionate about shaping thoughtful user experiences, I blend visual storytelling and
              modern frontend architecture to deliver engaging and accessible products.
            </p>
          </RevealSection>
        </div>
      </section>

      <section className="section-spacing section-surface">
        <div className="container">
          <RevealSection>
            <h2>Core Skills</h2>
          </RevealSection>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <RevealSection key={skill} delay={index * 70}>
                <div className="skill-chip">{skill}</div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container">
          <RevealSection>
            <h2>Featured Projects</h2>
          </RevealSection>
          <div className="featured-grid">
            {featuredProjects.map((project, index) => (
              <RevealSection key={project.id} delay={index * 80}>
                <FeaturedProjectCard project={project} />
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section-spacing contact-section">
        <div className="container">
          <RevealSection>
            <h2>Let&apos;s Build Something Great</h2>
            <p className="section-copy">
              Open for collaborations, freelance projects, and product design opportunities.
            </p>
            <a href="mailto:hello@example.com" className="btn-primary">
              hello@example.com
            </a>
          </RevealSection>
        </div>
      </section>
    </>
  )
}

export default HomePage
