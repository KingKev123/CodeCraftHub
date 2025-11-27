const express = require('express');
const { registerUser, loginUser, getProfile } = require('../controllers/userController');
const { validateRegistration, validateLogin } = require('../middleware/validation');
const { authLimiter } = require('../middleware/rateLimiter');
const { verifyToken } = require('../middleware/auth');
const router = express.Router();

/**
 * @route   POST /api/users/register
 * @desc    Register a new user
 * @access  Public
 */
router.post('/register', authLimiter, validateRegistration, registerUser);

/**
 * @route   POST /api/users/login
 * @desc    Login user and return JWT token
 * @access  Public
 */
router.post('/login', authLimiter, validateLogin, loginUser);

/**
 * @route   GET /api/users/profile
 * @desc    Get user profile (protected route)
 * @access  Private
 */
router.get('/profile', verifyToken, getProfile);

module.exports = router;
