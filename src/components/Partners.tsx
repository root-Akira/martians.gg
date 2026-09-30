import React from 'react'

export default function Partners() {
  const brands = ['intel.', 'AMD', 'RAZER', 'Red Bull', 'logitech G', 'KRAFTON', 'COLLEGE ESPORTS']
  return (
    <section id="partners" className="section container partners">
      <span className="kicker">PARTNERS & ECOSYSTEM</span>
      <h2>BUILT WITH THE <em>COMMUNITY.</em></h2>
      <div className="partner-marquee">
        <div className="partner-track">
          {brands.map((b, i) => <b key={i}>{b}</b>)}
          {brands.map((b, i) => <b key={`dup-${i}`}>{b}</b>)}
        </div>
      </div>
    </section>
  )
}
