import React from 'react';
import { X, CheckCircle, MessageCircle } from 'lucide-react';
import './ServiceEnquiryPopup.css';

export default function ServiceContentModal({ isOpen, onClose, service, showImage = false }) {
  if (!isOpen || !service) return null;

  return (
    <div className="popup-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="popup-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '600px' }}>
        <button className="popup-close-btn" onClick={onClose} aria-label="Close popup">
          <X size={24} />
        </button>
        
        <div className="popup-header" style={{ borderBottom: '1px solid rgba(212, 175, 55, 0.3)', paddingBottom: '1rem', marginBottom: '1.5rem', display: 'block', textAlign: 'center' }}>
          {showImage && service.image && (
            <img src={service.image} alt={service.title} style={{ width: '100%', maxHeight: '200px', objectFit: 'cover', borderRadius: '8px', marginBottom: '1rem' }} />
          )}
          <h3 style={{ fontSize: '1.8rem', color: 'var(--clr-maroon)', marginBottom: '0.5rem', fontFamily: 'var(--font-serif)' }}>{service.title}</h3>
          <p style={{ color: 'var(--clr-text-muted)', fontSize: '1.05rem', lineHeight: '1.5' }}>{service.shortDesc}</p>
        </div>

        <div className="popup-body" style={{ maxHeight: '60vh', overflowY: 'auto', paddingRight: '0.5rem' }}>
          {service.intro && (
            <section style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ color: 'var(--clr-maroon)', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Introduction</h4>
              <p style={{ color: '#444', lineHeight: '1.6' }}>{service.intro}</p>
            </section>
          )}

          {service.significance && (
            <section style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ color: 'var(--clr-maroon)', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Traditional Significance</h4>
              <p style={{ color: '#444', lineHeight: '1.6' }}>{service.significance}</p>
            </section>
          )}

          {service.whatIsIncluded && service.whatIsIncluded.length > 0 && (
            <section style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ color: 'var(--clr-maroon)', marginBottom: '0.75rem', fontSize: '1.1rem' }}>What the service involves</h4>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {service.whatIsIncluded.map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', color: '#444' }}>
                    <CheckCircle size={18} style={{ color: 'var(--clr-gold)', flexShrink: 0, marginTop: '2px' }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {service.preparation && (
            <section style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ color: 'var(--clr-maroon)', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Preparation Guidance</h4>
              <p style={{ color: '#444', lineHeight: '1.6' }}>{service.preparation}</p>
            </section>
          )}
        </div>
        
        <div className="popup-actions" style={{ marginTop: '1rem', paddingTop: '1.25rem', borderTop: '1px solid rgba(212, 175, 55, 0.3)' }}>
          <a href={`https://wa.me/919177384384?text=${encodeURIComponent('Namaste, I would like to enquire about ' + service.title + ' by Abhishek Vaidika Seva.')}`} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
            <MessageCircle size={18} />
            Enquire via WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
