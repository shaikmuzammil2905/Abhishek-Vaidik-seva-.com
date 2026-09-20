import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container footer-container">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <div className="footer-logo-icon">ॐ</div>
            <div className="footer-logo-text">
              <span className="footer-brand-grand">VAIDIKA SEVA</span>
            </div>
          </Link>
          <p className="footer-tagline">Vedokthamgaa Vishwasaneeyamga</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>
            <strong>Phone:</strong> <br />
            <a href="tel:+919177384384">9177384384</a>
          </p>
          <p>
            <strong>Email:</strong> <br />
            <a href="mailto:anjaneyaabhishek@gmail.com">anjaneyaabhishek@gmail.com</a>
          </p>
          <p>
            <strong>Address:</strong> <br />
            12-11-294/1, Warasiguda, <br />
            Secunderabad
          </p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© 2026 Vaidika Seva. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
