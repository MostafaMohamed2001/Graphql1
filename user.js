// user.js

// بيانات المستخدمين
const users = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' }
];

// دالة للحصول على جميع المستخدمين
function getAllUsers() {
  return users;
}

// دالة للعثور على مستخدم حسب المعرف
function getUserById(id) {
  return users.find(user => user.id === id);
}

// تصدير البيانات والدوال
module.exports = {
  users,
  getAllUsers,
  getUserById
};
