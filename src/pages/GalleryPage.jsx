import Gallery from '../components/Gallery';
import CTASection from '../components/CTASection';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function GalleryPage() {
  return (
    <div className="page-wrapper">
      {/* Breadcrumb Bar */}
      <div className="breadcrumb-bar">
        <div className="container breadcrumb-container">
          <Link to="/">Home</Link>
          <ChevronRight size={14} />
          <span className="breadcrumb-current">Gallery</span>
        </div>
      </div>

      {/* Page Hero Header */}
      <div className="page-hero-header">
        <div className="container text-center">
          <span className="page-badge">SACRED MOMENTS</span>
          <h1>Ceremony Gallery</h1>
          <p className="page-hero-subtitle">
            Glimpses of Divine Homams, Vivahams, Gruhapraveshams &amp; Vedic Pooja Sevas
          </p>
        </div>
      </div>

      <Gallery />
      <CTASection />
    </div>
  );
}
