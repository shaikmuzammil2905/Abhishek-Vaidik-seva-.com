import { Award, ShieldCheck, HeartHandshake, UserCheck } from 'lucide-react';
import './TrustStats.css';

export default function TrustStats() {
  const stats = [
    {
      icon: <Award size={32} className="text-gold" />,
      title: '16+',
      subtitle: 'Years in Purohitham',
    },
    {
      icon: <ShieldCheck size={32} className="text-gold" />,
      title: 'VEDIC',
      subtitle: 'Traditional Procedures',
    },
    {
      icon: <HeartHandshake size={32} className="text-gold" />,
      title: 'TRUSTED',
      subtitle: 'Personalized Seva',
    },
    {
      icon: <UserCheck size={32} className="text-gold" />,
      title: 'PROFESSIONAL',
      subtitle: 'Purohitha Services',
    },
  ];

  return (
    <section className="trust-stats">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`stat-card animate-fade-up animate-stagger-${index + 1}`}
            >
              <div className="stat-icon-wrapper">
                {stat.icon}
              </div>
              <h3 className="stat-title">{stat.title}</h3>
              <p className="stat-subtitle">{stat.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
