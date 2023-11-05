const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');

// Auth Middleware to check if user is logged in
function withAuth(req, res, next) {
    if (!req.session.userId) {
      res.redirect('/login');
    } else {
      next();
    }
  };

router.get('/login', (req, res) => {
    res.render('login')
}); 

router.get('/signup', (req, res) => {
  res.render('signup')
});


// Blog homepage display Route
router.get('/', async (req, res) => {
    try {
        const blogData = await Blog.findAll();
        const blogs = blogData.map((blog) => blog.get({plain: true}));
        res.render('index', {blogs, loggedIn: req.session.loggedIn});
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/dashboard', withAuth, async (req, res) => {
  try {
      // Fetch user's posts from the database
      const userPostsData = await Blog.findAll({ where: { userId: req.session.userId } });
      const userPosts = userPostsData.map((post) => post.get({ plain: true }));
      console.log(userPosts)
      // Render the dashboard view and pass the posts data
      res.render('dashboard', { userPosts, loggedIn: req.session.loggedIn });
  } catch (err) {
      console.log(err);
      res.status(500).json(err);
  }
});


  module.exports = router;
  