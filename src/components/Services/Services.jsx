/**
 * Services Section Component - قسم الخدمات
 */

import { motion } from 'framer-motion';
import {
  FaPills,
  FaUserMd,
  FaHeartbeat,
  FaTruck,
} from 'react-icons/fa';
import Card from '../Card/Card';
import Section from '../Section/Section';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'الأدوية',
      description: 'مجموعة شاملة من الأدوية الموثوقة والآمنة',
      icon: FaPills,
      color: '#10B981',
    },
    {
      id: 2,
      title: 'استشارات طبية',
      description: 'استشارات متخصصة من الصيادلة المؤهلين',
      icon: FaUserMd,
      color: '#3B82F6',
    },
    {
      id: 3,
      title: 'قياس ضغط الدم',
      description: 'خدمة قياس ضغط الدم المجانية',
      icon: FaHeartbeat,
      color: '#EF4444',
    },
    {
      id: 4,
      title: 'توصيل منزلي',
      description: 'توصيل سريع وآمن لباب منزلك',
      icon: FaTruck,
      color: '#F59E0B',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <Section
      id="services"
      title="خدماتنا"
      subtitle="نقدم لك أفضل الخدمات الصيدلية والاستشارات الطبية"
      light
    >
      <motion.div
        className="services-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <motion.div key={service.id} variants={itemVariants}>
              <Card className="service-card">
                <div
                  className="service-icon"
                  style={{ color: service.color }}
                >
                  <Icon />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div
                  className="service-accent"
                  style={{ background: service.color }}
                ></div>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
};

export default Services;