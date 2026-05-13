/**
 * Products Page - الآن يعرض الفئات فقط بدون منتجات أو عمليات شراء
 */

import { motion } from 'framer-motion';
import Section from '../Section/Section';
import Card from '../Card/Card';
import Container from '../Container/Container';
import { CATEGORIES } from '../../constants/mockData';
import { containerVariants, itemVariants } from '../../constants/animations';
import './Products.css';

const Products = () => {
  return (
    <Section
      id="products"
      title="منتجاتنا"
      subtitle="تصفح الفئات المتوفرة في الصيدلية"
      light
    >
      <motion.div
        className="categories-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {CATEGORIES.map((cat) => (
          <motion.div key={cat.id} variants={itemVariants}>
            <Card className="category-card">
              <div className="category-icon" style={{ fontSize: '48px' }}>
                {cat.icon}
              </div>
              <h3>{cat.name}</h3>
              <p className="category-desc">منتجات مختارة ضمن فئة {cat.name}</p>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default Products;