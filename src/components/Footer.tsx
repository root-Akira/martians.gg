export default function Footer() {
  return (
    <footer>
      <div className="container footer-inner">
        <a className="brand" href="#home">
          <img src="/MGGLOGO.png" alt="Martians Gaming Guild" className="brand-logo" />
        </a>
        <div>
          <b>Explore</b>
          <a href="#about">About</a>
          <a href="#tournaments">Tournaments</a>
          <a href="#teams">Teams</a>
          <a href="#events">Events</a>
        </div>
        <div>
          <b>Connect</b>
          <a href="#contact">Contact</a>
          <a href="#partners">Partners</a>
          <a href="#gallery">Gallery</a>
        </div>
      </div>
      <div className="copyright">© 2026 Martians Gaming Guild. All rights reserved.</div>
    </footer>
  )
}
