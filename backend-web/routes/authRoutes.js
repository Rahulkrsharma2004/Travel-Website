const express = require('express');
const { register, login, getUserProfile ,logout} = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);
router.get('/profile', protect, getUserProfile);

module.exports = router;
