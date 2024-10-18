const Product = require('../models/Product');

// Get all products
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get product by ID
exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Add a new product
exports.addProduct = async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update product by ID
exports.updateProductById = async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedProduct) return res.status(404).json({ message: 'Product not found' });
        res.json(updatedProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete product by ID
exports.deleteProductById = async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        if (!deletedProduct) return res.status(404).json({ message: 'Product not found' });
        res.json({ message: 'Product deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete all products
exports.deleteAllProducts = async (req, res) => {
    try {
        await Product.deleteMany();
        res.json({ message: 'All products deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.findProductsByKw = async (req, res) => {
    try {
        const name = req.query.name;
        if (!name) {
            return res.status(400).json({ message: 'Name query parameter is required.' });
        }

        // Using an alternate method for filtering
        const products = await Product.find({
            name: { 
                $regex: new RegExp(name, 'i') // Creating a regex object
            }
        });

        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};