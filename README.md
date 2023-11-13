
# Basic Blog

## Description
Basic Blog is a web application built using Node.js, Express, and Handlebars. It allows users to create, edit, delete, and view blog posts. It also supports user authentication and comments on posts.

## Installation

### Prerequisites
- Node.js
- MySQL

### Setup
1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-repository/basicBlog.git
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Create a `.env` file in the root directory with the following contents:**
   ```env
   DB_NAME='blog_db'
   DB_USER='your_mysql_username'
   DB_PASSWORD='your_mysql_password'
   ```
4. **Initialize the database:**
   ```bash
   mysql -u your_mysql_username -p
   source db/schema.sql
   exit
   ```
5. **Seed the database:**
   ```bash
   npm run seed
   ```

## Running the Application
- Start the server:
  ```bash
  npm start
  ```
- Access the application at http://localhost:3001.

## Features
- User authentication (login/logout/signup)
- CRUD operations for blog posts
- Commenting on posts

## Structure
```
Basic Blog
│
├── config
│   └── connection.js      # Database connection setup
│
├── controllers            # Route definitions
│   ├── api                # API routes
│   ├── dashboardRoutes.js # Dashboard routes
│   └── homeRoutes.js      # Home page routes
│
├── db
│   └── schema.sql         # Database schema
│
├── models                 # Database models
│
├── public                 # Static files (JavaScript & CSS)
│   ├── css
│   └── js
│
├── seeds                  # Seed data for the database
│
├── utils                  # Utility functions
│
├── views                  # Handlebars view templates
│   ├── layouts
│   └── ...
│
├── .gitignore
├── package.json
├── README.md
└── server.js              # Entry point of the application
```

## License
This project is licensed under the ISC License.

## Sources
This project was developed with assistance from various sources:
- ChatGPT for guidance and advice on specific development challenges.
- Stack Overflow for solutions to common programming problems encountered during development.
- A GitHub repository by `acst52`, which provided valuable insights and code examples.

