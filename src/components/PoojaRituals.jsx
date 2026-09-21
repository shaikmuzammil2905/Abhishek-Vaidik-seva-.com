import { useState } from 'react';
import { servicesData } from '../data/services';
import ServiceContentModal from './ServiceContentModal';
import './PoojaRituals.css';

export default function PoojaRituals() {
  const [contentModalService, setContentModalService] = useState(null);
  const categories = servicesData.slice(0, 8);

  return (
    <section id="pooja" className="section-padding pooja-section">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title animate-fade-up">Pooja &amp; Rituals</h2>
          <p className="section-subtitle animate-fade-up animate-stagger-1">
            Sacred Ceremonies for Every Milestone of Life
          </p>
        </div>

        <div className="pooja-grid">
          {categories.map((cat) => (
            <div 
              key={cat.id} 
              className="pooja-card" 
              style={{ cursor: 'pointer' }}
              onClick={() => setContentModalService(cat)}
            >
              <div className="pooja-card-image-wrapper">
                <img src={cat.image} alt={cat.title} loading="lazy" />
              </div>
              <div className="pooja-card-info">
                <h4>{cat.title}</h4>
                <p>{cat.shortDesc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {contentModalService && (
        <ServiceContentModal
          isOpen={!!contentModalService}
          onClose={() => setContentModalService(null)}
          service={contentModalService}
          showImage={true}
        />
      )}
    </section>
  );
}
