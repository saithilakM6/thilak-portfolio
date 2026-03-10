import React from 'react';
import { motion } from 'framer-motion';

const SketchyButton = ({ children, onClick, className = '', accent = false, style, ...props }) => {
  return (
    <motion.button 
      onClick={onClick}
      className={`sketchy-btn ${accent ? 'sketchy-btn-accent' : ''} ${className}`}
      style={style}
      whileHover={{ scale: 1.05, rotate: accent ? -2 : 2 }}
      whileTap={{ scale: 0.95, rotate: 0 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};
export default SketchyButton;
