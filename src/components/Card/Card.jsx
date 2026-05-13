/**
 * Card Component - بطاقة عامة
 */

import { motion } from 'framer-motion';
import './Card.css';

const Card = ({
  children,
  className = '',
  hoverable = true,
  ...props
}) => {
  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    hover: { y: -5 },
  };

  return (
    <motion.div
      className={`card ${className}`}
      initial="initial"
      animate="animate"
      whileHover={hoverable ? 'hover' : undefined}
      variants={cardVariants}
      transition={{ duration: 0.3 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;