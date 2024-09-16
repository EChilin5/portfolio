import { useRef, useState, MouseEvent, ReactNode } from 'react';
import { motion } from 'framer-motion';
import React from 'react'

interface FramerButtonProps {
  children: ReactNode;
  className?: string;
}

export function Framer({ children, className }: FramerButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);

    setPosition({ x: middleX * 0.3, y: middleY * 0.3 }); // Scale down the magnetic effect
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      className={className}
      style={{ display: 'inline-block', margin: '10px' }}
    >
      {children}
    </motion.div>
  );
}
