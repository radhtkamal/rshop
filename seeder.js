const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectDB = require("./config/config.js");
const productModel = require("./models/productModel.js");
const products = require("./data/products.js");
require("colors");

// config
dotenv.config();

// function seeder
const importData = async () => {
  try {
    await connectDB();
    await productModel.deleteMany();
    await productModel.insertMany(products);
    console.log("All products added!".bgGreen);
  } catch (error) {
    console.log(`${error}`.bgRed.inverse);
    process.exit(1);
  }
};

importData();