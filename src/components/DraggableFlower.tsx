import React from 'react';
import { motion } from 'framer-motion';
import type { Flower } from '../data/flowers';

interface DraggableFlowerProps {
  flower: Flower;
  x: number;
  y: number;
  onDragEnd: (id: string, newX: number, newY: number) => void;
  instanceId: string;
}

const DraggableFlower: React.FC<DraggableFlowerProps> = ({ flower, x, y, onDragEnd, instanceId }) => {
  return (
    <motion.div
      drag
      dragMomentum={false}
      onDragEnd={(_, info) => {
        onDragEnd(instanceId, x + info.offset.x, y + info.offset.y);
      }}
      initial={{ x, y, scale: 0 }}
      animate={{ x, y, scale: 1 }}
      exit={{ scale: 0 }}
      style={{
        position: 'absolute',
        width: flower.size,
        height: flower.size,
        cursor: 'grab',
        zIndex: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      whileHover={{ scale: 1.05 }}
      whileDrag={{ scale: 1.1, cursor: 'grabbing', zIndex: 50 }}
    >
      <img 
        src={flower.image} 
        alt={flower.name}
        style={{ width: '100%', height: '100%', objectFit: 'contain', pointerEvents: 'none' }}
      />
    </motion.div>
  );
};

export default DraggableFlower;
