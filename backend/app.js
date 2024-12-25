const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const kpopRoutes = require('./routes/kpopRoutes');
const { connectDB } = require('./config/database');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
connectDB();

// Routes
app.use('/api/kpop', kpopRoutes);

// Start Server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
