const express = require('express');
const { createBooking, getBookings, cancelBooking } = require('../controllers/bookingController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/book', protect, createBooking);
router.get('/', protect, getBookings);
router.delete('/cancel/:id', protect, cancelBooking);

module.exports = router;



// router.route('/').post(protect, createBooking).get(protect, getBookings);
// router.route('/:id').delete(protect, cancelBooking);