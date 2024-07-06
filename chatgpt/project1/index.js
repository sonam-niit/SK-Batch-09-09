const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth.route');
require('dotenv').config();
const categoryRoutes = require('./routes/category.route');
const productRoutes = require('./routes/product.route');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/auth', authRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/product', productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
