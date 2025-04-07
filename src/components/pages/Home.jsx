import { useEffect, useState } from 'react';
import AddContactForm from '../components/AddContactForm';
import ContactCard from '../components/ContactCard';

const Home = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/contacts')
      .then((res) => res.json())
      .then(setContacts);
  }, []);

  const addContact = (contact) => {
    fetch('http://localhost:5000/api/contacts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(contact),
    })
      .then((res) => res.json())
      .then((data) => setContacts([...contacts, data]));
  };

  const deleteContact = (id) => {
    fetch(`http://localhost:5000/api/contacts/${id}`, {
      method: 'DELETE',
    }).then(() => setContacts(contacts.filter((c) => c._id !== id)));
  };

  return (
    <div className="max-w-xl mx-auto mt-10 px-4">
      <AddContactForm onAdd={addContact} />
      {contacts.map((contact) => (
        <ContactCard key={contact._id} contact={contact} onDelete={deleteContact} />
      ))}
    </div>
  );
};

export default Home;
