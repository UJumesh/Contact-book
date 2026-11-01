# Contact Book — Express & MongoDB

A contact-management backend built with **Node.js, Express, and Mongoose**, with a companion frontend directory.

## Implemented backend features
- List contacts
- Create contacts with name, phone, and email
- Delete contacts by ID
- Connect to MongoDB using an environment variable

## Stack
Node.js · Express 5 · MongoDB · Mongoose · CORS · dotenv

## Run the backend

```bash
npm install
```

Create a local `.env` with your own database connection details:

```dotenv
MONGO_URI=mongodb://127.0.0.1:27017/contact-book
PORT=5000
```

```bash
npm run dev
# or: npm start
```

## API reference

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | `/api/contacts` | List contacts |
| POST | `/api/contacts` | Create contact; JSON: `name`, `phone`, `email` |
| DELETE | `/api/contacts/:id` | Delete contact |

## Structure
- `server.js` — Express entry point
- `db.js` — database-related code
- `models/Contact.js` — contact model
- `controllers/contactController.js` — controller functions
- `routes/contactRoutes.js` — REST routes
- `contact-book-frontend/` — frontend experiment

## Development notes
The tracked frontend's package configuration is incomplete, so this README does not claim that the frontend runs out of the box. The API currently has no user authentication; secure it before exposing personal contact information publicly. **The repository also tracks a `.env` file:** treat any included secrets as potentially exposed, rotate real credentials, and remove them from Git history using a deliberate security cleanup process.

**Status:** Learning/demo project, not production hardened.
