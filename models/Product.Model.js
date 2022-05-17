const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  productType: {
    type: String,
    required: [true, "Please Enter the Type"],
  },
  productno: {
    type: String,
    required: [true, "Please Enter the prodct number"],
  },
  productName: {
    type: String,
    required: [true, "Please Enter product name "],
  },
  totPrice: {
    type: Number,
  },
  description: {
    type: String,
  },
});

module.exports = mongoose.model("Product", productSchema);
