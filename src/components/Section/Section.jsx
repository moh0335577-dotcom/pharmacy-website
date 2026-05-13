/**
 * Section Component - قسم مع عنوان
 */

import { motion } from 'framer-motion';
import Container from '../Container/Container';
import './Section.css';

const Section = ({
  title,
  subtitle,
  children,
  className = '',
  light = false,
  ...props
}) => {
  return (
    <motion.section
      className={`section ${light ? 'section-light' : ''} ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
      {...props}
    >
      <Container>
        {title && (
          <div className="section-header">
            <motion.h2
              className="section-title"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {title}
            </motion.h2>
            {subtitle && (
              <motion.p
                className="section-subtitle"
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        )}
        {children}
      </Container>
    </motion.section>
  );
};

export default Section;