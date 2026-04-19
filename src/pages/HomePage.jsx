import { Link } from 'react-router-dom'
import { useState } from 'react'
import RevealSection from '../components/RevealSection'
import FeaturedProjectCard from '../components/FeaturedProjectCard'
import Seo from '../components/Seo'
import { getRandomFeaturedProjects } from '../data/projects'
import myImg from '../assets/Myimg.jpg'

const skills = ['React', 'JavaScript', 'UI/UX Design', 'Figma', 'Photoshop', 'CAPCUT']

function HomePage() {
  const [featuredProjects] = useState(() => getRandomFeaturedProjects(3))

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
             Creative graphic designer and passionate developer blending strong visuals with smart functionality. I create eye catching branding , posters , and digital designs while also building smooth , modern websites that bring ideas to life.
            </p>
            <div className="hero-actions">
              <div className="hero-main-actions">
                <Link
                  to="/graphic-design-projects"
                  className="btn-primary hero-stream-btn"
                  aria-label="View graphic design projects"
                >
                  Designs
                </Link>
                <Link
                  to="/development-projects"
                  className="btn-primary hero-stream-btn"
                  aria-label="View development projects"
                >
                  Dev
                </Link>
              </div>
              <a href="#contact" className="hero-contact-btn" aria-label="Contact Dhanuja Kandegama">
                <svg
                  className="hero-contact-icon"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.68 14.91 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.09 8.32 8.82 8.59L6.62 10.79Z"
                    fill="currentColor"
                  />
                </svg>
                <span className="hero-contact-text">Contact</span>
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
              I’m a creative professional specializing in graphic design and web development, focused 
              on building visually compelling and highly functional digital experiences. With a strong eye 
              for design and a passion for clean development, I create branding, visual content, and modern 
              websites that help ideas stand out and perform effectively. My goal is to combine creativity and 
              technology to deliver impactful results with a professional standard.

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
            <a href="https://wa.me/+94769727678" className="btn-primary whtsap_btn" target="_blank" rel="noopener noreferrer">
              Contact me on WhatsApp
            </a>
          </RevealSection>
        </div>
      </section>
    </>
  )
}

export default HomePage
