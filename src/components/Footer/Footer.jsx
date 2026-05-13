/**
 * Footer Component - تذييل الموقع
 */

import { motion } from 'framer-motion';
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';
import Container from '../Container/Container';
import './Footer.css';

const Footer = () => {
  const socialLinks = [
    { icon: FaFacebook, href: '#' },
    { icon: FaTwitter, href: '#' },
    { icon: FaInstagram, href: '#' },
    { icon: FaLinkedin, href: '#' },
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
                <FaPhone /> +966 50 123 4567
              </p>
              <p>
                <FaEnvelope /> info@shahda-pharmacy.com
              </p>
              <p>
                <FaMapMarkerAlt /> الرياض - المملكة العربية السعودية
              </p>
            </div>
          </div>

          <div className="footer-section">
            <h4>الروابط المهمة</h4>
            <ul>
              <li><a href="#home">الرئيسية</a></li>
              <li><a href="#services">الخدمات</a></li>
              <li><a href="#products">المنتجات</a></li>
              <li><a href="#contact">اتصل بنا</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>تابعنا</h4>
            <div className="social-links">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={index}
                    href={link.href}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon />
                  </motion.a>
                );
              })}
            </div>
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