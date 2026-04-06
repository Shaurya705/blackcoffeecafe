import React from 'react';
import { motion } from 'framer-motion';
import { Laptop, Moon, Users } from 'lucide-react';
import './Experience.css';

const experiences = [
  {
    id: 1,
    icon: <Laptop size={32} />,
    title: "Work-Friendly Zone",
    description: "Fast WiFi, plug points at every table, and the perfect white noise to get things done.",
    image: "/cafe_interior.png" // Since I have this image
  },
  {
    id: 2,
    icon: <Moon size={32} />,
    title: "Late Night Hangout",
    description: "Open 24x7 in select outlets. Your go-to place when the city sleeps but you don't.",
    image: "/hero_coffee.png" 
  },
  {
    id: 3,
    icon: <Users size={32} />,
    title: "Chill with Friends",
    description: "Cozy corners, board games, and an ambience that turns coffee into conversations.",
    image: "/iced_latte.png"
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding experience-section">
      <div className="container">
        <div className="experience-header">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Your Daily <span className="glow-text">Escape</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="section-subtitle"
          >
            More than just a café. We are your second workspace and your midnight retreat.
          </motion.p>
        </div>

        <div className="experience-cards-container">
          <div className="experience-scroll-track">
            {experiences.map((exp, index) => (
              <motion.div 
                key={exp.id}
                className="experience-card glass-panel"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <div className="card-image-wrapper">
                  <img src={exp.image} alt={exp.title} className="card-image" />
                  <div className="card-icon-overlay">
                    {exp.icon}
                  </div>
                </div>
                <div className="card-content">
                  <h3>{exp.title}</h3>
                  <p>{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
