import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import HomePage from './pages/HomePage'
import DevelopmentProjectsPage from './pages/DevelopmentProjectsPage'
import DesignProjectsPage from './pages/DesignProjectsPage'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app-shell">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/development-projects" element={<DevelopmentProjectsPage />} />
            <Route path="/graphic-design-projects" element={<DesignProjectsPage />} />
            <Route path="/design-projects" element={<Navigate to="/graphic-design-projects" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
