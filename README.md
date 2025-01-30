
### Frontend
- React.js
- React Router Dom
- Axios
- Material UI
### Backend
- Node.js
- Express.js
- CORS
- Body Parser

## Prerequisites

Before running this application, make sure you have the following installed:
- Node.js (v14 or higher)
- npm (Node Package Manager)

## Installation

### Backend Setup

1. Clone the repository
```bash
git clone <repository-url>
cd user-management-system
```

2. Install backend dependencies
```bash
cd backend
npm install
```

3. Start the backend server
```bash
node server.js
```
The server will start running on `http://localhost:5000`

### Frontend Setup

1. Open a new terminal and navigate to the frontend directory
```bash
cd frontend
```

2. Install frontend dependencies
```bash
npm install
npm install @mui/material @emotion/react @emotion/styled
npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader

```

3. Create a `.env` file in the frontend root directory
```bash
REACT_APP_API_URL=http://localhost:5000
```

4. Start the development server
```bash
npm start
```
The application will open in your default browser at `http://localhost:3000`

## Project Structure

```
user-management-system/
├── backend/
│   ├── server.js
│   └── package.json
└── frontend/
    ├── public/
    ├── src/
    │   ├── components/
    │   │   ├── Navbar.js
    │   │   ├── UserList.js
    │   │   └── UserForm.js
    │   ├── App.js
    │   └── index.js
    ├── .env
    └── package.json
```

## API Endpoints

### Users API

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/users` | Get all users |
| GET | `/api/users/:id` | Get a specific user |
| POST | `/api/users` | Create a new user |
| PUT | `/api/users/:id` | Update a user |
| DELETE | `/api/users/:id` | Delete a user |

## Environment Variables

### Frontend
```env
REACT_APP_API_URL=http://localhost:5000
```

## Troubleshooting

If you encounter the OpenSSL error with Node.js v17+, set the following environment variable:

Windows (CMD):
```bash
set NODE_OPTIONS=--openssl-legacy-provider
```

Windows (PowerShell):
```powershell
$env:NODE_OPTIONS="--openssl-legacy-provider"
```

Linux/MacOS:
```bash
export NODE_OPTIONS=--openssl-legacy-provider
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- React.js documentation
- Express.js documentation
- Tailwind CSS documentation
