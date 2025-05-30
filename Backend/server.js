const express = require('express');             // Import Express
const mongoose = require('mongoose');           // MongoDB ODM
const dotenv = require('dotenv');               // For .env config
const cors = require('cors');                   // Enable Cross-Origin
const authRoutes = require('./routes/auth');    // Auth routes
const taskRoutes = require('./routes/tasks');   // Task routes

dotenv.config();                                // Load env vars
const app = express();
app.use(cors());                                 // Allow frontend requests
app.use(express.json());                         // Parse JSON bodies

// MongoDB connect
mongoose.connect(process.env.MONGO_URI, () => {
    console.log('Connected to MongoDB');
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

app.listen(5000, () => console.log('Server started on port 5000'));

