'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface HotspotProps {
  x: number;
  y: number;
  width: number;
  height: number;
  label?: string;
  onClick: () => void;
  isActive: boolean;
}

export default function Hotspot({ x, y, width, height, label, onClick, isActive }: HotspotProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <motion.div
      className="absolute cursor-pointer group"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: `${width}%`,
        height: `${height}%`,
      }}
      onClick={onClick}
      onHoverStart={() => setShowTooltip(true)}
      onHoverEnd={() => setShowTooltip(false)}
      initial={{ opacity: 0 }}
      animate={{ opacity: isActive ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Spotlight effect */}
      <motion.div
        className="absolute inset-0 rounded-lg"
        animate={{
          boxShadow: [
            '0 0 0 0 rgba(239, 68, 68, 0)',
            '0 0 0 8px rgba(239, 68, 68, 0.4)',
            '0 0 0 0 rgba(239, 68, 68, 0)',
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Área clickeable invisible */}
      <div className="absolute inset-0 bg-red-500 opacity-0 hover:opacity-10 transition-opacity rounded-lg" />

      {/* Pulso central */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-4 h-4 bg-red-500 rounded-full -translate-x-1/2 -translate-y-1/2"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.8, 0.3, 0.8],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Tooltip */}
      {showTooltip && label && (
        <motion.div
          className="absolute -top-12 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap z-50"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
        >
          {label}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full border-4 border-transparent border-t-gray-900" />
        </motion.div>
      )}
    </motion.div>
  );
}