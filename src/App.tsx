import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Catalogue from './components/Catalogue';
import BouquetBuilder from './components/BouquetBuilder';
import './index.css';

type View = 'home' | 'catalogue' | 'builder';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    })
  };

  return (
    <>
      <Navbar currentView={currentView} onNavigate={setCurrentView} />
      
      <main style={{ paddingTop: '8rem' }}>
        {currentView === 'home' && (
          <div className="container" style={{ paddingBottom: '4rem' }}>
            <div style={{ maxWidth: '900px', marginBottom: '4rem', marginTop: '2rem' }}>
              <motion.p 
                custom={1} initial="hidden" animate="visible" variants={textVariants}
                style={{ 
                  fontSize: '0.875rem', 
                  letterSpacing: '2px', 
                  textTransform: 'uppercase', 
                  color: 'var(--accent-green)',
                  marginBottom: '1.5rem' 
                }}
              >
                Ashgrove, Since 2009
              </motion.p>
              <motion.h1 
                custom={2} initial="hidden" animate="visible" variants={textVariants}
                className="serif" style={{ 
                  fontSize: 'clamp(3rem, 8vw, 5.5rem)', 
                  lineHeight: '1.05', 
                  marginBottom: '2rem',
                  letterSpacing: '-2px'
                }}
              >
                Flowers cut this morning, arranged however you like them.
              </motion.h1>
              <motion.p 
                custom={3} initial="hidden" animate="visible" variants={textVariants}
                style={{ 
                  fontSize: '1.25rem', 
                  lineHeight: '1.6', 
                  color: 'var(--text-secondary)', 
                  maxWidth: '600px', 
                  marginBottom: '3rem' 
                }}
              >
                Everything on the site is what's actually standing in buckets at the shop today. Pick your stems, drop them in a vase, and see the thing before you order it.
              </motion.p>
              <motion.div custom={4} initial="hidden" animate="visible" variants={textVariants}>
                <button 
                  className="btn-primary" 
                  onClick={() => setCurrentView('builder')}
                >
                  Build an arrangement
                </button>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              style={{ 
                width: '100%', 
                height: '70vh', 
                backgroundColor: 'var(--bg-card)', 
                borderRadius: '24px',
                overflow: 'hidden',
                position: 'relative'
              }}
            >
              <img 
                src="/assets/hero-bg.jpg" 
                alt="Fresh flowers" 
                style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '';
                  (e.target as HTMLImageElement).style.background = 'linear-gradient(to bottom right, #241F21, #121011)';
                }}
              />
            </motion.div>
          </div>
        )}

        {currentView === 'catalogue' && <Catalogue />}
        
        {currentView === 'builder' && <BouquetBuilder />}
      </main>
    </>
  );
};

export default App;
