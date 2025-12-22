import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed-top"
      style={{
        scaleX,
        height: '4px',
        background: 'linear-gradient(90deg, var(--primary-accent), var(--secondary-accent))',
        transformOrigin: '0%',
        zIndex: 2000
      }}
    />
  );
};

export default ScrollProgress;
