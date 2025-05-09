const { getProducts, addProduct } = require("../data/products");

const listProducts = () => {
    return getProducts();
};

const createProduct = (name, price) => {
    if (!name || price <= 0) {
        throw new Error("Nombre y precio válidos requeridos");
    }
    addProduct({ name, price });
};

module.exports = { listProducts, createProduct };
