const express = require('express');
const router = express.Router();

// Route for the homepage
router.get('/', async (req, res) => {
    try {
      res.render('index');
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});

//Route fo Dashboard
router.get('/dashboard', (req, res) => {
    res.send('Dashboard placeholder')
});

router.get('/login', (req, res) => {
    res.send('login placeholder')
});



  module.exports = router;
  