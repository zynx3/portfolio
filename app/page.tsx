export default function Home() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Pair mode home">
          <span className="wordmark-mark">{"//"}</span> pair mode
        </a>
        <nav className="site-nav" aria-label="Main navigation">
          <a href="#people">People</a>
          <a href="#work">Selected work</a>
          <a className="nav-contact" href="mailto:hello@pairmode.dev">Let&apos;s talk <span>↗</span></a>
        </nav>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow"><span className="live-dot" /> Independent developers · New York / London</p>
            <h1>Two minds.<br /><em>One build.</em></h1>
            <p className="hero-intro">We design and ship digital products for people doing important, slightly impossible things.</p>
            <a className="text-link" href="#work">See what we&apos;ve made <span>↓</span></a>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="hero-grid" />
            <div className="hero-orbit orbit-one" />
            <div className="hero-orbit orbit-two" />
            <div className="hero-label label-top">EST. 2019</div>
            <div className="hero-label label-bottom">BUILD / TUNE / SHIP</div>
            <div className="hero-center">PM<span>+</span>DS</div>
          </div>
        </section>

        <section className="people-section" id="people">
          <div className="section-heading">
            <p className="eyebrow">01 / The people</p>
            <h2>A complementary<br /><em>point of view.</em></h2>
          </div>
          <div className="people-grid">
            <article className="person-card person-card-amber">
              <div className="portrait portrait-amber"><span>AM</span></div>
              <div className="person-meta"><span>01</span><span>Product · Frontend</span></div>
              <h3>Arshad<br />ali</h3>
              <p>Turns fuzzy ideas into clear, useful interfaces. Loves a good system and an even better interaction.</p>
              <a className="card-link" href="mailto:alex@pairmode.dev">alex@pairmode.dev <span>↗</span></a>
            </article>
            <article className="person-card person-card-coral">
              <div className="portrait portrait-coral"><span>JC</span></div>
              <div className="person-meta"><span>02</span><span>Systems · Backend</span></div>
              <h3>vivek<br />k pan</h3>
              <p>Builds the sturdy, quiet machinery underneath. Finds beauty in edge cases and clean deployments.</p>
              <a className="card-link" href="mailto:jordan@pairmode.dev">jordan@pairmode.dev <span>↗</span></a>
            </article>
          </div>
        </section>

        <section className="work-section" id="work">
          <div className="work-heading">
            <p className="eyebrow">02 / Selected work</p>
            <h2>Small teams,<br /><em>big swings.</em></h2>
            <p>From first sketch to first customer, we work in the messy middle where good products become real.</p>
          </div>
          <div className="project-list">
            <a className="project-row" href="#contact"><span className="project-number">01</span><span className="project-name">Lumen Health</span><span className="project-type">Care platform · 2024</span><span className="project-arrow">↗</span></a>
            <a className="project-row" href="#contact"><span className="project-number">02</span><span className="project-name">Morrow</span><span className="project-type">Climate data · 2023</span><span className="project-arrow">↗</span></a>
            <a className="project-row" href="#contact"><span className="project-number">03</span><span className="project-name">Common Ground</span><span className="project-type">Community tools · 2022</span><span className="project-arrow">↗</span></a>
          </div>
        </section>
      </main>

      <footer className="site-footer" id="contact">
        <div><p className="eyebrow">Have a good problem?</p><h2>Let&apos;s make<br /><em>something useful.</em></h2></div>
        <a className="footer-email" href="mailto:hello@pairmode.dev">hello@pairmode.dev <span>↗</span></a>
        <div className="footer-bottom"><span>© 2025 Pair Mode</span><span>Built together, apart</span><span>New York · London</span></div>
      </footer>
    </div>
  );
}
