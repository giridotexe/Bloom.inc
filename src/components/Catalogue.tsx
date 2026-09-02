import React from 'react';
import { flowers } from '../data/flowers';
import './Catalogue.css';

const Catalogue: React.FC = () => {
  return (
    <div className="catalogue-container container">
      <div className="catalogue-header">
        <h1 className="catalogue-title serif">In bloom today</h1>
        <a href="#" className="see-all-link">See all stems</a>
      </div>

      <div className="flower-grid">
        {flowers.map(flower => (
          <div key={flower.id} className="flower-card">
            <div className="flower-image-wrapper">
              <img src={flower.image} alt={flower.name} className="flower-image" />
            </div>
            <div className="flower-info">
              <h3 className="serif">{flower.name}</h3>
              <p className="flower-price">${flower.price.toFixed(2)} per stem</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalogue;
