import { useState } from 'react';
import { PhoneCall, Mail, MapPin, MessageCircle } from 'lucide-react';
import './ContactSection.css';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', service: '', date: '', message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', phone: '', email: '', service: '', date: '', message: '' });
  };

  return (
    <section id="contact" className="section-padding contact-section">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title animate-fade-up">Contact Vaidika Seva</h2>
        </div>

        <div className="contact-grid">
          <div className="contact-info animate-fade-up">
            <div className="contact-card">
              <PhoneCall size={24} className="contact-icon" />
              <div>
                <h4>Phone</h4>
                <a href="tel:+919177384384">9177384384</a>
              </div>
            </div>
            <div className="contact-card">
              <Mail size={24} className="contact-icon" />
              <div>
                <h4>Email</h4>
                <a href="mailto:anjaneyaabhishek@gmail.com">anjaneyaabhishek@gmail.com</a>
              </div>
            </div>
            <div className="contact-card">
              <MapPin size={24} className="contact-icon" />
              <div>
                <h4>Address</h4>
                <p>12-11-294/1, Warasiguda,<br />Secunderabad</p>
              </div>
            </div>

            <div className="contact-quick-actions">
              <a href="tel:+919177384384" className="btn btn-primary">
                <PhoneCall size={18} /> Call
              </a>
              <a
                href="https://wa.me/919177384384?text=Namaste,%20I%20would%20like%20to%20enquire%20about%20Vaidika%20Seva."
                className="btn wa-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={18} /> WhatsApp
              </a>
              <a href="mailto:anjaneyaabhishek@gmail.com" className="btn btn-secondary">
                <Mail size={18} /> Email
              </a>
            </div>
          </div>

          <div className="contact-form-wrapper animate-fade-up animate-stagger-2">
            {submitted && (
              <div className="form-success-banner">
                ✓ Thank you! Your enquiry has been received. We will contact you shortly.
              </div>
            )}
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input type="text" name="name" placeholder="Your Name *" required value={formData.name} onChange={handleChange} />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <input type="tel" name="phone" placeholder="Phone *" required pattern="[0-9]{10}" value={formData.phone} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <select name="service" value={formData.service} onChange={handleChange}>
                    <option value="">Select Service</option>
                    <option value="Pooja Services">Pooja Services</option>
                    <option value="Homam / Havan">Homam / Havan</option>
                    <option value="Samskaras">Samskaras</option>
                    <option value="Upanayanam">Upanayanam</option>
                    <option value="Vivaham">Marriage / Vivaham</option>
                    <option value="Gruhapravesham">Gruhapravesham</option>
                    <option value="Satyanarayana Swamy Pooja">Satyanarayana Swamy Pooja</option>
                    <option value="Abhishekam">Abhishekam</option>
                    <option value="Namakaranam">Namakaranam</option>
                    <option value="Other">Other Vedic Sevas</option>
                  </select>
                </div>
                <div className="form-group">
                  <input type="date" name="date" value={formData.date} onChange={handleChange} />
                </div>
              </div>
              <div className="form-group">
                <textarea name="message" rows="4" placeholder="Your Message" value={formData.message} onChange={handleChange}></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-full">Send Enquiry</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
