import React, { useState, useEffect, useRef } from 'react'

function useCountUp(target: number, duration = 2500) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const startTime = Date.now()
    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = progress < 0.5 ? 4 * progress * progress * progress : 1 - Math.pow(-2 * progress + 2, 3) / 2
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [target, duration])

  return count
}

function Stat({ value, label, suffix = '' }: { value: number; label: string; suffix?: string }) {
  const count = useCountUp(value)
  return (
    <div>
      <strong>{count}{suffix}</strong>
      <span>{label}</span>
    </div>
  )
}

export default function Hero() {
  const videoRef = React.useRef<HTMLVideoElement>(null)

  React.useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.play().catch(() => {})
      video.addEventListener('pause', () => {
        video.play().catch(() => {})
      })
    }
  }, [])

  return (
    <section id="home" className="hero">
      <video ref={videoRef} className="hero-video" autoPlay loop muted playsInline preload="auto" crossOrigin="anonymous" defaultMuted disablePictureInPicture disableRemotePlayback>
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
      <div className="hero-shade"></div>
      <div className="container hero-inner">
        <div className="hero-copy">
          <div className="eyebrow">PLAY <i>•</i> COMPETE <i>•</i> BELONG</div>
          <h1>MARTIANS<br/><em>GAMING GUILD</em></h1>
          <p>Building the next generation of competitive gaming.</p>
          <div className="actions">
            <a className="btn btn-red" href="#tournaments">Explore Tournaments <span>→</span></a>
            <a className="btn btn-dark" href="#contact"><span className="pulse-dot"></span> Join Our Community</a>
          </div>
          <div className="stats">
            <Stat value={300} suffix="+" label="Gamers" />
            <Stat value={20} suffix="+" label="Tournaments" />
            <Stat value={5} suffix="+" label="Colleges" />
            <Stat value={50} suffix="K+" label="Total Prize Pool" />
          </div>
        </div>
      </div>
    </section>
  )
}
