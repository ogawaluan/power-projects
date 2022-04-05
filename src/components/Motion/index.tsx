import { motion } from 'framer-motion';
import { FunctionComponent } from 'react';

export const Motion = (Component: FunctionComponent) => {
  return (
    <motion.div
      initial={{ y: 500 }}
      animate={{
        y: 0,
        transition: { duration: 0.5, type: "spring" },
      }}
      exit={{
        y: -500,
        transition: { duration: 0.5, type: "spring", velocity: 2 },
      }}
    >
      <Component />
    </motion.div>
  );
};