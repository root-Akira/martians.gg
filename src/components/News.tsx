export default function News() {
  return (
    <section id="news" className="section container">
      <div className="section-head">
        <div>
          <span className="kicker">STAY IN THE LOOP</span>
          <h2>LATEST NEWS</h2>
        </div>
        <a href="#news">View All →</a>
      </div>
      <div className="news-grid">
        <article>
          <div className="news-art n1"></div>
          <small>TOURNAMENT</small>
          <h3>Martians Cup Registration Now Open!</h3>
          <p>15 Sept 2026</p>
        </article>
        <article>
          <div className="news-art n2"></div>
          <small>EVENT</small>
          <h3>Martians Comes to Centurion University</h3>
          <p>2 Sept 2026</p>
        </article>
        <article>
          <div className="news-art n3"></div>
          <small>COMMUNITY</small>
          <h3>Community Night Highlights</h3>
          <p>28 Aug 2026</p>
        </article>
      </div>
    </section>
  )
}
