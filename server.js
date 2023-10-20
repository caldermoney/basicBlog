require('dotenv').config();

const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const PORT = process.env.PORT || 3001;
const sequelize = require('./config/connection');

// Import the Blog Model
const Blog = require('./models/Blog');

// Handlebars
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static assets
app.use(express.static('public'));

// Placeholder route for Homepage
app.get('/', async (req, res) => {
    try {
        const blogData = await Blog.findAll();
        const blogs = blogData.map((blog) => Blog.get({ plain: true }));

        res.render('index', {blogs});
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Start the server.
sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => {
        console.log(`App listening on port ${PORT}`);
    });
});