import React, { useState, useRef } from 'react';
import { flowers } from '../data/flowers';
import DraggableFlower from './DraggableFlower';
import './BouquetBuilder.css';

interface PlacedFlower {
  instanceId: string;
  flowerId: string;
  x: number;
  y: number;
}

const BouquetBuilder: React.FC = () => {
  const [placedFlowers, setPlacedFlowers] = useState<PlacedFlower[]>([]);
  const [baseType, setBaseType] = useState<'vase' | 'wrap'>('vase');
  const builderRef = useRef<HTMLDivElement>(null);

  const handleAddFlower = (flowerId: string) => {
    const newFlower: PlacedFlower = {
      instanceId: `flower-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      flowerId,
      x: 0, 
      y: 0,
    };
    setPlacedFlowers(prev => [...prev, newFlower]);
  };

  const handleDragEnd = (instanceId: string, newX: number, newY: number) => {
    setPlacedFlowers(prev => prev.map(f => 
      f.instanceId === instanceId ? { ...f, x: newX, y: newY } : f
    ));
  };

  const handleUndo = () => {
    setPlacedFlowers(prev => prev.slice(0, -1));
  };

  const handleClear = () => {
    setPlacedFlowers([]);
  };

  return (
    <div className="builder-container container">
      {/* Top Slider Selector */}
      <div className="flower-slider">
        {flowers.map(flower => (
          <div 
            key={flower.id} 
            className="slider-item"
            onClick={() => handleAddFlower(flower.id)}
          >
            <div className="slider-img-wrapper">
              <img src={flower.image} alt={flower.name} />
            </div>
            <div className="slider-item-name">{flower.name}</div>
          </div>
        ))}
      </div>

      {/* Builder Toolbar */}
      <div className="builder-toolbar">
        <div className="base-toggles">
          <button 
            className={`toggle-btn ${baseType === 'vase' ? 'active' : ''}`}
            onClick={() => setBaseType('vase')}
          >
            Vase
          </button>
          <button 
            className={`toggle-btn ${baseType === 'wrap' ? 'active' : ''}`}
            onClick={() => setBaseType('wrap')}
          >
            Bouquet wrap
          </button>
        </div>
        
        <div className="action-buttons">
          <button className="action-btn" onClick={handleUndo}>Undo</button>
          <button className="action-btn" onClick={handleClear}>Clear</button>
        </div>
      </div>

      {/* Main Canvas */}
      <div className="canvas-area" ref={builderRef}>
        <div className="base-layer">
          {baseType === 'vase' ? (
            <img src="/assets/vase.jpg" alt="Vase Base" />
          ) : (
            <img src="/assets/bouquet_base.jpg" alt="Wrap Base" />
          )}
        </div>
        
        <div className="flowers-layer">
          {placedFlowers.map(pf => {
            const flower = flowers.find(f => f.id === pf.flowerId);
            if (!flower) return null;
            return (
              <DraggableFlower
                key={pf.instanceId}
                instanceId={pf.instanceId}
                flower={flower}
                x={pf.x}
                y={pf.y}
                onDragEnd={handleDragEnd}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BouquetBuilder;
