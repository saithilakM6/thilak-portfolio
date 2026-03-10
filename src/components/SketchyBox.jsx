import React from 'react';
import { motion } from 'framer-motion';

const SketchyBox = ({ children, className = '', noHover = false, ...props }) => {
  return (
    <motion.div 
      className={`sketchy-box ${noHover ? '' : 'hover:sketchy-animate'} ${className}`} 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};
export default SketchyBox;
