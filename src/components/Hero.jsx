import { PhoneCall, Calendar, UserCheck, ArrowRight } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      {/* Mobile Background (Clean, high-res image without baked-in text) */}
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
          {/* Top Brand Seal */}
          <div className="hero-brand-badge">
            <div className="hero-om-icon">ॐ</div>
            <div className="hero-brand-text">
              <span className="hero-brand-main">ABHISHEK</span>
              <span className="hero-brand-sub">VAIDIKA SEVA</span>
            </div>
            <div className="hero-brand-divider"><span>◆</span></div>
          </div>

          <h1 className="hero-title">
            <span>Vaidika</span>
            <span>Seva</span>
          </h1>

          <div className="hero-tagline-box">
            <p className="hero-tagline">Vedokthamgaa Vishwasaneeyamga</p>
            <div className="hero-ornament-line">
              <span className="line"></span>
              <span className="diamond">◆</span>
              <span className="line"></span>
            </div>
          </div>
          
          <p className="hero-desc">
            Authentic Vedic Poojas, Homams, Samskaras and Purohitha Seva performed with traditional Vedic procedures and devotion.
          </p>

          {/* Purohit Credential Card */}
          <div className="hero-profile-card">
            <div className="hero-profile-avatar">
              <UserCheck size={26} className="avatar-icon" />
            </div>
            <div className="hero-profile-details">
              <h4 className="purohit-name">Hari Anjaneya Abhishek Sharma <span className="degree">(B.A.)</span></h4>
              <p className="purohit-univ">Sri Venkateshwara Vedic University (TTD)</p>
              <p className="purohit-exp">16 Years in Purohitham</p>
            </div>
          </div>

          {/* Hero CTAs */}
          <div className="hero-actions">
            <a href="#contact" className="btn hero-btn-book">
              <Calendar size={18} />
              <span>Book Purohitham</span>
              <ArrowRight size={16} className="arrow-icon" />
            </a>
            <a href="tel:+919177384384" className="btn hero-btn-call">
              <PhoneCall size={18} />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
