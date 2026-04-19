import { Link } from 'react-router-dom'

function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <div className="footer-grid">
          <section className="footer-block">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/development-projects">Development Projects</Link></li>
              <li><Link to="/graphic-design-projects">Design Projects</Link></li>
              <li><a href="/#contact">Contact</a></li>
            </ul>
          </section>

          <section className="footer-block">
            <h3 className="footer-title">Contact</h3>
            <ul className="footer-list">
              <li><a href="mailto:dhanujaprabashwarafiverr@gmail.com">dhanujaprabashwarafiverr@gmail.com</a></li>
              <li><a href="https://wa.me/94769727678" target="_blank" rel="noopener noreferrer">WhatsApp: +94769727678</a></li>
              <li><a href="tel:+94769727678">Call: +94769727678</a></li>
            </ul>
          </section>

          <section className="footer-block">
            <h3 className="footer-title">Availability</h3>
            <p className="footer-meta">Available for freelance projects and collaborations.</p>
            <p className="footer-meta">Sri Lanka (GMT +5:30)</p>
          </section>
        </div>

        <div className="footer-bottom">
          <p className="footer-credit">Designed and developed by Dhanuja Kandegama. © {currentYear}</p>

          <div className="footer-actions">
            <a
              href="mailto:dhanujaprabashwarafiverr@gmail.com?subject=CV%20Request"
              className="footer-cv-link"
              aria-label="Request CV"
            >
              Request CV
            </a>
            <button type="button" className="back-to-top-btn" onClick={scrollToTop} aria-label="Back to top">
              Back to top
            </button>
            <ul className="social-links">
              <li>
                <a
                  href="https://www.linkedin.com/in/dhanuja-kandegama-8a201238b?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1 5 2.12 4.98 3.5zM.5 8h4V24h-4V8zM8 8h3.82v2.19h.06c.53-1.01 1.84-2.19 3.79-2.19C19.73 8 21 10.47 21 14.01V24h-4v-8.45c0-2.02-.04-4.62-2.82-4.62-2.82 0-3.25 2.2-3.25 4.48V24H7V8h1z" fill="currentColor" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://github.com/dhanujagit" aria-label="GitHub" title="GitHub" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 .5C5.65.5.5 5.66.5 12.03c0 5.1 3.3 9.42 7.88 10.95.58.11.79-.25.79-.56 0-.28-.01-1.2-.02-2.17-3.2.7-3.88-1.38-3.88-1.38-.52-1.34-1.28-1.7-1.28-1.7-1.05-.73.08-.71.08-.71 1.15.08 1.76 1.2 1.76 1.2 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.72-1.54-2.56-.29-5.26-1.29-5.26-5.73 0-1.27.45-2.31 1.2-3.12-.12-.29-.52-1.47.11-3.07 0 0 .98-.31 3.2 1.19a11.08 11.08 0 0 1 5.83 0c2.22-1.5 3.2-1.19 3.2-1.19.63 1.6.23 2.78.11 3.07.75.81 1.2 1.85 1.2 3.12 0 4.45-2.7 5.44-5.28 5.72.41.36.78 1.08.78 2.18 0 1.58-.01 2.85-.01 3.24 0 .31.21.67.8.56A11.54 11.54 0 0 0 23.5 12C23.5 5.66 18.35.5 12 .5z" fill="currentColor" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/dhanuja.kandegama.3?sfnsn=wa&mibextid=RUbZ1f"
                  aria-label="Facebook"
                  title="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.87.24-1.46 1.5-1.46h1.61V4.96c-.28-.04-1.25-.12-2.37-.12-2.35 0-3.96 1.43-3.96 4.06V11H7.96v3h2.88v8h2.66z" fill="currentColor" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
