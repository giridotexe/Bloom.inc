import React, { useEffect, useRef } from 'react';
import { animate, stagger } from 'framer-motion';
import { flowers } from '../data/flowers';
import './Catalogue.css';

const Catalogue: React.FC = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (gridRef.current && gridRef.current.children.length > 0) {
      animate(gridRef.current.children, {
        y: [80, 0],
        opacity: [0, 1],
        scale: [0.9, 1]
      }, {
        delay: stagger(0.1, { startDelay: 0.2 }),
        type: 'spring',
        stiffness: 100,
        damping: 15,
        duration: 0.8
      });
    }
  }, []);

  return (
    <div className="catalogue-container container">
      <div className="catalogue-header">
        <h1 className="catalogue-title serif">In bloom today</h1>
        <a href="#" className="see-all-link">See all stems &rarr;</a>
      </div>

      <div className="flower-grid" ref={gridRef}>
        {flowers.map(flower => (
          <div key={flower.id} className="flower-card" style={{ opacity: 0 }}>
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
