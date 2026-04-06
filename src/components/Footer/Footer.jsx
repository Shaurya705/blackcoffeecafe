import React from 'react';
import { Coffee } from 'lucide-react';

const InstagramIcon = () => <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;
const TwitterIcon = () => <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>;
const FacebookIcon = () => <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>;
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <a href="#" className="brand">
              <Coffee className="brand-icon" size={32} />
              <span className="brand-text">BCC</span>
            </a>
            <p className="brand-statement">
              "Made for coffee lovers, built for conversations."
            </p>
          </div>

          <div className="footer-links">
            <div className="link-group">
              <h4>Explore</h4>
              <ul>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#vibe">Vibe</a></li>
                <li><a href="#locations">Locations</a></li>
              </ul>
            </div>
            
            <div className="link-group">
              <h4>Contact</h4>
              <ul>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Franchise</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-social">
            <h4>Connect</h4>
            <div className="social-icons">
              <a href="#" aria-label="Instagram"><InstagramIcon /></a>
              <a href="#" aria-label="Twitter"><TwitterIcon /></a>
              <a href="#" aria-label="Facebook"><FacebookIcon /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} The Black Coffee Cafe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
