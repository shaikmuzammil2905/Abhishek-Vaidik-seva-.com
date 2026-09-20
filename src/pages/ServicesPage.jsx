import Services from '../components/Services';
import CTASection from '../components/CTASection';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function ServicesPage() {
  return (
    <div className="page-wrapper">
      {/* Breadcrumb Bar */}
      <div className="breadcrumb-bar">
        <div className="container breadcrumb-container">
          <Link to="/">Home</Link>
          <ChevronRight size={14} />
          <span className="breadcrumb-current">Services</span>
        </div>
      </div>

      {/* Page Hero Header */}
      <div className="page-hero-header">
        <div className="container text-center">
          <span className="page-badge">SACRED CEREMONIES</span>
          <h1>Our Vedic Services</h1>
          <p className="page-hero-subtitle">
            Authentic Poojas, Powerful Homams, and Traditional Samskaras Performed according to Scriptural Niyamas
          </p>
        </div>
      </div>

      <Services />
      <CTASection />
    </div>
  );
}
