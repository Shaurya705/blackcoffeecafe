import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import './SocialProof.css';

const testimonials = [
  {
    name: "Rahul S.",
    platform: "Zomato",
    text: "Perfect place to work and chill. The wifi is fast and the coffee keeps you going all day.",
    rating: 5
  },
  {
    name: "Priya M.",
    platform: "Swiggy",
    text: "Great ambience & coffee. The iced latte is probably the best I've had in the city.",
    rating: 5
  },
  {
    name: "Karan V.",
    platform: "Google",
    text: "My second office! The vibe is so good, especially on weekends with the soft lo-fi beats playing.",
    rating: 5
  },
  {
    name: "Neha K.",
    platform: "Zomato",
    text: "Love their dessert drinks. The Biscoff Coffee is a must-try. Always a great experience here.",
    rating: 4.5
  }
];

const SocialProof = () => {
  return (
    <section className="section-padding social-proof-section">
      <div className="container">
        <div className="social-proof-header text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Why People <span className="glow-text">Love BCC</span>
          </motion.h2>
          <p className="section-subtitle">Don't just take our word for it.</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((test, index) => (
            <motion.div 
              key={index} 
              className="testimonial-card glass-panel"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Quote className="quote-icon" size={32} />
              <div className="rating">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill={i < Math.floor(test.rating) ? "var(--accent-gold)" : "transparent"} stroke="var(--accent-gold)" />
                ))}
              </div>
              <p className="testimonial-text">"{test.text}"</p>
              <div className="testimonial-author">
                <h4>{test.name}</h4>
                <span>via {test.platform}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
