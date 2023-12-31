const colors = require("colors");
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected: ${connect.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(`ERROR: ${error.message}`.red.underline.bold);
    process.exit(1);
  }
};

module.exports = connectDB;
