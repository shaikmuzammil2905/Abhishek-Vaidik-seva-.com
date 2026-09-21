import { PhoneCall, Calendar, UserCheck, ArrowRight } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      {/* Mobile Background: Clean high-res image (image copy 20.png) without baked-in text */}
      <div 
        className="hero-bg mobile-bg" 
        style={{ backgroundImage: "url('/assets/images/hero-mobile.png')" }}
      ></div>
      
      {/* Desktop Background: Clean wide cinematic image (image copy 3.png) */}
      <div 
        className="hero-bg desktop-bg" 
        style={{ backgroundImage: "url('/assets/images/hero-desktop.png')" }}
      ></div>
      
      <div className="hero-overlay"></div>

      <div className="container hero-container">
        <div className="hero-content">
          {/* Main H1 Heading */}
          <h1 className="hero-title animate-fade-up">
            <span className="title-word" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', wordBreak: 'break-word', textTransform: 'uppercase' }}>Vedokthamgaa</span>
            <span className="title-word" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', wordBreak: 'break-word', textTransform: 'uppercase' }}>Vishwasaneeyamgaa</span>
          </h1>
          
          {/* Short Description */}
          <p className="hero-desc animate-fade-up animate-stagger-2">
            Authentic Vedic Poojas, Homams, Samskaras and Purohitha Seva performed with traditional Vedic procedures and devotion.
          </p>

          {/* Purohit Credential Card (Normal Document Flow) */}
          <div className="hero-profile-card animate-fade-up animate-stagger-3">
            <div className="hero-profile-avatar">
              <UserCheck size={24} className="avatar-icon" />
            </div>
            <div className="hero-profile-details">
              <h4 className="purohit-name">
                Hari Anjaneya Abhishek Sharma <span className="degree">(B.A.)</span>
              </h4>
              <p className="purohit-univ">Sri Venkateshwara Vedic University (TTD)</p>
              <p className="purohit-exp">16 Years in Purohitham</p>
            </div>
          </div>

          {/* CTA Action Buttons */}
          <div className="hero-actions animate-fade-up animate-stagger-4">
            <a href="#contact" className="btn hero-btn-book">
              <Calendar size={18} />
              <span>BOOK PUROHITHAM</span>
              <ArrowRight size={16} className="arrow-icon" />
            </a>
            <a href="tel:+919177384384" className="btn hero-btn-call">
              <PhoneCall size={18} />
              <span>CALL NOW</span>
            </a>
          </div>
        </div>
      </div>

      {/* Soft Rounded Lower Transition Edge */}
      <div className="hero-lower-transition"></div>
    </section>
  );
}
