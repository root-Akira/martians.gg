import React, { useState, useEffect, useRef } from 'react'

const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
)

const teamMembers = [
  { name: "DHANU HANSDA", role: "CO-FOUNDER", image: "", linkedin: "#", instagram: "#" },
  { name: "ASHISH TUDU", role: "CO-FOUNDER", image: "", linkedin: "#", instagram: "#" },
  { name: "ABHI MITRA", role: "DIRECTOR & STRATEGIC ADVISER", image: "", linkedin: "#", instagram: "#" },
  { name: "SUDHIR TIWARI", role: "FINANCE & OPERATIONS DIRECTOR", image: "", linkedin: "#", instagram: "#" },
  { name: "SUNNY SINGH", role: "CEO", image: "", linkedin: "#", instagram: "#" },
  { name: "CHETAN SINGH", role: "CMO & COMMUNITY LEAD", image: "", linkedin: "#", instagram: "#" }
]

function TeamCard({ member, index }: { member: typeof teamMembers[0]; index: number }) {
  const [visible, setVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) setVisible(true)
    }, { threshold: 0.2 })
    if (cardRef.current) observer.observe(cardRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={cardRef}
      className={`team-card ${visible ? 'team-card-visible' : ''}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="team-card-photo">
        {member.image ? (
          <img src={member.image} alt={member.name} />
        ) : (
          <div className="team-card-photo-placeholder">
            <span>{member.name.split(' ').map(n => n[0]).join('')}</span>
          </div>
        )}
        <div className="team-card-number">
          <span>{String(index + 1).padStart(2, '0')}</span>
          <small></small>
        </div>
      </div>
      <div className="team-card-info">
        <h3>{member.name}</h3>
        <span className="team-card-role">{member.role}</span>
        <div className="team-card-social">
          <a href={member.linkedin} aria-label="LinkedIn" className="social-btn"><LinkedInIcon /></a>
          <a href={member.instagram} aria-label="Instagram" className="social-btn"><InstagramIcon /></a>
        </div>
      </div>
    </div>
  )
}

export default function TeamSection() {
  return (
    <section id="teams" className="section team-section">
      <div className="team-bg-grid"></div>
      <div className="team-bg-glow"></div>

      <div className="container">
        <div className="team-header">
          <div className="team-header-left">
            <div className="team-label">
              <span className="label-line"></span>
              <span className="kicker">OUR PEOPLE</span>
            </div>
            <h2 className="team-heading">THE <em>TEAM</em></h2>
            <p className="team-desc">Meet the people behind Martians — the team building competitive gaming experiences, communities, partnerships, and events.</p>
          </div>
        </div>

        <div className="team-grid">
          {teamMembers.map((member, i) => (
            <TeamCard key={i} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
