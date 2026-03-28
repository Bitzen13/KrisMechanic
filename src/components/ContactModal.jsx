import { useEffect } from 'react'
import './ContactModal.css'
import { PHONE_RAW, PHONE_DISPLAY, EMAIL } from '../contact'

export default function ContactModal({ onClose }) {
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>
        <h2 className="modal-title">Get in Touch</h2>
        <p className="modal-sub">Pick the easiest way to reach Kris.</p>
        <div className="modal-methods">
          <a href={`tel:${PHONE_RAW}`} className="modal-method" onClick={onClose}>
            <div className="modal-method-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.1 1.17 2 2 0 012.08 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
            </div>
            <div className="modal-method-text">
              <span className="modal-method-label">Call</span>
              <span className="modal-method-value">{PHONE_DISPLAY}</span>
            </div>
          </a>
          <a href={`sms:${PHONE_RAW}`} className="modal-method" onClick={onClose}>
            <div className="modal-method-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
              </svg>
            </div>
            <div className="modal-method-text">
              <span className="modal-method-label">Text</span>
              <span className="modal-method-value">{PHONE_DISPLAY}</span>
            </div>
          </a>
          <a href={`mailto:${EMAIL}`} className="modal-method" onClick={onClose}>
            <div className="modal-method-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            <div className="modal-method-text">
              <span className="modal-method-label">Email</span>
              <span className="modal-method-value">{EMAIL}</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
