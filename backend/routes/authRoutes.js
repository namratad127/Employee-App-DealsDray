const express = require('express');
const { login, register } = require('../controllers/authController');
const router = express.Router();

// Route for user login
router.post('/login', login);

// Route for user registration (optional)
router.post('/register', register);

module.exports = router;

