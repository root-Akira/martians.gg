import React from 'react'

const TargetIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FF1E2D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
)

const EyeIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FF1E2D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
)

export default function Mission() {
  return (
    <section className="mission container">
      <div>
        <span className="icon"><TargetIcon /></span>
        <h2>OUR MISSION</h2>
        <p>To empower gamers, create competitive opportunities, and build a strong esports ecosystem across colleges and communities.</p>
      </div>
      <div>
        <span className="icon"><EyeIcon /></span>
        <h2>OUR VISION</h2>
        <p>To become a leading esports organization in India, known for world-class tournaments, player development, and community impact.</p>
      </div>
      <div className="mission-art"></div>
    </section>
  )
}
