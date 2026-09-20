import { PhoneCall, MessageCircle } from 'lucide-react';
import './CTASection.css';

export default function CTASection() {
  return (
    <section className="cta-section">
      <div className="cta-overlay"></div>
      <div className="container cta-container animate-fade-up">
        <h2>Book Your Purohitham</h2>
        <p>
          Plan your Vedic Seva with experienced guidance and traditional procedures.
        </p>
        <div className="cta-buttons">
          <a href="#contact" className="btn btn-primary btn-lg">
            Book Purohitham
          </a>
          <a
            href="https://wa.me/919177384384?text=Namaste,%20I%20would%20like%20to%20enquire%20about%20Vaidika%20Seva."
            className="btn wa-btn btn-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={20} /> WhatsApp
          </a>
          <a href="tel:+919177384384" className="btn btn-secondary btn-lg">
            <PhoneCall size={20} /> Call Now
          </a>
        </div>
      </div>
    </section>
  );
}
