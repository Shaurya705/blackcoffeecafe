import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Coffee, Pizza, IceCreamBowl } from 'lucide-react';
import './Menu.css';

const menuData = {
  coffee: [
    { name: "BCC Signature Iced Latte", desc: "Our house blend shaken with ice and silky milk", price: "₹249", tag: "Bestseller" },
    { name: "Biscoff Coffee", desc: "Espresso meets creamy Lotus Biscoff spread", price: "₹299", tag: "Must Try" },
    { name: "Dark Mocha Frappe", desc: "Rich dark chocolate blended with our signature roast", price: "₹279" },
    { name: "Vietnamese Cold Brew", desc: "Overnight cold steep with condensed milk", price: "₹259" }
  ],
  food: [
    { name: "Peri Peri Chicken Pizza", desc: "Thin crust with spicy peri peri sauce and grilled chicken", price: "₹449", tag: "Chef's Special" },
    { name: "Creamy Alfredo Pasta", desc: "Penne in rich parmesan cream sauce with garlic bread", price: "₹349" },
    { name: "Mexican Rice Bowl", desc: "Spiced rice, beans, salsa, sour cream, and nachos", price: "₹329" },
    { name: "Grilled Pesto Sandwich", desc: "Fresh basil pesto, mozzarella, and tomatoes in sourdough", price: "₹289" }
  ],
  desserts: [
    { name: "Creamy Caramel Frappe", desc: "Caramel indulgence topped with whipped cream", price: "₹299", tag: "New" },
    { name: "Classic Tiramisu", desc: "Coffee-soaked ladyfingers layered with mascarpone", price: "₹349" },
    { name: "Warm Chocolate Brownie", desc: "With vanilla bean ice cream and fudge sauce", price: "₹249" },
    { name: "New York Cheesecake", desc: "Classic baked cheesecake with berry compote", price: "₹329" }
  ]
};

const Menu = () => {
  const [activeTab, setActiveTab] = useState('coffee');

  const tabs = [
    { id: 'coffee', label: 'Signature Coffees', icon: <Coffee size={20} /> },
    { id: 'food', label: 'Comfort Food', icon: <Pizza size={20} /> },
    { id: 'desserts', label: 'Dessert Drinks', icon: <IceCreamBowl size={20} /> }
  ];

  return (
    <section id="menu" className="section-padding menu-section">
      <div className="container">
        <div className="menu-header">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Curated <span className="glow-text">For You</span>
          </motion.h2>
          <p className="section-subtitle">Crafted with passion, served with perfection.</p>
        </div>

        <div className="menu-tabs">
          {tabs.map((tab) => (
            <button 
              key={tab.id}
              className={`menu-tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        <motion.div className="menu-grid glass-panel" layout>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="menu-items-container"
            >
              {menuData[activeTab].map((item, index) => (
                <div className="menu-item" key={index}>
                  <div className="menu-item-info">
                    <div className="menu-item-header">
                      <h3>{item.name}</h3>
                      {item.tag && <span className="menu-tag">{item.tag}</span>}
                    </div>
                    <p>{item.desc}</p>
                  </div>
                  <div className="menu-item-price">{item.price}</div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;
