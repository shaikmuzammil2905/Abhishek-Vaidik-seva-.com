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

  // Handle smooth section scrolling for hash links
  const handleNavClick = (sectionId) => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);

    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/', { replace: false });
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    }
  };

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
            <div className="logo-icon">ॐ</div>
            <div className="logo-text">
              <span className="brand-name">ABHISHEK</span>
              <span className="brand-sub">VAIDIKA SEVA</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <ul className="nav-list">
              <li>
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li>
                <button onClick={() => handleNavClick('about')} className="nav-link nav-btn-link">
                  About
                </button>
              </li>

              {/* Desktop Services Dropdown */}
              <li 
                className="nav-dropdown-item"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <button 
                  onClick={() => handleNavClick('services')} 
                  className="nav-link nav-btn-link dropdown-toggle"
                >
                  <span>Services</span>
                  <ChevronDown size={15} />
                </button>

                {servicesDropdownOpen && (
                  <div className="desktop-dropdown-menu">
                    {servicesData.map((s) => (
                      <button
                        key={s.id}
                        className="desktop-dropdown-link"
                        onClick={() => handleServiceClick(s.id)}
                      >
                        <ChevronRight size={14} className="dropdown-item-icon" />
                        <span>{s.title}</span>
                      </button>
                    ))}
                  </div>
                )}
              </li>

              <li>
                <button onClick={() => handleNavClick('pooja')} className="nav-link nav-btn-link">
                  Pooja &amp; Rituals
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('why-choose-us')} className="nav-link nav-btn-link">
                  Why Choose Us
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('gallery')} className="nav-link nav-btn-link">
                  Gallery
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('contact')} className="nav-link nav-btn-link">
                  Contact
                </button>
              </li>
            </ul>
          </nav>

          <div className="header-actions desktop-actions">
            <a href="tel:+919177384384" className="btn btn-primary">
              <PhoneCall size={18} />
              Book Purohitham
            </a>
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
            <li>
              <button onClick={() => handleNavClick('')} className="mobile-nav-link">
                Home
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('about')} className="mobile-nav-link">
                About
              </button>
            </li>

            {/* Mobile Services Submenu Accordion */}
            <li className="mobile-dropdown-group">
              <div className="mobile-dropdown-header">
                <button 
                  onClick={() => handleNavClick('services')} 
                  className="mobile-nav-link text-left"
                >
                  Services
                </button>
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
                {servicesData.map((s) => (
                  <button
                    key={s.id}
                    className="mobile-submenu-item"
                    onClick={() => handleServiceClick(s.id)}
                  >
                    <ChevronRight size={15} />
                    <span>{s.title}</span>
                  </button>
                ))}
              </div>
            </li>

            <li>
              <button onClick={() => handleNavClick('pooja')} className="mobile-nav-link">
                Pooja &amp; Rituals
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('why-choose-us')} className="mobile-nav-link">
                Why Choose Us
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('gallery')} className="mobile-nav-link">
                Gallery
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('contact')} className="mobile-nav-link">
                Contact
              </button>
            </li>
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
