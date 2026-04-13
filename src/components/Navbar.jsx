import { NavLink } from 'react-router-dom'
import homeLogo from '../assets/homelogo.png'

const navItems = [
  // { path: '/', label: 'Home', end: true },
  { path: '/development-projects', label: 'Development' },
  { path: '/graphic-design-projects', label: 'Graphic Design' },
]

function Navbar() {
  return (
    <header className="site-header">
      <div className="container nav-container">
        <NavLink to="/" className="brand-mark" aria-label="Dhanuja Kandegama home page">
          <img src={homeLogo} height={50} width={50} alt="Dhanuja Kandegama home logo" />
        </NavLink>
        <nav aria-label="Main navigation">
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
    </header>
  )
}

export default Navbar
