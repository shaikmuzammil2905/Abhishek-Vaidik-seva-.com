import { CheckCircle2 } from 'lucide-react';
import './AboutSection.css';

export default function AboutSection() {
  const commitments = [
    'Traditional Vedic procedure',
    'Experienced Purohit',
    'Personalized guidance',
    'Proper ritual preparation',
    'Devotional and respectful service',
    'Clear communication'
  ];

  return (
    <section id="about" className="section-padding about-section">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title animate-fade-up">About Vaidika Seva</h2>
        </div>

        <div className="about-grid">
          <div className="about-image-wrapper animate-fade-up">
            <div className="about-portrait-grand-card">
              <div className="about-portrait-inner">
                <img
                  src="/assets/images/img-copy-11.png"
                  alt="Hari Anjaneya Abhishek Sharma (B.A.) - 16 Years in Purohitham"
                  className="about-image-grand"
                />
                <div className="about-portrait-caption">
                  <span className="caption-badge">🔱 16 Years in Purohitham</span>
                </div>
              </div>
            </div>
          </div>

          <div className="about-content animate-fade-up animate-stagger-2">
            <div className="purohit-profile">
              <h3>Hari Anjaneya Abhishek Sharma (B.A.)</h3>
              <p className="qualification">Sri Venkateshwara Vedic University (TTD)</p>
              <p className="experience">16 Years in Purohitham</p>
            </div>

            <p className="about-description about-specialist-highlight">
              Specialists in performing Shodasakarmantham, Yagna Yaagaas, Marriages and Rituals.
            </p>

            <p className="about-description">
              Welcome to Vaidika Seva, where we bring the sanctity and authenticity of ancient Vedic rituals to your modern life. Rooted deeply in the traditional scriptures, we ensure every ceremony is performed with utmost devotion, precision, and adherence to Vedic procedures.
            </p>
            
            <p className="about-description">
              Our extensive experience of over 16 years guarantees that whether it is a joyous life event like a Vivaham, a significant milestone like a Gruhapravesham, or a regular homam, the spiritual essence is perfectly captured and conveyed, respecting your family's unique traditions.
            </p>

            <div className="commitment-box">
              <h4 className="commitment-title">Our Commitment</h4>
              <ul className="commitment-list">
                {commitments.map((item, index) => (
                  <li key={index}>
                    <CheckCircle2 size={18} className="check-icon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
