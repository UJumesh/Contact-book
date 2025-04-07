const ContactCard = ({ contact, onDelete }) => (
    <div className="bg-white shadow-md rounded-2xl p-4 flex justify-between items-center mb-4">
      <div>
        <h2 className="text-lg font-semibold">{contact.name}</h2>
        <p className="text-sm text-gray-500">{contact.phone}</p>
        <p className="text-sm text-gray-500">{contact.email}</p>
      </div>
      <button
        onClick={() => onDelete(contact._id)}
        className="text-red-500 hover:text-red-700"
      >
        Delete
      </button>
    </div>
  );
  export default ContactCard;
  