const express = require('express');
const { getTrips, getTripById, createTrip, updateTrip, deleteTrip } = require('../controllers/tripController');
const { protect, organizer } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', getTrips);
router.post('/create', protect, createTrip);
router.get('/:id', getTripById);
router.put('/update/:id', protect, updateTrip);
router.delete('/delete/:id', protect, deleteTrip);

module.exports = router;



// router.route('/').get(getTrips).post(protect, organizer, createTrip);
// router.route('/:id').get(getTripById).put(protect, organizer, updateTrip).delete(protect, organizer, deleteTrip);