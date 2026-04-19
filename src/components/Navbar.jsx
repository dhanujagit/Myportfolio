import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'

const navItems = [
  // { path: '/', label: 'Home', end: true },
  { path: '/development-projects', label: 'Dev' },
  { path: '/graphic-design-projects', label: 'Designs' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.documentElement.classList.add('sidebar-open')
    } else {
      document.documentElement.classList.remove('sidebar-open')
    }
    return () => {
      document.documentElement.classList.remove('sidebar-open')
    }
  }, [isOpen])

  return (
    <header className="site-header">
      <div className="container">
        {/* Hamburger button for mobile */}
        <button className="hamburger" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          ☰
        </button>
        {/* Desktop nav */}
        <div className="desktop-nav-container">
          <NavLink to="/" className="brand-mark" aria-label="Dhanuja Kandegama home page">
            KANDEGAMA
          </NavLink>
          <nav className="desktop-nav" aria-label="Main navigation">
            <ul className="nav-links">
              {navItems.map(({ path, label, end }) => (
                <li key={path}>
                  <NavLink
                    to={path}
                    end={end}
                    className={({ isActive }) => (isActive ? 'active' : '')}
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        {/* Mobile sidebar */}
        {isOpen && (
          <div className="sidebar">
            <button className="close-btn" onClick={() => setIsOpen(false)}>×</button>
            <NavLink to="/" className="sidebar-brand" aria-label="Dhanuja Kandegama home page" onClick={() => setIsOpen(false)}>
              KANDEGAMA
            </NavLink>
            <nav aria-label="Main navigation">
              <ul className="sidebar-links">
                {navItems.map(({ path, label, end }) => (
                  <li key={path}>
                    <NavLink
                      to={path}
                      end={end}
                      className={({ isActive }) => (isActive ? 'active' : '')}
                      onClick={() => setIsOpen(false)}
                    >
                      {label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar
