import React, { useState, useEffect } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('home')

  const links = ['home','tournaments','about','teams','events','partners','news','gallery','contact']

  useEffect(() => {
    const sections = document.querySelectorAll('main section[id]')
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          setActiveLink(e.target.id)
        }
      })
    }, { rootMargin: '-35% 0px -55%' })
    sections.forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <header className="nav-wrap">
      <nav className="nav container">
        <a className="brand" href="#home" aria-label="Martians home">
          <img src="/MGGLOGO.png" alt="Martians Gaming Guild" className="brand-logo" />
        </a>
        <button className="menu" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
        <div className={`links ${menuOpen ? 'links-open' : ''}`}>
          {links.map(l => (
            <a key={l} className={`nav-link ${activeLink === l ? 'active' : ''}`} href={`#${l}`} onClick={() => setMenuOpen(false)}>
              {l.charAt(0).toUpperCase() + l.slice(1)}
            </a>
          ))}
        </div>
        <a className="btn btn-red nav-cta" href="#tournaments">Register Now <span>→</span></a>
      </nav>
    </header>
  )
}
