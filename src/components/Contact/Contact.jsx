/**
 * Contact Page Component - صفحة التواصل
 */

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaWhatsapp, FaMapMarkerAlt, FaFacebook, FaPaperPlane } from 'react-icons/fa';
import Section from '../Section/Section';
import Card from '../Card/Card';
import Button from '../Button/Button';
import Container from '../Container/Container';
import { PHARMACY_INFO } from '../../constants/mockData';
import { openWhatsApp, makeCall, openFacebook } from '../../utils/helpers';
import { fadeInUp, containerVariants, itemVariants } from '../../constants/animations';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const contactMethods = [
    {
      icon: FaPhone,
      title: 'اتصال مباشر',
      value: PHARMACY_INFO.phone,
      action: () => makeCall(PHARMACY_INFO.phone),
      color: '#20B2AA',
    },
    {
      icon: FaWhatsapp,
      title: 'واتس آب',
      value: PHARMACY_INFO.whatsapp,
      action: () => openWhatsApp(PHARMACY_INFO.whatsapp),
      color: '#25D366',
    },
    {
      icon: FaFacebook,
      title: 'الفيسبوك',
      value: 'صيدلية شهد',
      action: () => openFacebook(PHARMACY_INFO.facebook),
      color: '#1877F2',
    },
    {
      icon: FaMapMarkerAlt,
      title: 'العنوان',
      value: PHARMACY_INFO.location,
      action: () => { },
      color: '#EF4444',
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `مرحباً، أنا ${formData.name}\nهاتفي: ${formData.phone}\nرسالتي: ${formData.message}`;
    openWhatsApp(PHARMACY_INFO.whatsapp);
  };

  return (
    <Section
      id="contact"
      title="تواصل معنا"
      subtitle="نحن هنا لمساعدتك. تواصل معنا بأي من الطرق التالية"
      light
    >
      <div className="contact-wrapper">
        {/* Contact Methods */}
        <motion.div
          className="contact-methods"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card
                  className="contact-method-card"
                  onClick={method.action}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="method-icon" style={{ color: method.color }}>
                    <Icon />
                  </div>
                  <h3>{method.title}</h3>
                  <p>{method.value}</p>
                  <Button variant="ghost" size="sm" className="method-btn">
                    اضغط للتواصل
                  </Button>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="contact-form-wrapper"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <Card className="contact-form-card">
            <h2>أرسل لنا رسالة</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">الاسم</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="أدخل اسمك"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">رقم الهاتف</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="أدخل رقم هاتفك"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">الرسالة</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="أدخل رسالتك هنا..."
                  rows="5"
                  required
                ></textarea>
              </div>

              <Button
                variant="primary"
                size="lg"
                fullWidth
                type="submit"
                className="submit-btn"
              >
                <FaPaperPlane /> أرسل الرسالة
              </Button>
            </form>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
};

export default Contact;