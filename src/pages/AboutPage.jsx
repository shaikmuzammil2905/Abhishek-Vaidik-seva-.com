import AboutSection from '../components/AboutSection';
import PurohitBanner from '../components/PurohitBanner';
import CTASection from '../components/CTASection';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="page-wrapper">
      {/* Breadcrumb Bar */}
      <div className="breadcrumb-bar">
        <div className="container breadcrumb-container">
          <Link to="/">Home</Link>
          <ChevronRight size={14} />
          <span className="breadcrumb-current">About Us</span>
        </div>
      </div>

      {/* Page Hero Header */}
      <div className="page-hero-header">
        <div className="container text-center">
          <span className="page-badge">VEDIKAM &amp; PUROHITHAM</span>
          <h1>About Abhishek Vaidika Seva</h1>
          <p className="page-hero-subtitle">
            Dedicated to Preserving the Sacred Purity of Vedic Scriptures for 16 Golden Years
          </p>
        </div>
      </div>

      {/* Main Content Sections */}
      <AboutSection />
      <PurohitBanner />
      <CTASection />
    </div>
  );
}
