# User Management Service

A secure, production-ready RESTful API for user authentication and management built with Node.js, Express, MongoDB, and JWT.

## Features

- User Registration with password validation
- User Login with JWT authentication
- Protected Routes with JWT verification
- Password Hashing using bcrypt (12 salt rounds)
- Input Validation using express-validator
- Rate Limiting to prevent abuse
- Security Headers with Helmet
- CORS Protection
- Request Logging with Morgan
- MongoDB Integration with Mongoose

## Installation

1. Clone the repository
2. Install dependencies: npm install
3. Create .env file with required variables
4. Start server: node src/app.js

## API Endpoints

### POST /api/users/register
Register a new user

### POST /api/users/login
Login and receive JWT token

### GET /api/users/profile
Get user profile (requires authentication)

## Author

Kevin Botha
GitHub: KingKev123
Email: bothakevin423@gmail.com

## License

ISC
