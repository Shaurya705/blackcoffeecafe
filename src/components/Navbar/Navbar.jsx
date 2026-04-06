import React, { useState, useEffect } from 'react';
import { Menu, X, Coffee } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled glass-panel' : ''}`}>
      <div className="container nav-container">
        <a href="#" className="brand">
          <Coffee className="brand-icon" />
          <span className="brand-text">BCC</span>
        </a>

        <ul className={`nav-links ${mobileMenuOpen ? 'active glass-panel' : ''}`}>
          <li><a href="#experience" onClick={() => setMobileMenuOpen(false)}>Experience</a></li>
          <li><a href="#menu" onClick={() => setMobileMenuOpen(false)}>Menu</a></li>
          <li><a href="#vibe" onClick={() => setMobileMenuOpen(false)}>Vibe</a></li>
          <li><a href="#locations" onClick={() => setMobileMenuOpen(false)}>Locations</a></li>
          <li className="mobile-only">
            <a href="#menu" className="btn-primary" onClick={() => setMobileMenuOpen(false)}>Order Now</a>
          </li>
        </ul>

        <div className="nav-actions">
          <a href="#menu" className="btn-primary desktop-only">Order Now</a>
          <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
