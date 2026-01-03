
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Treatments from './pages/Treatments';
import HerbalMedicine from './pages/HerbalMedicine';
import Community from './pages/Community';
import AIConsultant from './components/AIConsultant';
import { ChevronUp } from 'lucide-react';

const App: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/treatments" element={<Treatments />} />
            <Route path="/herbs" element={<HerbalMedicine />} />
            <Route path="/community" element={<Community />} />
          </Routes>
        </main>
        <Footer />

        {/* Floating AI Consultant and Scroll Top */}
        <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
          <AIConsultant />
          {showScrollTop && (
            <button
              onClick={scrollToTop}
              className="p-3 bg-white text-sage rounded-full shadow-lg hover:bg-sage hover:text-white transition-all border border-sage/20"
            >
              <ChevronUp size={24} />
            </button>
          )}
        </div>
      </div>
    </Router>
  );
};

export default App;
