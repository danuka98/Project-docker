const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());

//Import Routes
const product = require("./routes/Product.Routes");

//use Routes
app.use("/api/v1/product", product);

module.exports = app;
