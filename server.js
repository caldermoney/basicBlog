require('dotenv').config();

const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const PORT = process.env.PORT || 3001;
const sequelize = require('./config/connection');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Routes
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');
app.use('/', htmlRoutes);
app.use('/', apiRoutes);

// Import the Blog Model
const Blog = require('./models/Blog');
// Import the User Model
const User = require('./models/User');

// Handlebars
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Static assets
app.use(express.static('public'));

// Start the server.
sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => {
        console.log(`App listening on port ${PORT}`);
    });
});