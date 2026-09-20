import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, PhoneCall, MessageCircle, CheckCircle2 } from 'lucide-react';
import { servicesData } from '../data/services';
import ServiceModal from '../components/ServiceModal';
import './ServiceDetail.css';

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const service = servicesData.find(s => s.id === serviceId);

  if (!service) {
    return (
      <div className="service-detail-page not-found">
        <div className="container">
          <h2>Service Not Found</h2>
          <p>The requested service could not be found.</p>
          <Link to="/" className="btn btn-primary">Back to Home</Link>
        </div>
      </div>
    );
  }

  const waLink = `https://wa.me/919177384384?text=${encodeURIComponent(
    `Namaste, I would like to enquire about ${service.title}. Please share availability and details.`
  )}`;

  return (
    <div className="service-detail-page">
      {/* Breadcrumb */}
      <div className="breadcrumb-bar">
        <div className="container breadcrumb-container">
          <Link to="/">Home</Link>
          <ChevronRight size={14} />
          <Link to="/#services">Services</Link>
          <ChevronRight size={14} />
          <span className="breadcrumb-current">{service.title}</span>
        </div>
      </div>

      {/* Service Hero */}
      <div className="service-hero">
        <img src={service.image} alt={service.title} className="service-hero-img" />
        <div className="service-hero-overlay"></div>
        <div className="container service-hero-content">
          <h1>{service.title}</h1>
          <p>{service.shortDesc}</p>
          <button className="btn btn-primary btn-lg" onClick={() => setShowModal(true)}>
            Book This Seva
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="container service-body">
        <div className="service-main">
          {/* About */}
          <section className="service-section">
            <h2>About This Seva</h2>
            <p>{service.intro}</p>
          </section>

          {/* Significance */}
          <section className="service-section">
            <h2>Benefits &amp; Significance</h2>
            <p>{service.significance}</p>
          </section>

          {/* What's Included */}
          <section className="service-section">
            <h2>What Is Included</h2>
            <ul className="included-list">
              {service.included.map((item, i) => (
                <li key={i}>
                  <CheckCircle2 size={18} className="check-icon" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Preparation */}
          <section className="service-section">
            <h2>Preparation Guide</h2>
            <p>{service.preparation}</p>
          </section>

          {/* FAQ */}
          <section className="service-section">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-list">
              {service.faq.map((item, i) => (
                <div key={i} className={`faq-item ${openFaq === i ? 'open' : ''}`}>
                  <button className="faq-question" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                    <span>{item.q}</span>
                    <ChevronRight size={18} className="faq-arrow" />
                  </button>
                  {openFaq === i && (
                    <div className="faq-answer">
                      <p>{item.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar CTA */}
        <aside className="service-sidebar">
          <div className="sidebar-card">
            <h3>Need this Seva?</h3>
            <p>Contact us to schedule your ceremony with experienced Vedic guidance.</p>
            <div className="sidebar-actions">
              <a href="tel:+919177384384" className="btn btn-primary w-full">
                <PhoneCall size={18} /> Call 9177384384
              </a>
              <a href={waLink} className="btn wa-btn w-full" target="_blank" rel="noopener noreferrer">
                <MessageCircle size={18} /> WhatsApp
              </a>
              <button className="btn btn-secondary w-full" onClick={() => setShowModal(true)}>
                Book Purohitham
              </button>
            </div>
          </div>
        </aside>
      </div>

      {showModal && (
        <ServiceModal service={service} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
}
