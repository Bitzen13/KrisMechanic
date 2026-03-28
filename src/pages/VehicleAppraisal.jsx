import './VehicleAppraisal.css'

export default function VehicleAppraisal() {
  return (
    <main className="appraisal-page">
      <div className="appraisal-hero">
        <div className="appraisal-hero-overlay" />
        <div className="appraisal-hero-content">
          <p className="section-tag appraisal-tag"></p>
          <h1 className="appraisal-title"></h1>
          <p className="appraisal-sub"></p>
        </div>
      </div>

      <section className="appraisal-intro">
        <div className="section-inner appraisal-intro-inner">
          <div className="appraisal-text">
            <h2 className="section-title"></h2>
            <p className="appraisal-para" />
            <p className="appraisal-para short" />
            <p className="appraisal-para" />
          </div>
          <div className="appraisal-img-box">
            <div className="appraisal-img-placeholder" />
          </div>
        </div>
      </section>

      <section className="appraisal-features">
        <div className="section-inner">
          <div className="section-header">
            <p className="section-tag"></p>
            <h2 className="section-title"></h2>
            <p className="section-sub"></p>
          </div>
          <div className="features-grid">
            {[0, 1, 2, 3, 4, 5].map(i => (
              <div className="feature-card" key={i}>
                <div className="feature-icon" />
                <h3 className="feature-title" />
                <p className="feature-desc" />
                <p className="feature-desc short" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="appraisal-form-section">
        <div className="section-inner appraisal-form-inner">
          <div className="appraisal-form-info">
            <p className="section-tag"></p>
            <h2 className="section-title"></h2>
            <p className="appraisal-para" />
            <div className="appraisal-steps">
              {[0, 1, 2].map(i => (
                <div className="a-step" key={i}>
                  <div className="a-step-num">{i + 1}</div>
                  <div>
                    <span className="a-step-title" />
                    <span className="a-step-desc" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="appraisal-form-panel">
            <h3 className="form-heading"></h3>
            <div className="book-form">
              {[0, 1, 2, 3, 4].map(i => (
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
