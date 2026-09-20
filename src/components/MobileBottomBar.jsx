import { PhoneCall, MessageCircle, CalendarCheck, HelpCircle } from 'lucide-react';
import './MobileBottomBar.css';

export default function MobileBottomBar() {
  return (
    <div className="mobile-bottom-bar">
      <a href="tel:+919177384384" className="mbb-item">
        <PhoneCall size={20} />
        <span>CALL</span>
      </a>
      <a 
        href="https://wa.me/919177384384?text=Namaste,%20I%20would%20like%20to%20enquire%20about%20Vaidika%20Seva." 
        className="mbb-item"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MessageCircle size={20} />
        <span>WHATSAPP</span>
      </a>
      <a href="#services" className="mbb-item">
        <HelpCircle size={20} />
        <span>ENQUIRE</span>
      </a>
      <a href="#contact" className="mbb-item primary">
        <CalendarCheck size={20} />
        <span>BOOK</span>
      </a>
    </div>
  );
}
