import React from 'react';
import { motion } from 'framer-motion';
import { flowers } from '../data/flowers';
import './Catalogue.css';

const Catalogue: React.FC = () => {
  return (
    <div className="catalogue-container container">
      <div className="catalogue-header">
        <h1 className="catalogue-title serif">In bloom today</h1>
        <a href="#" className="see-all-link">See all stems &rarr;</a>
      </div>

      <div className="flower-grid">
        {flowers.map((flower, index) => (
          <motion.div 
            key={flower.id} 
            className="flower-card"
            initial={{ opacity: 0, y: 80, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ 
              delay: index * 0.1, 
              type: 'spring', 
              stiffness: 100, 
              damping: 15, 
              duration: 0.8 
            }}
          >
            <div className="flower-image-wrapper">
              <img src={flower.image} alt={flower.name} className="flower-image flower-image-side" />
              <img src={flower.topViewImage} alt={`${flower.name} top view`} className="flower-image flower-image-top" />
            </div>
            <div className="flower-info">
              <h3 className="serif">{flower.name}</h3>
              <p className="flower-price">${flower.price.toFixed(2)} per stem</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Catalogue;
