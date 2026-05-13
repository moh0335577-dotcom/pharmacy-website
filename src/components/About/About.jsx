/**
 * About Page Component - صفحة من نحن
 */

import { motion } from 'framer-motion';
import { FaCheckCircle, FaUsers, FaAward } from 'react-icons/fa';
import Section from '../Section/Section';
import Card from '../Card/Card';
import Container from '../Container/Container';
import { GALLERY, TESTIMONIALS } from '../../constants/mockData';
import { containerVariants, itemVariants, fadeInUp } from '../../constants/animations';
import './About.css';

const About = () => {
  const features = [
    {
      icon: FaCheckCircle,
      title: 'أدوية أصلية',
      description: 'جميع الأدوية من مصادر موثوقة ومعتمدة',
    },
    {
      icon: FaUsers,
      title: 'فريق متخصص',
      description: 'صيادلة وموظفو خدمة عملاء محترفون',
    },
    {
      icon: FaAward,
      title: 'جودة مضمونة',
      description: 'خدمة عالية الجودة منذ سنوات',
    },
  ];

  return (
    <>
      {/* About Section */}
      <Section
        id="about"
        title="من نحن"
        subtitle="نحن صيدلية مختصة في توفير أفضل الخدمات الصيدلانية"
        light
      >
        <div className="about-content">
          <motion.div
            className="about-text"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <p>
              صيدلية شهد عبد المنعم إسماعيل متخصصة في توفير أفضل الخدمات الصيدلانية والاستشارات الطبية للمجتمع. نحن نتميز بموقعنا المميز في السيدة زينب وتوفيرنا للأدوية الأصلية والموثوقة.
            </p>
            <p>
              فريقنا المتخصص من الصيادلة الخبرين يعمل بجد لتقديم أفضل الخدمات والاستشارات الطبية لعملائنا الكرام. نحن ملتزمون بجودة الخدمة والرعاية الشاملة.
            </p>
          </motion.div>

          <motion.div
            className="about-features"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="feature-card">
                    <div className="feature-icon">
                      <Icon />
                    </div>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </Section>

      {/* Gallery Section */}
      <Section
        title="معرض الصور"
        subtitle="اطلع على صور من فرعنا الرائع"
      >
        <motion.div
          className="gallery-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {GALLERY.map((item) => (
            <motion.div
              key={item.id}
              className="gallery-item"
              onClick={() => item.imageUrl && window.open(item.imageUrl, '_blank')}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="gallery-image">
                {item.imageUrl ? (
                  <img src={item.imageUrl} alt={item.title} className="gallery-img" />
                ) : (
                  <span className="gallery-emoji">{item.image}</span>
                )}
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Testimonials Section */}
      <Section
        title="آراء عملائنا"
        subtitle="ماذا يقول عملاؤنا الكرام عنا"
        light
      >
        <motion.div
          className="testimonials-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {TESTIMONIALS.map((testimonial) => (
            <motion.div key={testimonial.id} variants={itemVariants}>
              <Card className="testimonial-card">
                <div className="testimonial-header">
                  <span className="testimonial-avatar">{testimonial.avatar}</span>
                  <div className="testimonial-name">{testimonial.name}</div>
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-rating">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="star">★</span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Section>
    </>
  );
};

export default About;