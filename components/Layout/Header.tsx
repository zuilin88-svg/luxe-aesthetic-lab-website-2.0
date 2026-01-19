import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Facebook, Video } from 'lucide-react';
import { SOCIAL_LINKS } from '../../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'FAQ', path: '/faq' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isOpen
          ? 'bg-stone-50 py-6'
          : scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm py-4'
            : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="z-50">
            <h1 className={`font-serif text-2xl md:text-3xl tracking-wide ${scrolled || isOpen ? 'text-stone-900' : 'text-stone-800'}`}>
              Luxe Aesthetic Lab
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className="text-stone-600 hover:text-gold-500 font-sans text-sm tracking-widest uppercase transition-colors"
              >
                {link.name}
              </Link>
            ))}
            
            <div className="flex items-center space-x-3 text-stone-600 border-l border-stone-300 pl-6">
                <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-gold-500 transition-colors"><Instagram size={18} /></a>
                <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noopener noreferrer" className="hover:text-gold-500 transition-colors"><Video size={18} /></a>
                <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-gold-500 transition-colors"><Facebook size={18} /></a>
            </div>

            <a 
              href={SOCIAL_LINKS.vagaro} 
              target="_blank" 
              rel="noopener noreferrer"
              className="border border-stone-800 px-6 py-2 text-sm uppercase tracking-widest hover:bg-gold-500 hover:border-gold-500 hover:text-white transition-all duration-300"
            >
              Book A Visit
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden z-50 text-stone-800"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div 
        className={`fixed inset-0 bg-stone-50 z-40 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col justify-center items-center ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col space-y-8 text-center">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className="text-2xl font-serif text-stone-800 hover:text-gold-500 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          
          <div className="flex space-x-6 pt-4 justify-center text-stone-800">
             <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-gold-500 transition-colors"><Instagram size={24} /></a>
             <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noopener noreferrer" className="hover:text-gold-500 transition-colors"><Video size={24} /></a>
             <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-gold-500 transition-colors"><Facebook size={24} /></a>
          </div>

          <a 
            href={SOCIAL_LINKS.vagaro}
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-stone-800 text-white px-8 py-3 text-lg font-serif mt-4 inline-block"
          >
            Book Now
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;