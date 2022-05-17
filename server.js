const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");

dotenv.config({ path: "config/config.env" });

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());

//Import Routes
const product = require("./routes/Product.Routes");
//use Routes
app.use("/api/v1/product", product);

// connectDatabase();
// Connect to mongodb

const URI = process.env.MONGODB_URL;
mongoose.connect(
  URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("Connected to MongoDB");
  }
);

app.listen(process.env.PORT, () => {
  console.log(`Server Started at PORT ${process.env.PORT}`);
});
