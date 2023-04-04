const express = require("express");
const { getProductsController, addProductController, editProductController, deleteProductController } = require("../controllers/productControllers");

const router = express.Router();

// routes
// GET methods
router.get("/get-product", getProductsController);

// POST methods
router.post("/add-product", addProductController);

// POST methods
router.put("/edit-product", editProductController);

// POST methods
router.post("/delete-product", deleteProductController);

module.exports = router;