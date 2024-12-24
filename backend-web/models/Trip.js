const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  startDate: {
    type: String,
    required: true,
  },
  endDate: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  availableSlots: {
    type: Number,
    required: true,
  },
  cancellationPolicy: {
    type: String,
    required: true,
  },
  organizer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

module.exports = mongoose.model('Trip', tripSchema);
