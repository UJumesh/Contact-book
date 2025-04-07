const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB error:", err));

// Routes
const contactRoutes = require('./routes/contactRoutes');
app.use('/api/contacts', contactRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
// Compare this snippet from contac-book-backend/.env:
// MONGO_URI=mongodb://localhost:27017/contact-book 