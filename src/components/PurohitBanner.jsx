import { PhoneCall, MessageCircle } from 'lucide-react';
import './PurohitBanner.css';

export default function PurohitBanner() {
  return (
    <section className="purohit-banner">
      <div className="purohit-banner-overlay"></div>
      <div className="container purohit-banner-container">
        <div className="purohit-portrait-col">
          <div className="purohit-portrait-frame">
            <img
              src="/assets/images/service-pooja.png"
              alt="Hari Anjaneya Abhishek Sharma - Vedic Purohit portrait"
              className="purohit-portrait-img"
            />
            <div className="portrait-badge">
              <span className="badge-icon">🏅</span>
              <strong>16 Years</strong>
              <span>in Purohitham</span>
            </div>
          </div>
        </div>

        <div className="purohit-banner-content">
          <div className="banner-om">ॐ</div>
          <h2>Traditional Vedic Purohitha Seva</h2>
          <p className="banner-tagline">Vedokthamgaa Vishwasaneeyamga</p>
          <p className="banner-desc">
            Experience the divine with authentic Vedic rituals and dedicated service.
            Hari Anjaneya Abhishek Sharma (B.A.), with 16 years of dedicated Purohitham,
            brings the ancient wisdom of Sri Venkateshwara Vedic University to your home.
          </p>

          <div className="banner-features">
            <div className="banner-feature">
              <span className="feature-icon">🔱</span>
              <span>Experienced Purohit</span>
            </div>
            <div className="banner-feature">
              <span className="feature-icon">📿</span>
              <span>Traditional Vedic Procedure</span>
            </div>
            <div className="banner-feature">
              <span className="feature-icon">🙏</span>
              <span>Personalized Service</span>
            </div>
            <div className="banner-feature">
              <span className="feature-icon">✨</span>
              <span>Complete Support</span>
            </div>
          </div>

          <div className="banner-actions">
            <a href="tel:+919177384384" className="btn btn-primary">
              <PhoneCall size={18} /> Call Now
            </a>
            <a
              href="https://wa.me/919177384384?text=Namaste,%20I%20would%20like%20to%20enquire%20about%20Vaidika%20Seva."
              className="btn wa-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={18} /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
