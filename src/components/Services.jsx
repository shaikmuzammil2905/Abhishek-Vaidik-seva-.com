import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, MessageCircle, ChevronDown, Sparkles } from 'lucide-react';
import { servicesData } from '../data/services';
import ServiceModal from './ServiceModal';
import ServiceContentModal from './ServiceContentModal';
import './Services.css';

export default function Services() {
  const [modalService, setModalService] = useState(null);
  const [contentModalService, setContentModalService] = useState(null);
  const navigate = useNavigate();

  const handleDropdownSelect = (e) => {
    const id = e.target.value;
    const service = servicesData.find(s => s.id === id);
    if (service) {
      const url = `/services/${encodeURIComponent(service.category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-'))}/${service.slug}`;
      window.open(url, '_blank');
      // Reset dropdown so the user can select the same option again if needed
      e.target.value = "";
    }
  };

  return (
    <section id="services" className="section-padding services-section">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title animate-fade-up">Our Services</h2>
          <p className="section-subtitle animate-fade-up animate-stagger-1">
            Complete Vedic Services for Every Occasion
          </p>

          {/* Service Selector Dropdown */}
          <div className="services-dropdown-container animate-fade-up animate-stagger-2">
            <label htmlFor="service-select" className="dropdown-label">
              <Sparkles size={16} className="sparkle-icon" /> Select a Service:
            </label>
            <div className="dropdown-select-wrapper">
              <select 
                id="service-select" 
                className="services-select"
                onChange={handleDropdownSelect}
                defaultValue=""
              >
                <option value="" disabled>-- Choose a Vedic Service --</option>
                {servicesData.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.title}
                  </option>
                ))}
              </select>
              <ChevronDown size={18} className="select-arrow" />
            </div>
          </div>
        </div>

        <div className="services-grid">
          {servicesData.filter(s => s.featured).map((service, index) => (
            <div 
              key={service.id} 
              className="service-card card" 
              style={{ cursor: 'pointer' }}
              onClick={() => setContentModalService(service)}
            >
              <div className="service-card-content">
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-desc">{service.shortDesc}</p>
                <div className="service-card-actions">
                  <button 
                    className="btn btn-secondary btn-sm"
                    style={{ background: 'none', color: 'var(--clr-gold)', border: '1px solid var(--clr-gold)' }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setContentModalService(service);
                    }}
                  >
                    <span>View Details</span>
                    <ArrowRight size={16} />
                  </button>
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      setModalService(service);
                    }}
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

      {contentModalService && (
        <ServiceContentModal
          isOpen={!!contentModalService}
          onClose={() => setContentModalService(null)}
          service={contentModalService}
        />
      )}
    </section>
  );
}
