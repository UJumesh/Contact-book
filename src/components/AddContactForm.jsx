import { useState } from 'react';

const AddContactForm = ({ onAdd }) => {
  const [form, setForm] = useState({ name: '', phone: '', email: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(form);
    setForm({ name: '', phone: '', email: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <input
        type="text"
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="p-2 border rounded-xl w-full mb-2"
        required
      />
      <input
        type="text"
        placeholder="Phone"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
        className="p-2 border rounded-xl w-full mb-2"
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="p-2 border rounded-xl w-full mb-2"
        required
      />
      <button type="submit" className="bg-green-600 text-white w-full p-2 rounded-xl mt-2">
        Add Contact
      </button>
    </form>
  );
};

export default AddContactForm;
