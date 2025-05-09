const products = [];

const getProducts = () => products;

const addProduct = (product) => {
    products.push(product);
};

module.exports = { getProducts, addProduct };
