const Booking = require('../models/Booking');
const Trip = require('../models/Trip');

exports.createBooking = async (req, res) => {
  const { tripId } = req.body;

  const trip = await Trip.findById(tripId);
  if (trip && trip.availableSlots > 0) {
    const booking = new Booking({
      trip: tripId,
      user: req.user._id,
    });

    trip.availableSlots -= 1;
    await trip.save();

    const createdBooking = await booking.save();
    res.status(201).json(createdBooking);
  } else {
    res.status(400).json({ message: 'No available slots' });
  }
};

exports.getBookings = async (req, res) => {
  const bookings = await Booking.find({ user: req.user._id }).populate('trip');
  res.json(bookings);
};

exports.cancelBooking = async (req, res) => {
  const booking = await Booking.findById(req.params.id).populate('trip');
//   console.log(booking);
  if (booking) {
    const cancellationDate = new Date();
    const tripDate = new Date(booking.trip.dates);
    const timeDiff = tripDate - cancellationDate;
    const dayDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

    let refund = 0;
    if (dayDiff >= 15) {
      refund = booking.trip.price;
    } else if (dayDiff >= 7) {
      refund = booking.trip.price * 0.5;
    }

    booking.trip.availableSlots += 1;
    await booking.trip.save();
    await booking.deleteOne();

    res.json({ message: 'Booking cancelled', refund });
  } else {
    res.status(404).json({ message: 'Booking not found' });
  }
};
