// product.js

// بيانات المنتجات
const products = [
  { id: 1, name: 'Laptop', price: 1000 },
  { id: 2, name: 'Smartphone', price: 500 }
];

// دالة للحصول على جميع المنتجات
function getAllProducts() {
  return products;
}

// دالة للعثور على منتج حسب المعرف
function getProductById(id) {
  return products.find(product => product.id === id);
}

// تصدير البيانات والدوال
module.exports = {
  products,
  getAllProducts,
  getProductById
};
