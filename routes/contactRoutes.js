const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// Get all contacts
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a contact
router.post('/', async (req, res) => {
  const { name, phone, email } = req.body;
  try {
    const newContact = new Contact({ name, phone, email });
    const saved = await newContact.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete a contact
router.delete('/:id', async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.json({ message: 'Contact deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
