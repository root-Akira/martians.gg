import React from 'react'

const exploreLinks = [
  { label: 'About', href: '#about' },
  { label: 'Tournaments', href: '#tournaments' },
  { label: 'Teams', href: '#teams' },
  { label: 'Events', href: '#events' },
  { label: 'Gallery', href: '#gallery' }
]

const supportLinks = [
  { label: 'Contact', href: '#contact' },
  { label: 'Partners', href: '#partners' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Privacy Policy', href: '#privacy' },
  { label: 'Terms of Service', href: '#terms' }
]

const socials = [
  {
    label: 'Discord',
    path: 'M20.32 4.57A19.79 19.79 0 0 0 15.43 3c-.24.42-.5.99-.69 1.44a18.3 18.3 0 0 0-5.48 0C9.07 3.99 8.8 3.42 8.56 3a19.74 19.74 0 0 0-4.88 1.57C.55 9.2-.28 13.7.14 18.16A19.9 19.9 0 0 0 6.15 21c.49-.66.92-1.37 1.3-2.1-.71-.27-1.4-.6-2.03-.99.17-.12.34-.25.5-.38a14.2 14.2 0 0 0 12.06 0c.16.14.33.26.5.38-.63.39-1.32.72-2.03.99.37.73.81 1.44 1.3 2.1a19.86 19.86 0 0 0 6.01-2.84c.5-5.18-.84-9.68-3.54-13.59ZM8.02 15.56c-1.18 0-2.16-1.08-2.16-2.42 0-1.33.95-2.42 2.16-2.42 1.22 0 2.19 1.1 2.17 2.42 0 1.34-.95 2.42-2.17 2.42Zm7.96 0c-1.18 0-2.16-1.08-2.16-2.42 0-1.33.95-2.42 2.16-2.42 1.22 0 2.19 1.1 2.17 2.42 0 1.34-.95 2.42-2.17 2.42Z'
  },
  {
    label: 'Instagram',
    path: 'M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16Zm0 3.24a6.6 6.6 0 1 0 0 13.2 6.6 6.6 0 0 0 0-13.2Zm0 10.89a4.29 4.29 0 1 1 0-8.58 4.29 4.29 0 0 1 0 8.58Zm8.4-11.15a1.54 1.54 0 1 1-3.08 0 1.54 1.54 0 0 1 3.08 0Z'
  },
  {
    label: 'YouTube',
    path: 'M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19C0 8.08 0 12 0 12s0 3.92.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14C24 15.92 24 12 24 12s0-3.92-.5-5.81ZM9.55 15.57V8.43L15.82 12l-6.27 3.57Z'
  },
  {
    label: 'X',
    path: 'M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.65l-5.21-6.82-5.96 6.82H1.68l7.73-8.84L1.25 2.25h6.82l4.71 6.23 5.46-6.23Zm-1.16 17.52h1.83L7.01 4.13H5.05l12.03 15.64Z'
  },
  {
    label: 'LinkedIn',
    path: 'M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13Zm1.78 13.02H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z'
  }
]

const contacts: { type: keyof typeof contactIcons; label: string }[] = [
  { type: 'location', label: 'India' },
  { type: 'email', label: 'info@martians.gg' },
  { type: 'phone', label: '+91 XXXXX XXXXX' }
]

function SocialLinks() {
  return (
    <div className="footer-social">
      {socials.map(s => (
        <a key={s.label} href="#" aria-label={s.label} className="footer-social-btn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d={s.path} />
          </svg>
        </a>
      ))}
    </div>
  )
}

function FooterBrand() {
  return (
    <div className="footer-brand">
      <a href="#home" aria-label="Martians Gaming Guild home">
        <img src="/MGGLOGO-white.png" alt="Martians Gaming Guild" className="footer-logo" />
      </a>
      <p className="footer-brand-text">
        Building competitive gaming experiences that connect players, colleges, creators and brands.
      </p>
      <SocialLinks />
    </div>
  )
}

function FooterNavigation() {
  return (
    <>
      <nav className="footer-col" aria-label="Explore">
        <h4>EXPLORE</h4>
        <span className="footer-rule" />
        <ul>
          {exploreLinks.map(l => (
            <li key={l.label}>
              <a href={l.href}>{l.label}<span className="footer-arrow">&rsaquo;</span></a>
            </li>
          ))}
        </ul>
      </nav>
      <nav className="footer-col" aria-label="Support">
        <h4>SUPPORT</h4>
        <span className="footer-rule" />
        <ul>
          {supportLinks.map(l => (
            <li key={l.label}>
              <a href={l.href}>{l.label}<span className="footer-arrow">&rsaquo;</span></a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

const contactIcons = {
  location: 'M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z',
  email: 'M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z',
  phone: 'M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2Z'
}

function FooterContact() {
  return (
    <div className="footer-col">
      <h4>GET IN TOUCH</h4>
      <span className="footer-rule" />
      <ul className="footer-contact-list">
        {contacts.map(c => (
          <li key={c.type}>
            <a href="#" className="footer-contact-row">
              <span className="footer-contact-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d={contactIcons[c.type]} />
                </svg>
              </span>
              {c.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-glow footer-glow-l" aria-hidden="true" />
      <div className="footer-glow footer-glow-r" aria-hidden="true" />

      <div className="footer-main">
        <div className="container footer-grid">
          <FooterBrand />
          <FooterNavigation />
          <FooterContact />
          </div>
      </div>

      <div className="container footer-bottom">
        <p className="footer-copy">&copy; 2026 Martians Gaming Guild. All rights reserved.</p>
        <p className="footer-slogan">
          <span>GAMERS</span><i>|</i><span>COLLEGES</span><i>|</i><span>CREATORS</span><i>|</i><span>BRANDS</span>
        </p>
      </div>

      <div className="footer-hud" aria-hidden="true">
        <span className="hud-notch hud-l" />
        <span className="hud-notch hud-c" />
        <span className="hud-notch hud-r" />
      </div>
    </footer>
  )
}
