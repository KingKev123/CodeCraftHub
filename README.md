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

## Docker Deployment

### Prerequisites
- Docker installed
- Docker Compose installed

### Quick Start with Docker

1. Build and start containers:
```bash
docker-compose up -d
```

2. Check container status:
```bash
docker-compose ps
```

3. View logs:
```bash
docker-compose logs -f user-service
```

4. Stop containers:
```bash
docker-compose down
```

5. Stop and remove all data:
```bash
docker-compose down -v
```

### Docker Commands

**Build containers:**
```bash
docker-compose build
```

**Start containers:**
```bash
docker-compose up -d
```

**Stop containers:**
```bash
docker-compose down
```

**View logs:**
```bash
docker-compose logs -f
```

**Access MongoDB shell:**
```bash
docker exec -it mongodb mongo user-management
```

**Access application container:**
```bash
docker exec -it user-management-service sh
```

### Environment Variables for Docker

You can override environment variables by creating a `.env` file:
```env
JWT_SECRET=your-super-secret-key
NODE_ENV=production
PORT=5000
```

### Testing the Dockerized Application

Once containers are running, test the API:
```bash
# Health check
curl http://localhost:5000/health

# Register user
curl -X POST http://localhost:5000/api/users/register \
  -H "Content-Type: application/json" \
  -d '{"username":"testuser","email":"test@example.com","password":"Test123!"}'

# Login
curl -X POST http://localhost:5000/api/users/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"Test123!"}'
```
