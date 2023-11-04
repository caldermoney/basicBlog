const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Blog = require('../models/Blog');


//Signup route
router.post('/signup', async (req, res) => {
    try {
        const { username, password } = req.body;
        const newUser = await User.create({ username, password});
        res.status(201).json(newUser);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

// Login route
router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ where: { username } });
        if (!user) {
            res.status(400).json({ message: 'Incorrect username or password' });
        } else if (user.checkPassword(password)) {
            req.session.save(() => {
                req.session.userId = user.id;
                req.session.username = user.username;
                req.session.loggedIn = true;
                
                res.json({ user: user, message: 'You are now logged in!' });
            });
        } else {
            res.status(400).json({ message: 'Incorrect username or password' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

// Logout route
router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });
  

// Create new post
router.post('/new-post', async (req, res) => {
    try {
        const { title, content } = req.body;
        // Include the userId from the session in the new post
        const newPost = await Blog.create({
            title,
            content,
            userId: req.session.userId // Associate post with logged-in user
        });
        res.status(201).json(newPost);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

// Update existing post
router.put('/update-post/:id', async (req, res) => {
    try {
        const { title, content } = req.body;
        const updatedPost = await Blog.update({ title, content }, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(updatedPost);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

// Delete post
router.delete('/delete-post/:id', async (req, res) => {
    try {
        await Blog.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({ message: 'Post deleted' });
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

module.exports = router;