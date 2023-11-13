// const Sequelize = require('sequelize');
// require('dotenv').config();

// const sequelize = new Sequelize(
//   process.env.DB_NAME,
//   process.env.DB_USER,
//   process.env.DB_PASSWORD, {
//       host: 'localhost',
//       dialect: 'mysql',
//       port: 3306
//   });

// module.exports = sequelize;

const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) { // Replace with CLEARDB_DATABASE_URL if using ClearDB
    // Heroku deployment using JawsDB MySQL
    sequelize = new Sequelize(process.env.JAWSDB_URL, {
        dialect: 'mysql',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false // This is important for some Heroku configurations
            }
        }
    });
} else {
    // Local development
    sequelize = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD, {
            host: 'localhost',
            dialect: 'mysql',
            port: 3306
        });
}

module.exports = sequelize;
