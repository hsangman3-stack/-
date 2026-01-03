
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: '한의원 소개', path: '/about' },
    { name: '진료 과목', path: '/treatments' },
    { name: '한약 이야기', path: '/herbs' },
    { name: '커뮤니티', path: '/community' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-warm-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-sage tracking-tight">강대근한의원</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-sage ${
                  isActive(link.path) ? 'text-sage border-b-2 border-sage' : 'text-stone-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:02-1234-5678" className="flex items-center space-x-1 text-sage font-bold">
              <Phone size={18} />
              <span>02.1234.5678</span>
            </a>
            <button className="bg-sage text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#5d6b2e] transition-all shadow-md">
              실시간 예약
            </button>
          </div>

          <button className="md:hidden text-stone-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-warm-beige p-4 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-lg font-medium px-4 py-2 rounded-lg ${
                  isActive(link.path) ? 'bg-warm-beige text-sage' : 'text-stone-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-warm-beige">
              <button className="bg-sage text-white w-full py-4 rounded-xl font-bold">
                네이버 예약하기
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
