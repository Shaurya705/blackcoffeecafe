import React from 'react';
import { motion } from 'framer-motion';
import { Wifi, Clock, Coffee, BatteryCharging } from 'lucide-react';
import './WorkAndChill.css';

const WorkAndChill = () => {
  return (
    <section className="section-padding work-chill-section">
      <div className="container">
        <div className="work-chill-grid">
          <motion.div 
            className="work-chill-content"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">
              Your Second <span className="glow-text">Workspace</span>
            </h2>
            <p className="section-subtitle work-subtitle">
              Whether you're studying for finals, closing a deal, or coding the next big thing, we've got the perfect environment for your hustle.
            </p>
            
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon"><Wifi size={24} /></div>
                <div>
                  <h4>High-Speed WiFi</h4>
                  <p>Seamless connectivity for uninterrupted flow.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon"><Clock size={24} /></div>
                <div>
                  <h4>Open 24x7</h4>
                  <p>In select locations for those late-night grind sessions.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon"><BatteryCharging size={24} /></div>
                <div>
                  <h4>Plug Points</h4>
                  <p>Accessible charging stations at every work desk.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon"><Coffee size={24} /></div>
                <div>
                  <h4>Bottomless Refills</h4>
                  <p>Fuel your productivity with our special work combos.</p>
                </div>
              </div>
            </div>
            
            <a href="#locations" className="btn-primary mt-4">Find a Workspace Near You</a>
          </motion.div>
          
          <motion.div 
            className="work-chill-image"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="image-stack">
              <img src="/cafe_interior.png" alt="Working at Black Coffee Cafe" className="main-img" />
              <div className="floating-badge glass-panel">
                <Wifi size={20} className="text-gold" />
                <span>Free WiFi</span>
              </div>
              <div className="floating-badge badge-2 glass-panel">
                <Clock size={20} className="text-gold" />
                <span>Open 24/7</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WorkAndChill;
