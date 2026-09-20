import { PhoneCall, MessageCircle, Calendar } from 'lucide-react';
import './CTASection.css';

export default function CTASection() {
  return (
    <section className="cta-section">
      <div className="cta-overlay"></div>
      <div className="container cta-container animate-fade-up">
        <div className="cta-om-badge">
          <span className="cta-om">ॐ</span>
          <span className="cta-brand-tag">ABHISHEK VAIDIKA SEVA</span>
        </div>

        <h2 className="cta-title">
          Bring Divine Blessings to Your Home &amp; Family
        </h2>

        <div className="cta-tagline">
          “Vedokthamgaa Vishwasaneeyamga”
        </div>

        <p className="cta-description">
          Whether you are planning a sacred <strong>Gruhapravesham</strong>, an auspicious <strong>Vivaham</strong>, a powerful <strong>Chandi Homam</strong>, or a traditional <strong>Samskara</strong>, connect with Acharya Hari Anjaneya Abhishek Sharma for authentic Vedic procedures.
        </p>

        <div className="cta-badges">
          <span className="cta-pill">📿 Traditional Shastras</span>
          <span className="cta-pill">🏛️ TTD Vedic University</span>
          <span className="cta-pill">🏅 16 Years Experience</span>
        </div>

        <div className="cta-buttons">
          <a href="#contact" className="btn cta-btn-book">
            <Calendar size={20} />
            <span>Book Purohitham</span>
          </a>
          <a
            href="https://wa.me/919177384384?text=Namaste%20Acharyaji,%20I%20would%20like%20to%20enquire%20about%20booking%20a%20Vedic%20Pooja/Homam%20service."
            className="btn cta-btn-wa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={20} />
            <span>WhatsApp Acharya</span>
          </a>
          <a href="tel:+919177384384" className="btn cta-btn-call">
            <PhoneCall size={20} />
            <span>Call +91 9177384384</span>
          </a>
        </div>
      </div>
    </section>
  );
}
