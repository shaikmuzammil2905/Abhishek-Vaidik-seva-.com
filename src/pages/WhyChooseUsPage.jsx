import WhyChooseUs from '../components/WhyChooseUs';
import ProcessSteps from '../components/ProcessSteps';
import CTASection from '../components/CTASection';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function WhyChooseUsPage() {
  return (
    <div className="page-wrapper">
      {/* Breadcrumb Bar */}
      <div className="breadcrumb-bar">
        <div className="container breadcrumb-container">
          <Link to="/">Home</Link>
          <ChevronRight size={14} />
          <span className="breadcrumb-current">Why Choose Us</span>
        </div>
      </div>

      {/* Page Hero Header */}
      <div className="page-hero-header">
        <div className="container text-center">
          <span className="page-badge">OUR ASSURANCE</span>
          <h1>Why Choose Vaidika Seva?</h1>
          <p className="page-hero-subtitle">
            Scriptural Perfection • TTD Vedic University Credentials • Devotional Excellence
          </p>
        </div>
      </div>

      <WhyChooseUs />
      <ProcessSteps />
      <CTASection />
    </div>
  );
}
