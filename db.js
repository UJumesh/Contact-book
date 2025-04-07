const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  }
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
