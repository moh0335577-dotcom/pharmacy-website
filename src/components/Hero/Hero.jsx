/**
 * Hero Section Component - القسم الرئيسي
 */

import { motion } from 'framer-motion';
import Button from '../Button/Button';
import Container from '../Container/Container';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <Container>
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title">
              صيدلية <span className="highlight">شهد</span> عبد المنعم إسماعيل
            </h1>
            <p className="hero-subtitle">
              خدمات صيدلية متكاملة مع أحدث الأدوية والاستشارات الطبية المتخصصة
            </p>
            <div className="hero-buttons">
              <Button variant="primary" size="lg">
                استكشف الخدمات
              </Button>
              <Button variant="outline" size="lg">
                تواصل معنا
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="hero-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="hero-illustration">💊</div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;