const dotenv = require("dotenv");
dotenv.config(); // هذا السطر يقوم بتحميل المتغيرات من ملف .env

const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.LOCAL_DB);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

module.exports = connectDB;
