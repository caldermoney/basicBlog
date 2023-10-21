const express = require('express');
const router = express.Router();
const User = require('../models/User');

//Signup route
router.post('/signup', async (req, res) => {
    try {
        const {user, password} = req.body;

        const existingUser = await User.findOne({where: {user} });
        if (existingUser) {
            return res.status(400).json({message: 'Username already exists'});
        }

        const newUser = await User.create({
            user,
            password,
        });

        res.status(201).json(newUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Error creating user'});
    }
});

// Login route
router.post('/login', async (req, res) => {
    try {
        const { user, password } = req.body;

        const existingUser = await User.findOne({ where: { user } });
        if (!existingUser) {
            return res.status(400).json({ message: 'Incorrect username or password' });
        }

        const validPassword = existingUser.checkPassword(password);
        if (!validPassword) {
            return res.status(400).json({ message: 'Incorrect username or password' });
        }

        // At this point, the user is authenticated. You can set up session, JWT, or any other authentication method here.

        res.status(200).json({ user: existingUser, message: 'You are now logged in!' });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error logging in user' });
    }
});


module.exports = router;