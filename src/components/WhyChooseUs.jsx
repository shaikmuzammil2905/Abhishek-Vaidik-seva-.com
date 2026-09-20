import { useState, useEffect } from 'react';
import { Sparkles, BookOpen, Shield, MessageCircleHeart, HandshakeIcon, Award, X, PhoneCall, MessageCircle, CheckCircle2 } from 'lucide-react';
import './WhyChooseUs.css';

export default function WhyChooseUs() {
  const [activeFeature, setActiveFeature] = useState(null);

  const features = [
    {
      id: 'experienced-purohit',
      icon: <Award size={32} />,
      title: 'Experienced Purohit',
      shortDesc: 'Over 16 years of dedicated Vedic service ensuring every ceremony is performed with precision.',
      fullDesc: 'With over 16 years of continuous, devoted practice in Vedic rituals, Hari Anjaneya Abhishek Sharma (B.A.) brings deep scriptural mastery and ritual poise to every occasion.',
      highlights: [
        'Formally graduated from Sri Venkateshwara Vedic University (TTD)',
        'Experienced in Grihastha, Shanti, Homam, and Vivaha Prayogas',
        'Impeccable Sanskrit chanting and exact Vedic pronunciation',
        'Guided over 2,500+ successful Vedic ceremonies'
      ],
      quote: '“Acharya Devo Bhava — True Purohitham brings divine grace directly to the Yajamana.”'
    },
    {
      id: 'traditional-procedure',
      icon: <BookOpen size={32} />,
      title: 'Traditional Vedic Procedure',
      shortDesc: 'Authentic rituals following proper Vedic scriptures and traditional methods.',
      fullDesc: 'Every ritual follows the strict Agamic and Smartha sutras. We never take shortcuts; each Sankalpam, Puja, Homa Agni installation, and Ahuti follows authentic Shastras.',
      highlights: [
        'Pure samagri and sacred herbal dravyas used in every homam',
        'Strict adherence to Grihya Sutras and family traditions',
        'Step-by-step guidance for the Yajamana and family members',
        'Complete Sanskrit Mantras chanted with authentic swaras'
      ],
      quote: '“Yatho Veda Thatho Dharma — Adherence to the Vedas ensures supreme auspiciousness.”'
    },
    {
      id: 'personalized-guidance',
      icon: <Sparkles size={32} />,
      title: 'Personalized Guidance',
      shortDesc: 'Tailored spiritual guidance respecting your family\'s unique customs and traditions.',
      fullDesc: 'Every family belongs to a unique Gotra, Sutra, and regional tradition. We adapt the ceremony to honor your family\'s ancestral customs while preserving Vedic purity.',
      highlights: [
        'Detailed pre-ritual Muhurtham calculation and consultation',
        'Customized Puja Samagri checklist shared in advance',
        'Clear instructions on fasting, dress codes, and vratha niyamas',
        'Family participation encouraged at every sacred step'
      ],
      quote: '“Kula Dharma Rakshana — Honoring your family lineage and tradition.”'
    },
    {
      id: 'transparent-communication',
      icon: <MessageCircleHeart size={32} />,
      title: 'Transparent Communication',
      shortDesc: 'Clear and open communication about every aspect of the ceremony and preparations.',
      fullDesc: 'We believe clarity brings peace of mind. From the auspicious timing to the materials required and the ritual breakdown, everything is explained beforehand.',
      highlights: [
        'Clear schedule with start and culmination times',
        'No hidden requirements or surprise obligations',
        'Available over Phone & WhatsApp for any pre-ritual queries',
        'Explanation of the meaning behind key mantras during the seva'
      ],
      quote: '“Satyam Vadha — Transparent, honest and peaceful spiritual guidance.”'
    },
    {
      id: 'respectful-service',
      icon: <HandshakeIcon size={32} />,
      title: 'Respectful Service',
      shortDesc: 'Every seva is performed with utmost devotion, respect, and care for the devotee\'s sentiments.',
      fullDesc: 'We treat your home as a sacred temple sanctum. Our team conducts the rituals with humility, cleanliness, and sincere devotion for the welfare of your household.',
      highlights: [
        'Punctual arrival and meticulous ritual altar setup',
        'Gentle and patient conduct with elders and children',
        'Complete cleanliness (Madi/Shuchi) maintained throughout',
        'Ashirvachanam and sacred Prasadam distribution with blessings'
      ],
      quote: '“Sarve Janah Sukhino Bhavantu — Sincere devotion for your entire family\'s well-being.”'
    },
    {
      id: '16-years-experience',
      icon: <Shield size={32} />,
      title: '16 Years of Experience',
      shortDesc: 'A proven track record of serving families with authentic Vedic ceremonies across various occasions.',
      fullDesc: 'Serving the community for 16 golden years, building trusted relationships with hundreds of families across generations for their most memorable auspicious milestones.',
      highlights: [
        '16+ continuous years in Purohitha Seva',
        'Recognized for authenticity, punctuality, and serenity',
        'Trusted for Gruhapravesham, Vivaham, Upanayanam & Chandi Homas',
        'Lifetime spiritual guidance and family Purohit relationship'
      ],
      quote: '“16 Years of Trust, Devotion and Sacred Vedic Tradition.”'
    },
  ];

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveFeature(null);
    };
    if (activeFeature) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeFeature]);

  return (
    <section id="why-choose-us" className="section-padding why-section">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title animate-fade-up">Why Choose Vaidika Seva?</h2>
          <p className="section-subtitle animate-fade-up animate-stagger-1">
            Rooted in Tradition • Devoted to Authenticity • Trusted for 16 Years
          </p>
        </div>

        <div className="why-grid">
          {features.map((f, i) => (
            <div 
              key={f.id} 
              className={`why-card animate-fade-up animate-stagger-${(i % 4) + 1}`}
              onClick={() => setActiveFeature(f)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setActiveFeature(f); }}
            >
              <div className="why-icon">{f.icon}</div>
              <h4>{f.title}</h4>
              <p>{f.shortDesc}</p>
              <span className="why-card-cta">Click for Details →</span>
            </div>
          ))}
        </div>
      </div>

      {/* Feature Detail Modal Popup */}
      {activeFeature && (
        <div className="why-modal-overlay" onClick={() => setActiveFeature(null)}>
          <div 
            className="why-modal-content animate-fade-up" 
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="why-modal-close" 
              onClick={() => setActiveFeature(null)}
              aria-label="Close dialog"
            >
              <X size={24} />
            </button>

            <div className="why-modal-header">
              <div className="why-modal-icon">{activeFeature.icon}</div>
              <div>
                <span className="why-modal-tag">Vaidika Seva Assurance</span>
                <h3 className="why-modal-title">{activeFeature.title}</h3>
              </div>
            </div>

            <div className="why-modal-body">
              <p className="why-modal-desc">{activeFeature.fullDesc}</p>

              <div className="why-modal-quote">
                <p>{activeFeature.quote}</p>
              </div>

              <div className="why-modal-highlights">
                <h4>What You Can Expect:</h4>
                <ul>
                  {activeFeature.highlights.map((item, idx) => (
                    <li key={idx}>
                      <CheckCircle2 size={18} className="modal-check-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="why-modal-footer">
              <a 
                href="#contact" 
                className="btn btn-primary"
                onClick={() => setActiveFeature(null)}
              >
                Book Purohitham
              </a>
              <a 
                href={`https://wa.me/919177384384?text=Namaste%20Acharyaji,%20I%20would%20like%20to%20know%20more%20about%20${encodeURIComponent(activeFeature.title)}%20for%20our%20Vedic%20ceremony.`}
                className="btn wa-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={18} /> WhatsApp Inquiry
              </a>
              <a 
                href="tel:+919177384384" 
                className="btn btn-secondary"
              >
                <PhoneCall size={18} /> Call Now
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
