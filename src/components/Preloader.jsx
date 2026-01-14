import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Preloader = () => {
  const [lines, setLines] = useState([]);
  
  const textLines = [
    "> Initializing Core Systems...",
    "> Loading React Components...",
    "> Connecting to Satellite...",
    "> Optimizing UX/UI Modules...",
    "> Access Granted."
  ];

  useEffect(() => {
    let delay = 0;
    textLines.forEach((line, index) => {
      setTimeout(() => {
        setLines(prev => [...prev, line]);
      }, delay);
      // Vary the speed slightly for realism
      delay += Math.floor(Math.random() * 300) + 200; 
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
      className="position-fixed top-0 start-0 w-100 h-100 d-flex flex-column align-items-start justify-content-center bg-black p-5"
      style={{ zIndex: 9999, fontFamily: "'Courier New', Courier, monospace" }}
    >
      <div style={{ maxWidth: '600px' }}>
        {lines.map((line, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            className="text-success mb-2 fs-5 fw-bold"
            style={{ textShadow: '0 0 5px rgba(0, 255, 0, 0.5)' }}
          >
            {line}
          </motion.div>
        ))}
        <motion.div
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="text-success fs-5 fw-bold"
          style={{ display: 'inline-block', marginLeft: '5px' }}
        >
          _
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Preloader;