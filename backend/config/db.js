const mongoose = require("mongoose");
const db = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB connected");
  } catch (err) {
    console.log("Error in connecting MongoDB", err);
  }
};
module.exports = db;
