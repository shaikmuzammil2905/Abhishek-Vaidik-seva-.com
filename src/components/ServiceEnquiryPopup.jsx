import React, { useState, useEffect } from 'react';
import { X, MessageCircle, Phone } from 'lucide-react';
import './ServiceEnquiryPopup.css';

export default function ServiceEnquiryPopup({ isOpen, onClose, service }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    message: ''
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleEsc = (e) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleEsc);
      return () => {
        document.body.style.overflow = 'auto';
        window.removeEventListener('keydown', handleEsc);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen || !service) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const constructWhatsAppMessage = () => {
    return `Namaste, I would like to enquire about ${service.title} by Abhishek Vaidika Seva. 
Name: ${formData.name}
Phone: ${formData.phone}
Preferred Date: ${formData.date}
Preferred Time: ${formData.time}
Message: ${formData.message}`;
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(constructWhatsAppMessage());
    window.open(`https://wa.me/919177384384?text=${message}`, '_blank');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate submit
    alert(`Enquiry submitted for ${service.title}! We will contact you shortly.`);
    onClose();
  };

  return (
    <div className="popup-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="popup-close-btn" onClick={onClose} aria-label="Close popup">
          <X size={24} />
        </button>
        
        <div className="popup-header">
          <img src={service.image} alt={service.title} className="popup-service-img" />
          <div className="popup-service-info">
            <h3>{service.title} Enquiry</h3>
            <p>{service.shortDesc}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="popup-form">
          <div className="form-group">
            <label htmlFor="name">Name *</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number *</label>
            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="date">Preferred Date</label>
              <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="time">Preferred Time</label>
              <input type="time" id="time" name="time" value={formData.time} onChange={handleChange} />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="3"></textarea>
          </div>
          
          <div className="popup-actions">
            <button type="submit" className="btn btn-primary submit-btn">Submit Enquiry</button>
            <div className="popup-secondary-actions">
              <button type="button" onClick={handleWhatsApp} className="btn whatsapp-btn">
                <MessageCircle size={18} /> WhatsApp
              </button>
              <a href="tel:+919177384384" className="btn call-btn">
                <Phone size={18} /> Call Now
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
