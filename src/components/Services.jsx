import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { servicesData } from '../data/services';
import ServiceModal from './ServiceModal';
import './Services.css';

export default function Services() {
  const [modalService, setModalService] = useState(null);

  return (
    <section id="services" className="section-padding services-section">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title animate-fade-up">Our Services</h2>
          <p className="section-subtitle animate-fade-up animate-stagger-1">
            Complete Vedic Services for Every Occasion
          </p>
        </div>

        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div key={service.id} className="service-card card">
              <div className="service-card-image-wrapper">
                <img
                  src={service.image}
                  alt={service.title}
                  className="service-card-image"
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.style.background = 'linear-gradient(135deg, #5E141A, #3E2723)';
                    e.target.style.minHeight = '200px';
                  }}
                />
                <div className="service-card-overlay">
                  <span className="service-card-number">0{index + 1}</span>
                </div>
              </div>
              <div className="service-card-content">
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-desc">{service.shortDesc}</p>
                <div className="service-card-actions">
                  <Link to={`/service/${service.id}`} className="btn btn-secondary btn-sm">
                    <span>View Details</span>
                    <ArrowRight size={16} />
                  </Link>
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => setModalService(service)}
                  >
                    <MessageCircle size={16} />
                    <span>Enquire Now</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {modalService && (
        <ServiceModal
          service={modalService}
          onClose={() => setModalService(null)}
        />
      )}
    </section>
  );
}
