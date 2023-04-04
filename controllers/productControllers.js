const productModel = require('../models/productModel.js');

const getProductsController = async (request, response) => {
  try {
    const products = await productModel.find();
    response.status(200).send(products);
  } catch (error) {
    console.log(error);
  }
};

const addProductController = async (request, response) => {
  try {
    const newProduct = new productModel(request.body);
    await newProduct.save();
    console.log(newProduct)
    response.status(201).send("Product created successfully!");
  } catch (error) {
    response.status(400).send(error);
    console.log(error);
  }
}

const editProductController = async (request, response) => {
  try {
    await productModel.findOneAndUpdate({
      _id: request.body.productId
    }, request.body);
    response.status(201).send("Product updated successfully!");
  } catch (error) {
    response.status(400).send(error);
    console.log(error);
  }
}

const deleteProductController = async (request, response) => {
  try {
    const { productId } = request.body;
    await productModel.findOneAndDelete({ _id: productId });
    response.status(200).json("Product deleted successfully!");
  } catch (error) {
    response.status(400).send(error);
    console.log(error);
  }
}

module.exports = { getProductsController, addProductController, editProductController, deleteProductController };