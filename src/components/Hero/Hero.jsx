/**
 * Hero Section Component - القسم الرئيسي (محدّث)
 */

import { motion } from 'framer-motion';
import Container from '../Container/Container';
import './Hero.css';
import {
  FaHeadphones,
  FaPills,
  FaClinicMedical,
  FaHeartbeat,
  FaBed,
  FaRegClock,
} from 'react-icons/fa';
import { GiLungs } from 'react-icons/gi';
import { floatVariant, pulseVariant } from '../../constants/animations';

const ICONS = [
  { id: 1, icon: FaHeadphones, label: 'خدمة صوتية' },
  { id: 2, icon: FaPills, label: 'حبة دواء' },
  { id: 3, icon: FaClinicMedical, label: 'شعار الصيدلية' },
  { id: 4, icon: FaHeartbeat, label: 'قلب ينبض' },
  { id: 5, icon: GiLungs, label: 'رئة' },
  { id: 6, icon: FaBed, label: 'سرير مرضى' },
  { id: 7, icon: FaRegClock, label: 'ساعة' },
];

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
              صيدلية <span className="highlight">شهد عبد المنعم إسماعيل</span>
            </h1>
            <p className="hero-subtitle">
              خدمات صيدلية متكاملة مع أحدث الأدوية والاستشارات الطبية المتخصصة
            </p>
          </motion.div>

          <motion.div
            className="hero-image"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="icons-grid">
              {ICONS.map((item, idx) => {
                const Icon = item.icon;
                // alternate variants for variety
                const variant = idx % 2 === 0 ? floatVariant : pulseVariant;
                return (
                  <motion.div
                    key={item.id}
                    className="icon-wrap"
                    variants={variant}
                    animate="animate"
                    whileHover={{ scale: 1.08 }}
                  >
                    <Icon className="hero-icon" />
                    <div className="icon-label">{item.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;