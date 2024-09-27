'use client';
import React from 'react';

import { motion, Transition, Variants } from 'framer-motion';

interface MotionDivProps {
  children: React.ReactNode;
  variants?: Variants;
  initial?: string;
  animate: string;
  exit?: string;
  transition?: Transition;
}

const MotionDiv = ({
  children,
  variants,
  initial,
  animate,
  exit,
  transition,
}: MotionDivProps) => {
  return (
    <motion.div
      initial={initial}
      animate={animate}
      exit={exit}
      variants={variants}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

export default MotionDiv;
