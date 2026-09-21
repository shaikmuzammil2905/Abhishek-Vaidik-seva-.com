import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, PhoneCall, ChevronDown, ChevronRight, Sparkles } from 'lucide-react';
import { servicesData } from '../data/services';
import './Header.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu & reset dropdown on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services', isDropdown: true },
    { name: 'Pooja & Rituals', path: '/pooja-rituals' },
    { name: 'Why Choose Us', path: '/why-choose-us' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleServiceClick = (serviceId) => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    navigate(`/service/${serviceId}`);
  };

  return (
    <>
      <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
        <div className="container header-container">
          <Link to="/" className="logo">
            <img src="/assets/logo.png" alt="Abhishek Vaidika Seva" className="header-logo-image" style={{ height: '50px', width: 'auto', marginRight: '10px' }} />
            <div className="logo-text">
              <span className="brand-grand-title">VAIDIKA SEVA</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <ul className="nav-list">
              {navItems.map((item) => {
                if (item.isDropdown) {
                  return (
                    <li 
                      key={item.name}
                      className="nav-dropdown-item"
                      onMouseEnter={() => setServicesDropdownOpen(true)}
                      onMouseLeave={() => setServicesDropdownOpen(false)}
                    >
                      <Link 
                        to={item.path} 
                        className={`nav-link dropdown-toggle ${location.pathname === item.path ? 'active' : ''}`}
                      >
                        <span>{item.name}</span>
                        <ChevronDown size={15} />
                      </Link>

                      {servicesDropdownOpen && (
                        <div className="desktop-dropdown-menu">
                          {['Homams', 'Poojas', 'Pitru Poojas', 'Specialist Vedic Services', 'Abhishekams & Special Archanas'].map((cat) => (
                            <Link
                              key={cat}
                              to={`/services?category=${encodeURIComponent(cat)}`}
                              className="desktop-dropdown-link"
                              onClick={() => setServicesDropdownOpen(false)}
                            >
                              <ChevronRight size={14} className="dropdown-item-icon" />
                              <span>{cat}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </li>
                  );
                }

                return (
                  <li key={item.name}>
                    <Link 
                      to={item.path} 
                      className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="header-actions desktop-actions">
            <Link to="/contact" className="btn btn-primary">
              <PhoneCall size={18} />
              Book Purohitham
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button 
            className="mobile-menu-btn" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-content">
          <ul className="mobile-nav-list">
            {navItems.map((item) => {
              if (item.isDropdown) {
                return (
                  <li key={item.name} className="mobile-dropdown-group">
                    <div className="mobile-dropdown-header">
                      <Link 
                        to={item.path} 
                        className="mobile-nav-link text-left"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                      <button 
                        className="mobile-accordion-toggle"
                        onClick={(e) => {
                          e.stopPropagation();
                          setServicesDropdownOpen(!servicesDropdownOpen);
                        }}
                        aria-label="Toggle services list"
                      >
                        <ChevronDown size={22} className={`accordion-chevron ${servicesDropdownOpen ? 'rotated' : ''}`} />
                      </button>
                    </div>

                    {/* All 10 Services List */}
                    <div className={`mobile-submenu-list ${servicesDropdownOpen ? 'expanded' : ''}`}>
                      <div className="submenu-title">
                        <Sparkles size={14} /> All Vedic Services:
                      </div>
                      {['Homams', 'Poojas', 'Pitru Poojas', 'Specialist Vedic Services', 'Abhishekams & Special Archanas'].map((cat) => (
                        <Link
                          key={cat}
                          to={`/services?category=${encodeURIComponent(cat)}`}
                          className="mobile-submenu-item"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <ChevronRight size={15} />
                          <span>{cat}</span>
                        </Link>
                      ))}
                    </div>
                  </li>
                );
              }

              return (
                <li key={item.name}>
                  <Link 
                    to={item.path} 
                    className="mobile-nav-link"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mobile-nav-footer">
            <Link to="/contact" className="btn btn-primary w-full" onClick={() => setMobileMenuOpen(false)}>
              <PhoneCall size={18} />
              Book Purohitham
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
