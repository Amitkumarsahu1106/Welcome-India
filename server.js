const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the current directory
app.use(express.static(__dirname));

// Ensure userdata directory exists
const USER_DATA_DIR = path.join(__dirname, 'userdata');
fs.mkdir(USER_DATA_DIR, { recursive: true }).catch(console.error);

// Signup Endpoint
app.post('/signup', async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ message: 'Username and password are required' });
        }

        const userFilePath = path.join(USER_DATA_DIR, `${username}.json`);

        // Check if user already exists
        try {
            await fs.access(userFilePath);
            return res.status(409).json({ message: 'User already exists' });
        } catch (error) {
            // File does not exist, proceed
        }

        // Save user data
        const userData = { username, password, createdAt: new Date().toISOString() };
        await fs.writeFile(userFilePath, JSON.stringify(userData, null, 2));

        console.log(`User registered: ${username}`);
        res.status(201).json({ message: 'Signup successful' });

    } catch (error) {
        console.error('Signup error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Login Endpoint
app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ message: 'Username and password are required' });
        }

        const userFilePath = path.join(USER_DATA_DIR, `${username}.json`);

        // Check if user exists
        try {
            await fs.access(userFilePath);
        } catch (error) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Read user data
        const fileContent = await fs.readFile(userFilePath, 'utf-8');
        const userData = JSON.parse(fileContent);

        if (userData.password === password) {
            console.log(`User logged in: ${username}`);
            res.status(200).json({ message: 'Login successful' });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }

    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
