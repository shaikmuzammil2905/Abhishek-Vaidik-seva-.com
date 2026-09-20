import { Search, FileText, CalendarCheck, Flame } from 'lucide-react';
import './ProcessSteps.css';

export default function ProcessSteps() {
  const steps = [
    { icon: <Search size={28} />, title: 'Choose Your Seva', desc: 'Browse our services and select the ceremony you need.' },
    { icon: <FileText size={28} />, title: 'Share Your Requirement', desc: 'Tell us about your specific needs and preferences.' },
    { icon: <CalendarCheck size={28} />, title: 'Confirm Date & Time', desc: 'We select an auspicious date and confirm the schedule.' },
    { icon: <Flame size={28} />, title: 'Perform Your Seva', desc: 'We conduct the ceremony with full Vedic authenticity.' },
  ];

  return (
    <section className="section-padding process-section">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title animate-fade-up">Simple Booking Process</h2>
        </div>
        <div className="process-timeline">
          {steps.map((step, i) => (
            <div key={i} className={`process-step animate-fade-up animate-stagger-${i + 1}`}>
              <div className="step-number">{i + 1}</div>
              <div className="step-icon">{step.icon}</div>
              <h4>{step.title}</h4>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
