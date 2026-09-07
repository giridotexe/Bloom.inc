import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from './components/Navbar';
import Catalogue from './components/Catalogue';
import BouquetBuilder from './components/BouquetBuilder';
import './index.css';

type View = 'home' | 'catalogue' | 'builder';

const App: React.FC = () => {
  const { scrollY } = useScroll();
  const videoOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const videoScale = useTransform(scrollY, [0, 500], [1, 0.9]);

  const [activeSection, setActiveSection] = useState<View>('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const catalogueEl = document.getElementById('catalogue');
      const builderEl = document.getElementById('builder');

      // Add small offset for better triggering
      if (builderEl && scrollPos >= builderEl.offsetTop - 300) {
        setActiveSection('builder');
      } else if (catalogueEl && scrollPos >= catalogueEl.offsetTop - 300) {
        setActiveSection('catalogue');
      } else {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (view: View) => {
    const el = document.getElementById(view);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.15, duration: 0.8, ease: "easeOut" }
    })
  };

  return (
    <>
      <Navbar currentView={activeSection} onNavigate={handleNavigate} />

      <main style={{ position: 'relative' }}>
        <section id="home">
          <div
            style={{
              position: 'relative',
              minHeight: '100vh',
              display: 'flex',
              alignItems: 'center',
              paddingTop: '8rem',
              overflow: 'hidden'
            }}
          >
            <motion.div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                opacity: videoOpacity,
                scale: videoScale
              }}
            >
              <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(250, 250, 247, 0.6)', zIndex: 1, backdropFilter: 'blur(3px)' }} />
              <video
                src="/assets/268528_medium.mp4"
                autoPlay
                loop
                muted
                playsInline
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </motion.div>

            <div className="container" style={{ position: 'relative', zIndex: 2, margin: '0 5%' }}>
              <div style={{ maxWidth: '800px', padding: '2rem 0' }}>
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
                    onClick={() => handleNavigate('builder')}
                  >
                    Build an arrangement
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <section id="catalogue" style={{ minHeight: '100vh', paddingTop: '4rem' }}>
          <Catalogue />
        </section>

        <section id="builder" style={{ minHeight: '100vh', paddingTop: '4rem' }}>
          <BouquetBuilder />
        </section>
      </main>
    </>
  );
};

export default App;
