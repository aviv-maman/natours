const mongoose = require('mongoose');

const DB = process.env.MONGO_URI.replace(
  '<PASSWORD>',
  process.env.MONGO_PASSWORD
);

const connectDB = async () => {
  const conn = await mongoose.connect(DB);
  console.log(`MongoDB Connected: ${conn.connection.host}`);
};

module.exports = connectDB;
