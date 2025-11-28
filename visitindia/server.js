// File: server.js
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

// Serve static files from the "public" directory
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Endpoint for user signup
app.post('/signup', (req, res) => {
    const newUser = {
        username: req.body.username,
        password: req.body.password,
    };

    fs.readFile('users.json', (err, data) => {
        if (err) throw err;
        const users = JSON.parse(data);

        const userExists = users.some(user => user.username === newUser.username);

        if (userExists) {
            return res.status(400).send('User already exists');
        }

        users.push(newUser);

        fs.writeFile('users.json', JSON.stringify(users, null, 2), err => {
            if (err) throw err;
            res.send('Signup successful');
        });
    });
});

// Endpoint for user login
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    fs.readFile('users.json', (err, data) => {
        if (err) throw err;
        const users = JSON.parse(data);

        const user = users.find(user => user.username === username && user.password === password);

        if (user) {
            res.send('Login successful');
        } else {
            res.status(401).send('Invalid username or password');
        }
    });
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
