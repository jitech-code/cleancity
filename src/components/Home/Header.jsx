import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrollY > 50 ? 'bg-green-50/80 backdrop-blur-md shadow-md' : 'bg-green-50/80 shadow-lg'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-500 text-transparent bg-clip-text">
              CleanCity
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-green-600 transition-colors">Accueil</Link>
            <Link to="/services" className="text-gray-700 hover:text-green-600 transition-colors">Services</Link>
            <Link to="/abonnement" className="text-gray-700 hover:text-green-600 transition-colors">Abonnement</Link>
            <Link to="/about" className="text-gray-700 hover:text-green-600 transition-colors">À propos</Link>
            <Link to="/contact" className="text-gray-700 hover:text-green-600 transition-colors">Contact</Link>
            <Link to="/login">
              <button className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-2 rounded-full hover:shadow-lg hover:scale-105 transition-all">
                Connexion
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-green-600 focus:outline-none"
              aria-label="Menu principal"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${
        isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-4 pt-2 pb-4 space-y-4 bg-white/90 backdrop-blur-md shadow-lg">
          <Link to="/" className="block text-gray-700 hover:text-green-600 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Accueil</Link>
          <Link to="/services" className="block text-gray-700 hover:text-green-600 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Services</Link>
          <Link to="/abonnement" className="block text-gray-700 hover:text-green-600 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Abonnement</Link>
          <Link to="/about" className="block text-gray-700 hover:text-green-600 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>À propos</Link>
          <Link to="/contact" className="block text-gray-700 hover:text-green-600 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          <Link to="/login" className="block" onClick={() => setIsMenuOpen(false)}>
            <button className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-2 rounded-full hover:shadow-lg hover:scale-105 transition-all">
              Connexion
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;