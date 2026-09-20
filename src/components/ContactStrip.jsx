import { PhoneCall, MessageCircle, Mail, MapPin } from 'lucide-react';
import './ContactStrip.css';

export default function ContactStrip() {
  return (
    <div className="contact-strip">
      <div className="container contact-strip-grid">
        <a href="tel:+919177384384" className="strip-item">
          <PhoneCall size={20} />
          <div>
            <span className="strip-label">Call Now</span>
            <strong>9177384384</strong>
          </div>
        </a>

        <a
          href="https://wa.me/919177384384?text=Namaste,%20I%20would%20like%20to%20enquire%20about%20Vaidika%20Seva."
          className="strip-item"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle size={20} />
          <div>
            <span className="strip-label">WhatsApp</span>
            <strong>9177384384</strong>
          </div>
        </a>

        <a href="mailto:anjaneyaabhishek@gmail.com" className="strip-item">
          <Mail size={20} />
          <div>
            <span className="strip-label">Email Us</span>
            <strong>anjaneyaabhishek@gmail.com</strong>
          </div>
        </a>

        <div className="strip-item no-link">
          <MapPin size={20} />
          <div>
            <span className="strip-label">Our Address</span>
            <strong>12-11-294/1, Warasiguda, Secunderabad</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
