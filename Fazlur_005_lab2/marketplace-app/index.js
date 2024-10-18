const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config');

const productRoutes = require('./routes/productRoutes');

const app = express(); // Initialize the app first

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/', productRoutes); // Use routes after app is initialized

// Connect to MongoDB
mongoose.connect(config.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log('Error connecting to MongoDB:', err));

// Default route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the DressStore application.' });
});

// Start the server
app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});

// Product model
const Product = require('./models/Product');

// API Routes

// Get all products
app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get product by ID
app.get('/api/products/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a new product
app.post('/api/products', async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(201).json(newProduct); // 201 Created
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update product by ID
app.put('/api/products/:id', async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedProduct) return res.status(404).json({ message: 'Product not found' });
    res.json(updatedProduct);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete product by ID
app.delete('/api/products/:id', async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) return res.status(404).json({ message: 'Product not found' });
    res.json({ message: 'Product deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});