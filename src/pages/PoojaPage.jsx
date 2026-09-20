import PoojaRituals from '../components/PoojaRituals';
import CTASection from '../components/CTASection';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function PoojaPage() {
  return (
    <div className="page-wrapper">
      {/* Breadcrumb Bar */}
      <div className="breadcrumb-bar">
        <div className="container breadcrumb-container">
          <Link to="/">Home</Link>
          <ChevronRight size={14} />
          <span className="breadcrumb-current">Pooja &amp; Rituals</span>
        </div>
      </div>

      {/* Page Hero Header */}
      <div className="page-hero-header">
        <div className="container text-center">
          <span className="page-badge">SACRED DEVOTION</span>
          <h1>Pooja &amp; Rituals</h1>
          <p className="page-hero-subtitle">
            Experience Divine Grace and Spiritual Harmony for Every Life Event
          </p>
        </div>
      </div>

      <PoojaRituals />
      <CTASection />
    </div>
  );
}
