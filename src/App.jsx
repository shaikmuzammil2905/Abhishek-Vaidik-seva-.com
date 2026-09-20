import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MobileBottomBar from './components/MobileBottomBar';
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';
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
            <Route path="/service/:serviceId" element={<ServiceDetail />} />
          </Routes>
        </main>
        <Footer />
        <MobileBottomBar />
      </div>
    </Router>
  );
}

export default App;
