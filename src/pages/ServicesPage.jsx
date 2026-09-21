import React, { useState, useEffect, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Search } from 'lucide-react';
import { servicesData } from '../data/services';
import ServiceEnquiryPopup from '../components/ServiceEnquiryPopup';
import ServiceContentModal from '../components/ServiceContentModal';
import CTASection from '../components/CTASection';
import './ServicesPage.css'; // Will create this

export default function ServicesPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialCategory = queryParams.get('category') || 'ALL';

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [modalService, setModalService] = useState(null); // Enquiry Modal
  const [contentModalService, setContentModalService] = useState(null); // Content Modal

  // Sync state if URL changes
  useEffect(() => {
    const cat = queryParams.get('category');
    if (cat) {
      setActiveCategory(cat);
    }
  }, [location.search]);

  const categories = [
    'ALL',
    'Homams',
    'Poojas',
    'Pitru Poojas',
    'Specialist Vedic Services',
    'Abhishekams & Special Archanas'
  ];

  const filteredServices = useMemo(() => {
    return servicesData.filter(service => {
      const matchesCategory = activeCategory === 'ALL' || service.category === activeCategory;
      const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            service.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

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
          <h1 className="services-main-heading">Our Services</h1>
          <div className="gold-divider"></div>
          <p className="services-subheading">
            Traditional Vedic Services for Every Sacred Occasion
          </p>
        </div>
      </div>

      <div className="services-page-content container section-padding">
        
        {/* Filters and Search */}
        <div className="services-controls">
          <div className="category-filters">
            {categories.map(cat => (
              <button
                key={cat}
                className={`category-chip ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="services-search-container">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              className="services-search-input"
              placeholder="Search a service..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Services Grid */}
        <div className="services-full-grid">
          {filteredServices.length > 0 ? (
            filteredServices.map((service, index) => (
              <div 
                key={service.id} 
                className="premium-service-card"
                style={{ animationDelay: `${(index % 10) * 0.1}s`, cursor: 'pointer' }}
                onClick={() => setContentModalService(service)}
              >
                <div className="service-content">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-desc">{service.shortDesc}</p>
                  
                  <div className="service-card-buttons">
                    <button 
                      className="view-details-btn"
                      style={{ background: 'none', border: 'none', padding: '0', cursor: 'pointer' }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setContentModalService(service);
                      }}
                    >
                      VIEW DETAILS &rarr;
                    </button>
                    <button 
                      className="enquire-now-btn" 
                      onClick={(e) => {
                        e.stopPropagation();
                        setModalService(service);
                      }}
                    >
                      ENQUIRE NOW
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="no-services-found">
              <p>No services found matching your criteria.</p>
              <button className="btn btn-primary" onClick={() => {setSearchQuery(''); setActiveCategory('ALL');}}>Reset Filters</button>
            </div>
          )}
        </div>
      </div>

      <CTASection />

      <ServiceEnquiryPopup 
        isOpen={!!modalService} 
        onClose={() => setModalService(null)} 
        service={modalService} 
      />

      <ServiceContentModal 
        isOpen={!!contentModalService} 
        onClose={() => setContentModalService(null)} 
        service={contentModalService} 
      />
    </div>
  );
}
