/**
 * Helper Functions - دوال مساعدة
 */

/**
 * تنسيق السعر بصيغة محلية
 */
export const formatPrice = (price) => {
  return new Intl.NumberFormat('ar-SA', {
    style: 'currency',
    currency: 'SAR',
  }).format(price);
};

/**
 * الحد من النص
 */
export const truncateText = (text, length) => {
  if (text.length <= length) return text;
  return text.slice(0, length) + '...';
};

/**
 * التحقق من البريد الإلكتروني
 */
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * التحقق من رقم الهاتف
 */
export const validatePhone = (phone) => {
  const phoneRegex = /^[0-9]{9,}$/;
  return phoneRegex.test(phone.replace(/\D/g, ''));
};

/**
 * تأخير (Delay)
 */
export const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * إزالة المسافات الزائدة
 */
export const cleanString = (str) => {
  return str.trim().replace(/\s+/g, ' ');
};

/**
 * فتح الواتس أب
 */
export const openWhatsApp = (phoneNumber) => {
  const message = encodeURIComponent('مرحباً، أود الاستفسار عن المنتجات');
  window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
};

/**
 * فتح المكالمة العادية
 */
export const makeCall = (phoneNumber) => {
  window.location.href = `tel:${phoneNumber}`;
};

/**
 * فتح الفيسبوك
 */
export const openFacebook = (facebookUrl) => {
  window.open(facebookUrl, '_blank');
};