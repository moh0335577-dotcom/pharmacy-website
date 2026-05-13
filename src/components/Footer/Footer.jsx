/**
 * Footer Component - تذييل الموقع
 */

import { motion } from 'framer-motion';
import {
  FaPhone,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaFacebook,
} from 'react-icons/fa';
import Container from '../Container/Container';
import { PHARMACY_INFO } from '../../constants/mockData';
import { openWhatsApp, makeCall, openFacebook } from '../../utils/helpers';
import './Footer.css';

const Footer = () => {
  const contactOptions = [
    {
      icon: FaPhone,
      label: 'اتصال',
      action: () => makeCall(PHARMACY_INFO.phone),
      color: '#20B2AA',
    },
    {
      icon: FaWhatsapp,
      label: 'واتس آب',
      action: () => openWhatsApp(PHARMACY_INFO.whatsapp),
      color: '#25D366',
    },
  ];

  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Container>
        <div className="footer-content">
          <div className="footer-section">
            <h3>صيدلية شهد</h3>
            <p>توفير أفضل الخدمات الصيدلية والاستشارات الطبية للمجتمع</p>
          </div>

          <div className="footer-section">
            <h4>معلومات التواصل</h4>
            <div className="contact-info">
              <p>
                <FaPhone /> {PHARMACY_INFO.phone}
              </p>
              <p>
                <FaMapMarkerAlt /> {PHARMACY_INFO.location}
              </p>
            </div>
            <div className="contact-buttons">
              {contactOptions.map((option, index) => {
                const Icon = option.icon;
                return (
                  <motion.button
                    key={index}
                    className="contact-btn"
                    style={{ color: option.color }}
                    onClick={option.action}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    title={option.label}
                  >
                    <Icon />
                    <span>{option.label}</span>
                  </motion.button>
                );
              })}
            </div>
          </div>

          <div className="footer-section">
            <h4>الروابط المهمة</h4>
            <ul>
              <li><a href="#home">الرئيسية</a></li>
              <li><a href="#services">الخدمات</a></li>
              <li><a href="#products">المنتجات</a></li>
              <li><a href="#about">من نحن</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>تابعنا</h4>
            <motion.button
              className="facebook-btn"
              onClick={() => openFacebook(PHARMACY_INFO.facebook)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaFacebook /> الفيسبوك
            </motion.button>
          </div>
        </div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p>&copy; 2024 صيدلية شهد عبد المنعم إسماعيل. جميع الحقوق محفوظة</p>
        </motion.div>
      </Container>
    </motion.footer>
  );
};

export default Footer;