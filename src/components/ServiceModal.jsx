import { useState, useEffect, useCallback } from 'react';
import { X, PhoneCall, MessageCircle } from 'lucide-react';
import './ServiceModal.css';

export default function ServiceModal({ service, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleEscape = useCallback((e) => {
    if (e.key === 'Escape') onClose();
  }, [onClose]);

  useEffect(() => {
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [handleEscape]);

  const waLink = `https://wa.me/919177384384?text=${encodeURIComponent(
    `Namaste, I would like to enquire about ${service.title}. Please share availability and details.`
  )}`;

  if (submitted) {
    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content success-modal" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close" onClick={onClose} aria-label="Close"><X size={24} /></button>
          <div className="success-icon">✓</div>
          <h3>Thank You!</h3>
          <p>Your enquiry has been received. We will contact you shortly.</p>
          <div className="success-actions">
            <a href="tel:+919177384384" className="btn btn-primary">
              <PhoneCall size={18} /> Call Now
            </a>
            <a href={waLink} className="btn wa-btn" target="_blank" rel="noopener noreferrer">
              <MessageCircle size={18} /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content enquiry-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close"><X size={24} /></button>

        <div className="modal-header" style={{ display: 'block', textAlign: 'center' }}>
          <div>
            <h3 style={{ marginBottom: '0.25rem' }}>{service.title}</h3>
            <p className="modal-service-desc">{service.shortDesc}</p>
          </div>
        </div>

        <form className="modal-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" name="name" placeholder="Your Name *" required value={formData.name} onChange={handleChange} />
          </div>
          <div className="form-group">
            <input type="tel" name="phone" placeholder="Phone Number *" required pattern="[0-9]{10}" value={formData.phone} onChange={handleChange} />
          </div>
          <div className="form-row">
            <div className="form-group">
              <input type="date" name="date" value={formData.date} onChange={handleChange} />
            </div>
            <div className="form-group">
              <input type="time" name="time" value={formData.time} onChange={handleChange} />
            </div>
          </div>
          <div className="form-group">
            <textarea name="message" rows="3" placeholder="Your Message" value={formData.message} onChange={handleChange}></textarea>
          </div>

          <div className="modal-actions">
            <button type="submit" className="btn btn-primary w-full">Submit Enquiry</button>
            <a href={waLink} className="btn wa-btn w-full" target="_blank" rel="noopener noreferrer">
              <MessageCircle size={18} /> WhatsApp Enquiry
            </a>
            <a href="tel:+919177384384" className="btn btn-secondary w-full">
              <PhoneCall size={18} /> Call Now
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
