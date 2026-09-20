import ContactSection from '../components/ContactSection';
import ContactStrip from '../components/ContactStrip';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="page-wrapper">
      {/* Breadcrumb Bar */}
      <div className="breadcrumb-bar">
        <div className="container breadcrumb-container">
          <Link to="/">Home</Link>
          <ChevronRight size={14} />
          <span className="breadcrumb-current">Contact Us</span>
        </div>
      </div>

      {/* Page Hero Header */}
      <div className="page-hero-header">
        <div className="container text-center">
          <span className="page-badge">GET IN TOUCH</span>
          <h1>Contact Vaidika Seva</h1>
          <p className="page-hero-subtitle">
            Connect with Acharya Hari Anjaneya Abhishek Sharma for Muhurtham &amp; Ceremony Consultations
          </p>
        </div>
      </div>

      <ContactSection />
      <ContactStrip />
    </div>
  );
}
