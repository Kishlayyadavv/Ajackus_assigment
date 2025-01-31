// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// In-memory storage (replace with actual database in production)
let users = [
    {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        email: "john@example.com",
        department: "Engineering"
    }
];

// Routes
// Get all users
app.get('/api/users', (req, res) => {
    try {
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: "Error fetching users" });
    }
});

// Get single user
app.get('/api/users/:id', (req, res) => {
    try {
        const user = users.find(u => u.id === parseInt(req.params.id));
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: "Error fetching user" });
    }
});

// Create user
app.post('/api/users', (req, res) => {
    try {
        const { firstName, lastName, email, department } = req.body;
        
        // Basic validation
        if (!firstName || !lastName || !email || !department) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const newUser = {
            id: users.length + 1,
            firstName,
            lastName,
            email,
            department
        };

        users.push(newUser);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: "Error creating user" });
    }
});

// Update user
app.put('/api/users/:id', (req, res) => {
    try {
        const { firstName, lastName, email, department } = req.body;
        const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));

        if (userIndex === -1) {
            return res.status(404).json({ message: "User not found" });
        }

        // Basic validation
        if (!firstName || !lastName || !email || !department) {
            return res.status(400).json({ message: "All fields are required" });
        }

        users[userIndex] = {
            ...users[userIndex],
            firstName,
            lastName,
            email,
            department
        };

        res.json(users[userIndex]);
    } catch (error) {
        res.status(500).json({ message: "Error updating user" });
    }
});

// Delete user
app.delete('/api/users/:id', (req, res) => {
    try {
        const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
        
        if (userIndex === -1) {
            return res.status(404).json({ message: "User not found" });
        }

        users = users.filter(u => u.id !== parseInt(req.params.id));
        res.json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting user" });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});