import { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, MessageCircle, ChevronDown, Sparkles, CheckCircle } from 'lucide-react';
import { servicesData } from '../data/services';
import ServiceModal from './ServiceModal';
import ServiceContentModal from './ServiceContentModal';
import './Services.css';

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [modalService, setModalService] = useState(null);
  const [contentModalService, setContentModalService] = useState(null);
  const navigate = useNavigate();

  const categories = [
    'ALL',
    'Homams',
    'Poojas',
    'Pitru Poojas',
    'Specialist Vedic Services',
    'Abhishekams & Special Archanas'
  ];

  // Filter and ensure alphabetical order (servicesData is already sorted A-Z)
  const filteredServices = useMemo(() => {
    if (activeCategory === 'ALL') {
      return servicesData;
    }
    return servicesData.filter(s => s.category === activeCategory);
  }, [activeCategory]);

  const handleDropdownSelect = (e) => {
    const id = e.target.value;
    const service = servicesData.find(s => s.id === id);
    if (service) {
      setContentModalService(service);
      e.target.value = "";
    }
  };

  return (
    <section id="services" className="section-padding services-section">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title animate-fade-up">Our Services</h2>
          <p className="section-subtitle animate-fade-up animate-stagger-1">
            Complete Vedic Services for Every Sacred Occasion
          </p>

          {/* Quick Service Selector Dropdown */}
          <div className="services-dropdown-container animate-fade-up animate-stagger-2">
            <label htmlFor="service-select" className="dropdown-label">
              <Sparkles size={16} className="sparkle-icon" /> Quick Jump to Service:
            </label>
            <div className="dropdown-select-wrapper">
              <select 
                id="service-select" 
                className="services-select"
                onChange={handleDropdownSelect}
                defaultValue=""
              >
                <option value="" disabled>-- Select a Vedic Service (A-Z) --</option>
                {servicesData.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.title} ({s.category})
                  </option>
                ))}
              </select>
              <ChevronDown size={18} className="select-arrow" />
            </div>
          </div>

          {/* Category Filter Chips */}
          <div className="services-category-tabs animate-fade-up animate-stagger-3">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`service-tab-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Pure Content Services Grid - Alphabetical Order without Images */}
        <div className="services-grid">
          {filteredServices.map((service, index) => (
            <div 
              key={service.id} 
              className="service-card text-only-card"
              onClick={() => setContentModalService(service)}
            >
              <div className="service-card-header">
                <span className="service-category-badge">{service.category}</span>
                <h3 className="service-card-title">{service.title}</h3>
              </div>

              <div className="service-card-content">
                <p className="service-card-desc">{service.shortDesc}</p>
                
                {service.whatIsIncluded && service.whatIsIncluded.length > 0 && (
                  <div className="service-card-highlights">
                    <span className="highlights-label">Includes:</span>
                    <ul className="highlights-list">
                      {service.whatIsIncluded.slice(0, 3).map((item, i) => (
                        <li key={i}>
                          <CheckCircle size={14} className="highlight-check" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="service-card-actions">
                  <button 
                    className="btn btn-secondary btn-sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      setContentModalService(service);
                    }}
                  >
                    <span>View Details</span>
                    <ArrowRight size={15} />
                  </button>
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      setModalService(service);
                    }}
                  >
                    <MessageCircle size={15} />
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
          showImage={false}
        />
      )}
    </section>
  );
}
