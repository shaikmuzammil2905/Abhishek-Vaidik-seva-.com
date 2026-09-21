import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MobileBottomBar from './components/MobileBottomBar';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetail from './pages/ServiceDetail';
import PoojaPage from './pages/PoojaPage';
import WhyChooseUsPage from './pages/WhyChooseUsPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            
            {/* Services Architecture */}
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:category/:slug" element={<ServiceDetail />} />
            
            {/* Kept for backward compatibility if needed, though they could map to /services/poojas */}
            <Route path="/pooja-rituals" element={<PoojaPage />} />
            
            <Route path="/why-choose-us" element={<WhyChooseUsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <MobileBottomBar />
      </div>
    </Router>
  );
}

export default App;
