import React from 'react'

export default function Tournament() {
  return (
    <section id="tournaments" className="section container">
      <div className="section-head">
        <div>
          <span className="kicker">COMPETE</span>
          <h2>UPCOMING TOURNAMENT</h2>
        </div>
        <a href="#events">View All →</a>
      </div>
      <article className="tournament">
        <div className="tourney-content">
          <div className="mini-label">STAY TUNED</div>
          <h3><span style={{color:'#FF1E2D'}}>SOMETHING CRAZY IS</span> COMING...</h3>
          <p className="tourney-msg">But don't worry — we're cooking something crazy. Stay tuned for the next big announcement.</p>
        </div>
      </article>
    </section>
  )
}
