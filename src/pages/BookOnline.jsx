import './BookOnline.css'

export default function BookOnline() {
  return (
    <main className="book-page">
      <div className="book-hero">
        <div className="book-hero-overlay" />
        <div className="book-hero-content">
          <p className="section-tag book-tag"></p>
          <h1 className="book-title"></h1>
          <p className="book-sub"></p>
        </div>
      </div>

      <section className="book-section">
        <div className="section-inner book-inner">
          <div className="book-services">
            <h2 className="book-heading"></h2>
            <div className="book-service-list">
              {[0, 1, 2, 3, 4].map(i => (
                <div className="book-service-item" key={i}>
                  <div className="bsi-icon" />
                  <div className="bsi-body">
                    <span className="bsi-name" />
                    <span className="bsi-price" />
                    <span className="bsi-desc" />
                  </div>
                  <div className="bsi-action" />
                </div>
              ))}
            </div>
          </div>

          <div className="book-form-panel">
            <h3 className="form-heading"></h3>
            <div className="book-form">
              {[0, 1, 2, 3].map(i => (
                <div className="form-field" key={i}>
                  <div className="form-label" />
                  <div className="form-input" />
                </div>
              ))}
              <div className="form-field">
                <div className="form-label" />
                <div className="form-textarea" />
              </div>
              <div className="form-submit" />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
