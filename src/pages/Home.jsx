import './Home.css'

export default function Home() {
  return (
    <main className="home">

      {/* HERO */}
      <section className="hero" id="contact">
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="hero-availability">
            <span className="pulse-dot" />
            Available 24/7
          </div>
          <h1 className="hero-title">Your Car’s Broken. I Fix It.</h1>
          <p className="hero-subtitle">No Tow Truck, No Hassle.</p>

          <div className="hero-contact">
            <a href="tel:0000000000" className="hero-contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.1 1.17 2 2 0 012.08 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
              <span className="hero-contact-label">Call</span>
              <span className="hero-contact-value">(000) 000-0000</span>
            </a>
            <div className="hero-contact-divider" />
            <a href="sms:0000000000" className="hero-contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
              </svg>
              <span className="hero-contact-label">Text</span>
              <span className="hero-contact-value">(000) 000-0000</span>
            </a>
            <div className="hero-contact-divider" />
            <a href="mailto:kris@krismechanic.ca" className="hero-contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              <span className="hero-contact-label">Email</span>
              <span className="hero-contact-value">kris@krismechanic.ca</span>
            </a>
            <div className="hero-contact-divider" />
            {/* <a href="/book-online" className="hero-contact-item hero-contact-book">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              <span className="hero-contact-label">Book Online</span>
            </a> */}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services" id="services">
        <div className="section-inner">
          <div className="services-intro">
            <h2 className="section-title">Hey Squamish!</h2>
            <p className="services-intro-sub">I’m Kris, your go-to mobile mechanic—basically a car doctor who makes house calls (or parking lot calls, or random dirt road calls… you get the idea).</p>
          </div>
          <p className="services-list-heading">If your ride is acting up, I can help with:</p>
          <ul className="services-list">
            <li>Weird noises and mystery rattles</li>
            <li>Brakes that sound like they’re screaming for help</li>
            <li>Dead batteries (we’ve all been there)</li>
            <li>Oil changes & general TLC</li>
            <li>Pre-purchase inspections so you don’t get scammed on that “mint condition” ‘98 Civic</li>
          </ul>
        </div>
      </section>

      {/* WHY + REVIEWS */}
      <section className="testimonials" id="reviews">
        <div className="section-inner">
          <div className="why-section">
            <h2 className="why-title">Why call me?</h2>
            <p className="why-text">Because I come to <strong>YOU</strong>. No waiting rooms. No towing. No "we'll get to it next week" shop delays. Just honest, skilled work done right where you are.</p>
            <p className="why-text">Serving Squamish & surrounding areas — fast, reliable, and ready to get you back on the road.</p>
          </div>
          <div className="section-divider" />
          <div className="testimonials-grid">
            {[0, 1, 2].map(i => (
              <div className="testimonial-card" key={i}>
                <div className="stars">★★★★★</div>
                <p className="testimonial-text" />
                <p className="testimonial-text" />
                <p className="testimonial-text short" />
                <div className="testimonial-author">
                  <div className="author-avatar" />
                  <div>
                    <span className="author-name" />
                    <span className="author-location" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CONTACT */}
      <section className="bottom-contact">
        <div className="section-inner bottom-contact-inner">
          <div className="bottom-contact-text">
            <h2 className="bottom-contact-title">Stuck on the side of the road?</h2>
          </div>
          <div className="bottom-contact-actions">
            <a href="tel:0000000000" className="btn-dark">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.1 1.17 2 2 0 012.08 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
              (000) 000-0000
            </a>
            <a href="sms:0000000000" className="btn-outline-dark">Text Me!</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="footer-logo">KrisMechanic</div>
            <p className="footer-tagline" />
            <p className="footer-tagline short" />
          </div>
          <div className="footer-col">
            <h4>Navigate</h4>
            <ul>
              {['About', 'Services', 'Reviews', 'Contact'].map(item => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`}>{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li>(000) 000-0000</li>
              <li>kris@krismechanic.ca</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} KrisMechanic. All rights reserved.</span>
        </div>
      </footer>

    </main>
  )
}
