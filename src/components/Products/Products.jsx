/**
 * Products Page Component - صفحة المنتجات
 */

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaShoppingCart, FaStar } from 'react-icons/fa';
import Card from '../Card/Card';
import Section from '../Section/Section';
import Button from '../Button/Button';
import Container from '../Container/Container';
import { PRODUCTS, CATEGORIES } from '../../constants/mockData';
import { containerVariants, itemVariants } from '../../constants/animations';
import './Products.css';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('الأدوية');

  const filteredProducts = PRODUCTS.filter(
    (product) => product.category === selectedCategory
  );

  return (
    <Section
      id="products"
      title="منتجاتنا"
      subtitle="اختر من أفضل الأدوية والمستحضرات المتوفرة في صيدليتنا"
      light
    >
      {/* Categories Filter */}
      <motion.div
        className="categories-filter"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {CATEGORIES.map((category) => (
          <motion.button
            key={category.id}
            className={`category-btn ${selectedCategory === category.name ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category.name)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="category-icon">{category.icon}</span>
            {category.name}
          </motion.button>
        ))}
      </motion.div>

      {/* Products Grid */}
      <motion.div
        className="products-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {filteredProducts.map((product) => (
          <motion.div key={product.id} variants={itemVariants}>
            <Card className="product-card">
              <div className="product-image">{product.image}</div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="product-category">{product.category}</p>
                <div className="product-rating">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      color={i < Math.floor(product.rating) ? '#F59E0B' : '#D1D5DB'}
                      size={14}
                    />
                  ))}
                  <span>({product.rating})</span>
                </div>
              </div>
              <div className="product-footer">
                <span className="product-price">{product.price} ر.س</span>
                <Button
                  variant="primary"
                  size="sm"
                  className="add-to-cart-btn"
                >
                  <FaShoppingCart /> أضف
                </Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default Products;