import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
        if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button') || e.target.closest('.glass-panel')) {
            setIsHovering(true);
        } else {
            setIsHovering(false);
        }
    }

    window.addEventListener("mousemove", mouseMove);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 10,
      height: 20,
      width: 20,
      backgroundColor: "var(--primary-accent)",
      mixBlendMode: "difference"
    },
    hover: {
        x: mousePosition.x - 30,
        y: mousePosition.y - 30,
        height: 60,
        width: 60,
        backgroundColor: "var(--secondary-accent)",
        mixBlendMode: "difference"
    }
  };

  // Hide on mobile/touch devices
  if (typeof navigator !== 'undefined' && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      return null;
  }

  return (
    <motion.div
      className="fixed-top rounded-circle pointer-events-none"
      variants={variants}
      animate={isHovering ? "hover" : "default"}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
      style={{ 
          zIndex: 9999, 
          pointerEvents: 'none',
          opacity: 0.8 
      }}
    />
  );
};

export default CustomCursor;
