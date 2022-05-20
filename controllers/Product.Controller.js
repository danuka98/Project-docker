const { findById } = require("../models/Product.Model");
const Service = require("../models/Product.Model");

//add product
exports.addProduct = async (req, res, next) => {
  const { productType, productno, productName, totPrice, description } =
    req.body;

  const product = await Service.create({
    productType,
    productno,
    productName,
    totPrice,
    description,
  });

  res.status(200).json({
    success: true,
    product,
    message: "Product Added",
  });
};

//Get Details of Report of Service/Repair in a vehicle
exports.getProductDetails = async (req, res, next) => {
  const productDetails = await Service.find();

  if (!productDetails) {
    return res.status(400).json({
      success: false,
      message: "Products Not Found",
    });
  }

  res.status(200).json({
    success: true,
    productDetails,
    message: "Get Product Details",
  });
};

//Update Details of Report of Service/Repair in a vehicle
exports.updateProductDetails = async (req, res, next) => {
  let productDetails = await Service.findById(req.params.id);

  if (!productDetails) {
    return res.status(400).json({
      success: false,
      message: "Product Not Found",
    });
  }

  productDetails = await Service.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    productDetails,
    message: "Update Successfull",
  });
};

//Delete product
exports.deleteProductDetails = async (req, res, next) => {
  let product = await Service.findById(req.params.id);

  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Product Not Found",
    });
  }

  product = await Service.findByIdAndDelete(req.params.id);

  res.status(200).json({
    success: true,
    product,
    message: "Remove Successfull",
  });
};

//test the pipeline
