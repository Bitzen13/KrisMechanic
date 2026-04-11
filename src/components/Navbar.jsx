import { useState, useEffect } from 'react'
import './Navbar.css'
import TruckLogo from '../assets/TruckLogo.png'
import ContactModal from './ContactModal'

function scrollTo(id) {
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth' })
  if (id === 'contact') {
    el.classList.remove('highlight')
    void el.offsetWidth // reflow to restart animation
    el.classList.add('highlight')
  }
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const close = () => setMenuOpen(false)

  return (
    <>
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        <div className="navbar-logo" onClick={() => { close(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
          <img src={TruckLogo} alt="KrisMechanic logo" className="navbar-logo-img" />
          Hoytsheightworks
        </div>

        <button
          className={`navbar-hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>

        <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <li><button onClick={() => { close(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>About</button></li>
          <li><button onClick={() => { close(); scrollTo('services') }}>Services</button></li>
          <li><button onClick={() => { close(); scrollTo('reviews') }}>Reviews</button></li>
          <li className="navbar-cta">
            <button onClick={() => { close(); setContactOpen(true) }}>Contact</button>
          </li>
        </ul>
      </div>
    </nav>
    {contactOpen && <ContactModal onClose={() => setContactOpen(false)} />}
    </>
  )
}
