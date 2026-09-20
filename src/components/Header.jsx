import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, PhoneCall } from 'lucide-react';
import './Header.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/#about' },
    { name: 'Services', path: '/#services' },
    { name: 'Pooja & Rituals', path: '/#pooja' },
    { name: 'Why Choose Us', path: '/#why-choose-us' },
    { name: 'Gallery', path: '/#gallery' },
    { name: 'Contact', path: '/#contact' },
  ];

  return (
    <>
      <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
        <div className="container header-container">
          <Link to="/" className="logo">
            <div className="logo-icon">ॐ</div>
            <div className="logo-text">
              <span className="brand-name">ABHISHEK</span>
              <span className="brand-sub">VAIDIKA SEVA</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <ul className="nav-list">
              {navLinks.map((link) => (
                <li key={link.name}>
                  {link.path.startsWith('/#') && location.pathname === '/' ? (
                    <a href={link.path} className="nav-link">{link.name}</a>
                  ) : (
                    <Link to={link.path.startsWith('/#') ? '/' : link.path} className="nav-link">
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="header-actions desktop-actions">
            <a href="tel:+919177384384" className="btn btn-primary">
              <PhoneCall size={18} />
              Book Purohitham
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button 
            className="mobile-menu-btn" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-content">
          <ul className="mobile-nav-list">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  to={link.path.startsWith('/#') && location.pathname !== '/' ? '/' : link.path} 
                  className="mobile-nav-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mobile-nav-footer">
            <a href="tel:+919177384384" className="btn btn-primary w-full">
              <PhoneCall size={18} />
              Book Purohitham
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
