const Trip = require('../models/Trip');

exports.getTrips = async (req, res) => {
  const trips = await Trip.find();
  res.json(trips);
};

// exports.getTrips = async (req, res) => {
//   const trips = await Trip.find({organizer: req.user._id}).populate('trip');
//   res.json(trips);
// };

exports.getTripById = async (req, res) => {
  const trip = await Trip.findById(req.params.id);
  if (trip) {
    res.json(trip);
  } else {
    res.status(404).json({ message: 'Trip not found' });
  }
};

exports.createTrip = async (req, res) => {
  const { image,name, description, startDate,endDate, price, availableSlots, cancellationPolicy } = req.body;
  const trip = new Trip({
    image,
    name,
    description,
    startDate,
    endDate,
    price,
    availableSlots,
    cancellationPolicy,
    organizer: req.user._id,
  });

  const createdTrip = await trip.save();
  res.status(201).json(createdTrip);
};

exports.updateTrip = async (req, res) => {
  const { image,name, description, startDate,endDate, price, availableSlots, cancellationPolicy } = req.body;
  const trip = await Trip.findById(req.params.id);

  if (trip) {
    trip.image = image;
    trip.name = name;
    trip.description = description;
    trip.startDate = startDate;
    trip.endDate = endDate;
    trip.price = price;
    trip.availableSlots = availableSlots;
    trip.cancellationPolicy = cancellationPolicy;

    const updatedTrip = await trip.save();
    res.json(updatedTrip);
  } else {
    res.status(404).json({ message: 'Trip not found' });
  }
};

exports.deleteTrip = async (req, res) => {
    try {
      const trip = await Trip.findById(req.params.id);
      if (trip) {
        await trip.deleteOne();
        res.json({ message: 'Trip removed' });
      } else {
        res.status(404).json({ message: 'Trip not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
