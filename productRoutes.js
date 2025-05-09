const express = require("express");
const router = express.Router();
const { listProducts, createProduct } = require("../services/productService");

router.get("/products", (req, res) => {
    res.json(listProducts());
});

router.post("/products", (req, res) => {
    try {
        const { name, price } = req.body;
        createProduct(name, price);
        res.status(201).json({ message: "Producto agregado con éxito" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
