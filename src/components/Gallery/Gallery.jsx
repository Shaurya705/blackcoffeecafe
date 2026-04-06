import React from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageCircle } from 'lucide-react';

const InstagramIcon = () => <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;
import './Gallery.css';

const images = [
  { src: '/cafe_interior.png', alt: 'Cafe Interior', height: 'large' },
  { src: '/hero_coffee.png', alt: 'Coffee Art', height: 'medium' },
  { src: '/iced_latte.png', alt: 'Iced Latte', height: 'tall' },
  { src: '/cafe_interior.png', alt: 'Working at BCC', height: 'medium' },
  { src: '/hero_coffee.png', alt: 'Friends Chilling', height: 'large' },
  { src: '/iced_latte.png', alt: 'Food styling', height: 'tall' },
];

const Gallery = () => {
  return (
    <section id="vibe" className="section-padding gallery-section">
      <div className="container">
        <div className="gallery-header">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            The BCC <span className="glow-text">Vibe</span>
          </motion.h2>
          <motion.div 
            className="insta-handle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <a href="#" className="btn-outline">
              <InstagramIcon />
              @theblackcoffeecafe
            </a>
          </motion.div>
        </div>

        <div className="masonry-grid">
          {images.map((img, index) => (
            <motion.div 
              key={index} 
              className={`masonry-item ${img.height}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <img src={img.src} alt={img.alt} />
              <div className="insta-overlay">
                <div className="insta-actions">
                  <span><Heart size={24} fill="white" /> 1.2k</span>
                  <span><MessageCircle size={24} fill="white" /> 84</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
