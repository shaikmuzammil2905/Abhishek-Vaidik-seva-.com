import { Sparkles, BookOpen, Shield, MessageCircleHeart, HandshakeIcon, Award } from 'lucide-react';
import './WhyChooseUs.css';

export default function WhyChooseUs() {
  const features = [
    { icon: <Award size={28} />, title: 'Experienced Purohit', desc: 'Over 16 years of dedicated Vedic service ensuring every ceremony is performed with precision.' },
    { icon: <BookOpen size={28} />, title: 'Traditional Vedic Procedure', desc: 'Authentic rituals following proper Vedic scriptures and traditional methods.' },
    { icon: <Sparkles size={28} />, title: 'Personalized Guidance', desc: 'Tailored spiritual guidance respecting your family\'s unique customs and traditions.' },
    { icon: <MessageCircleHeart size={28} />, title: 'Transparent Communication', desc: 'Clear and open communication about every aspect of the ceremony and preparations.' },
    { icon: <HandshakeIcon size={28} />, title: 'Respectful Service', desc: 'Every seva is performed with utmost devotion, respect, and care for the devotee\'s sentiments.' },
    { icon: <Shield size={28} />, title: '16 Years of Experience', desc: 'A proven track record of serving families with authentic Vedic ceremonies across various occasions.' },
  ];

  return (
    <section id="why-choose-us" className="section-padding why-section">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title animate-fade-up">Why Choose Vaidika Seva?</h2>
        </div>
        <div className="why-grid">
          {features.map((f, i) => (
            <div key={i} className={`why-card animate-fade-up animate-stagger-${(i % 4) + 1}`}>
              <div className="why-icon">{f.icon}</div>
              <h4>{f.title}</h4>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
