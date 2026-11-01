# Contact Book — Express & MongoDB

A REST contact-management application using Node.js, Express and Mongoose, with a companion frontend folder.

## Implemented API

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | `/api/contacts` | List all contacts |
| POST | `/api/contacts` | Create a contact with name, phone and email |
| DELETE | `/api/contacts/:id` | Delete a contact |

## Local backend

```bash
npm install
```

Create a local `.env` with your own MongoDB connection details:

```dotenv
MONGO_URI=mongodb://127.0.0.1:27017/contact-book
PORT=5000
```

```bash
npm run dev
```

Backend entry point: `server.js`. The companion `contact-book-frontend/` is present, but its package scripts are incomplete, so a working frontend is not asserted.

## Security and limitations
This is an educational implementation without user authentication. The repository currently tracks a `.env` file and `node_modules`. If any tracked secret is real, rotate it and plan history cleanup separately. Do not expose the contacts API publicly without authentication and validation.
