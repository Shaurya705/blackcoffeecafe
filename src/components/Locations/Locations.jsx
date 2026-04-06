import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';
import './Locations.css';

const Locations = () => {
  return (
    <section id="locations" className="section-padding locations-section">
      <div className="container">
        <div className="locations-wrapper glass-panel">
          <div className="locations-content">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-title"
            >
              Your Next <span className="glow-text">Destination</span>
            </motion.h2>
            <p className="locations-desc">
              Find your perfect spot across the city. Whether you're in Gaur City 1, Sector 62, or Sector 37, the ultimate coffee experience awaits.
            </p>
            
            <div className="outlets-list">
              <div className="outlet-item">
                <MapPin className="text-gold" size={24} />
                <div>
                  <h4>Gaur City 1, Greater Noida</h4>
                  <p>Cozy cafe vibes with a great student crowd.</p>
                </div>
              </div>
              <div className="outlet-item">
                <MapPin className="text-gold" size={24} />
                <div>
                  <h4>Sector 62, Noida</h4>
                  <p>A spacious hub perfect for long work sessions.</p>
                </div>
              </div>
              <div className="outlet-item">
                <MapPin className="text-gold" size={24} />
                <div>
                  <h4>Sector 37, Noida</h4>
                  <p>Our late-night retreat for midnight cravings.</p>
                </div>
              </div>
            </div>

            <motion.a 
              href="#" 
              className="btn-primary mt-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Navigation size={20} />
              Visit Us Tonight
            </motion.a>
          </div>
          
          <div className="locations-map">
            {/* Using a dark map image placeholder for cinematic vibe */}
            <div className="map-placeholder">
              <div className="map-pin-pulse">
                <div className="pin"></div>
                <div className="pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;
