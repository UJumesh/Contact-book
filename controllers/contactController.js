const Contact = require('../models/Contact');

// Get all contacts
const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a new contact
const createContact = async (req, res) => {
  const { name, phone, email } = req.body;

  if (!name || !phone) {
    return res.status(400).json({ message: 'Name and Phone are required' });
  }

  try {
    const newContact = new Contact({ name, phone, email });
    await newContact.save();
    res.status(201).json(newContact);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a contact by ID
const deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }
    res.json({ message: 'Contact deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getContacts,
  createContact,
  deleteContact
};
