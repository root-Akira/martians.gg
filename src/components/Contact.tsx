import React, { useState } from 'react'

export default function Contact() {
  const [msg, setMsg] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setMsg('Thanks — your message is ready to be connected to your backend/email service.')
    ;(e.target as HTMLFormElement).reset()
  }

  return (
    <section id="contact" className="contact section">
      <div className="container contact-inner">
        <div>
          <span className="kicker">LET'S WORK TOGETHER</span>
          <h2>READY TO<br/><em>LAUNCH?</em></h2>
          <p>Talk to Martians about tournaments, college partnerships, sponsorships or esports event production.</p>
        </div>
        <form onSubmit={handleSubmit}>
          <input required placeholder="Your name" />
          <input required type="email" placeholder="Email address" />
          <select>
            <option>What can we help with?</option>
            <option>Tournament</option>
            <option>College Partnership</option>
            <option>Sponsorship</option>
            <option>Event Management</option>
          </select>
          <textarea required placeholder="Tell us about your project" />
          <button className="btn btn-red" type="submit">Send Message <span>→</span></button>
          {msg && <div id="form-msg" className="form-ok">{msg}</div>}
        </form>
      </div>
    </section>
  )
}
