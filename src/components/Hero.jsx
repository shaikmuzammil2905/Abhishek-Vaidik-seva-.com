import { PhoneCall } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      {/* Mobile Background */}
      <div 
        className="hero-bg mobile-bg" 
        style={{ backgroundImage: "url('/assets/images/hero-mobile.png')" }}
      ></div>
      
      {/* Desktop Background */}
      <div 
        className="hero-bg desktop-bg" 
        style={{ backgroundImage: "url('/assets/images/hero-desktop.png')" }}
      ></div>
      
      <div className="hero-overlay"></div>

      <div className="container hero-container">
        <div className="hero-content animate-fade-up">
          <div className="hero-label">ABHISHEK VAIDIKA SEVA</div>
          <h1 className="hero-title">Vaidika Seva</h1>
          <p className="hero-tagline">Vedokthamgaa Vishwasaneeyamga</p>
          
          <p className="hero-desc">
            “Authentic Vedic Poojas, Homams, Samskaras and Purohitha Seva performed with traditional Vedic procedures and devotion.”
          </p>

          <div className="hero-profile">
            <strong>Hari Anjaneya Abhishek Sharma (B.A.)</strong>
            <span>Sri Venkateshwara Vedic University (TTD)</span>
            <span>16 Years in Purohitham</span>
          </div>

          <div className="hero-actions">
            <a href="#services" className="btn btn-primary">
              BOOK PUROHITHAM
            </a>
            <a href="tel:+919177384384" className="btn btn-secondary call-btn">
              <PhoneCall size={18} />
              CALL NOW
            </a>
            <a 
              href="https://wa.me/919177384384?text=Namaste,%20I%20would%20like%20to%20enquire%20about%20Vaidika%20Seva.%20Please%20share%20the%20details." 
              className="btn wa-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              WHATSAPP
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
