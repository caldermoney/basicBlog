require('dotenv').config();

const express = require('express');
const exphbs = require('express-handlebars');
const PORT = process.env.PORT || 3001;
const sequelize = require('./config/connection');
const session = require('express-session');
const sequelizeStore = require('connect-session-sequelize')(session.Store); 
const app = express();


const { User, Blog } = require('./models');


// Auth
app.use(
  session({
    secret: 'super secret', 
    resave: false,
    saveUninitialized: true,
    store: new sequelizeStore({
      db: sequelize
    }),
  }));  

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Routes
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');
app.use('/', htmlRoutes);
app.use('/', apiRoutes);



// Handlebars
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Static assets
app.use(express.static('public'));

// Start the server.
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`App listening on port ${PORT}`);
    });
});