const express = require('express');
const cors = require('cors');
const searchRoutes = require('./routes/searchRoutes');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json()); // Parse JSON requests
app.use(cors()); // Handle CORS

// Routes
app.use('/api/search', searchRoutes);

module.exports = app;

