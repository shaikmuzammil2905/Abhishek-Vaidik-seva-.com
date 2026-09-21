import { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { galleryImages } from '../data/gallery';
import './Gallery.css';

export default function Gallery({ isPreview = false }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  // If preview, only use the featured ones or slice first 6
  const displayedImages = isPreview 
    ? galleryImages.filter(img => img.featured).slice(0, 6)
    : (activeCategory === 'All' ? galleryImages : galleryImages.filter(img => img.category === activeCategory));

  const categories = ['All', ...new Set(galleryImages.map(img => img.category))];

  const openLightbox = (i) => {
    setLightboxIndex(i);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    document.body.style.overflow = '';
  }, []);

  const goNext = useCallback(() => setLightboxIndex((prev) => (prev + 1) % displayedImages.length), [displayedImages.length]);
  const goPrev = useCallback(() => setLightboxIndex((prev) => (prev - 1 + displayedImages.length) % displayedImages.length), [displayedImages.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, closeLightbox, goNext, goPrev]);

  // Touch swipe support could be added using Touch events (simplified version here)
  const [touchStart, setTouchStart] = useState(null);
  const handleTouchStart = (e) => setTouchStart(e.touches[0].clientX);
  const handleTouchEnd = (e) => {
    if (!touchStart) return;
    const touchEnd = e.changedTouches[0].clientX;
    if (touchStart - touchEnd > 50) goNext();
    if (touchStart - touchEnd < -50) goPrev();
    setTouchStart(null);
  };

  return (
    <section id="gallery" className={`section-padding gallery-section ${isPreview ? 'gallery-preview' : 'gallery-full'}`}>
      <div className="container">
        {isPreview && (
          <div className="text-center">
            <h2 className="section-title animate-fade-up">Gallery</h2>
          </div>
        )}

        {!isPreview && (
          <div className="gallery-header-controls">
            <div className="gallery-count-badge">
              {galleryImages.length >= 70 ? `${galleryImages.length}+ Sacred Moments` : `${galleryImages.length} Sacred Moments`}
            </div>
            
            <div className="gallery-filters">
              <Filter size={16} className="filter-icon" />
              <div className="filter-scroll">
                {categories.map(cat => (
                  <button 
                    key={cat}
                    className={`gallery-filter-btn ${activeCategory === cat ? 'active' : ''}`}
                    onClick={() => setActiveCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className={`gallery-grid ${isPreview ? 'preview-grid' : 'masonry-grid'}`}>
          {displayedImages.map((img, i) => (
            <div
              key={img.id || i}
              className="gallery-item animate-fade-up"
              onClick={() => openLightbox(i)}
            >
              <img src={img.thumbnail || img.src} alt={img.alt} loading="lazy" />
              <div className="gallery-item-overlay">
                <span>View</span>
              </div>
            </div>
          ))}
        </div>

        {isPreview && (
          <div className="text-center" style={{ marginTop: '2rem' }}>
            <Link to="/gallery" className="btn btn-secondary">
              VIEW FULL GALLERY &rarr;
            </Link>
          </div>
        )}
      </div>

      {lightboxIndex !== null && (
        <div 
          className="lightbox" 
          onClick={closeLightbox}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="lightbox-top-bar" onClick={(e) => e.stopPropagation()}>
            <span className="lightbox-counter">{lightboxIndex + 1} / {displayedImages.length}</span>
            <button className="lightbox-close" onClick={closeLightbox} aria-label="Close lightbox"><X size={28} /></button>
          </div>
          
          <button className="lightbox-nav prev" onClick={(e) => { e.stopPropagation(); goPrev(); }} aria-label="Previous image"><ChevronLeft size={36} /></button>
          
          <img
            src={displayedImages[lightboxIndex].src}
            alt={displayedImages[lightboxIndex].alt}
            className="lightbox-image"
            onClick={(e) => e.stopPropagation()}
          />
          
          <button className="lightbox-nav next" onClick={(e) => { e.stopPropagation(); goNext(); }} aria-label="Next image"><ChevronRight size={36} /></button>
        </div>
      )}
    </section>
  );
}
