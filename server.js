const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
require("colors");

const connectDB = require("./config/config");

dotenv.config();
connectDB();

const app = express();

app.use(cors({
  credentials: true,
  origin: 'http://127.0.0.1:8080'
}));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));

app.use("/api/products", require("./routes/productRoutes"));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`.bgCyan.white);
});
