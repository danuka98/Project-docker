const express = require("express");
const router = express.Router();

const {
  addProduct,
  getProductDetails,
  updateProductDetails,
  deleteProductDetails,
} = require("../controllers/Product.Controller");

//add produts
router.route("/addProduct").post(addProduct);

//get products
router.route("/products").get(getProductDetails);

//update product details
router.route("/updateProductDetails/:id").post(updateProductDetails);

//delete product details
router.route("/deleteProductDetails/:id").delete(deleteProductDetails);

module.exports = router;
