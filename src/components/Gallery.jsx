import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import './Gallery.css';

const galleryImages = [
  { src: '/assets/images/gallery-01.png', alt: 'Hari Anjaneya Abhishek Sharma - Vedic Purohit in temple' },
  { src: '/assets/images/service-homam.jpg', alt: 'Traditional Homam fire ritual in temple' },
  { src: '/assets/images/service-vivaham.jpg', alt: 'Decorated Hindu wedding mandap' },
  { src: '/assets/images/service-gruhapravesham.jpg', alt: 'Gruhapravesham house warming ceremony' },
  { src: '/assets/images/service-satyanarayana.jpg', alt: 'Satyanarayana Swamy Pooja setup' },
  { src: '/assets/images/service-abhishekam.jpg', alt: 'Traditional Abhishekam ritual' },
];

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (i) => {
    setLightboxIndex(i);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = '';
  };

  const goNext = () => setLightboxIndex((prev) => (prev + 1) % galleryImages.length);
  const goPrev = () => setLightboxIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);

  return (
    <section id="gallery" className="section-padding gallery-section">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title animate-fade-up">Gallery</h2>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className="gallery-item animate-fade-up"
              onClick={() => openLightbox(i)}
            >
              <img src={img.src} alt={img.alt} loading="lazy" />
              <div className="gallery-item-overlay">
                <span>View</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Close lightbox"><X size={28} /></button>
          <button className="lightbox-nav prev" onClick={(e) => { e.stopPropagation(); goPrev(); }} aria-label="Previous image"><ChevronLeft size={36} /></button>
          <img
            src={galleryImages[lightboxIndex].src}
            alt={galleryImages[lightboxIndex].alt}
            className="lightbox-image"
            onClick={(e) => e.stopPropagation()}
          />
          <button className="lightbox-nav next" onClick={(e) => { e.stopPropagation(); goNext(); }} aria-label="Next image"><ChevronRight size={36} /></button>
        </div>
      )}
    </section>
  );
}
