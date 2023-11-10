const express = require("express");
const productControllers = require("../controllers/product");

const router = express.Router();

router.post("/add-product",productControllers.postAddProduct);
router.get("/get-products", productControllers.getProducts);
router.put("/update-item",productControllers.updateItem);


module.exports = router;