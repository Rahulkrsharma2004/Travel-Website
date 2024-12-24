import React, { useState, useEffect } from 'react';

const TripForm = ({ createTrip, updateTrip, selectedTrip, setSelectedTrip }) => {
  const [trip, setTrip] = useState({
    name: '',
    description: '',
    startDate: '',
    endDate: '',
    price: '',
    availableSlots: '',
    cancellationPolicy: '',
    image: ''
  });

  useEffect(() => {
    if (selectedTrip) {
      setTrip(selectedTrip);
    } else {
      setTrip({
        name: '',
        description: '',
        startDate: '',
        endDate: '',
        price: '',
        availableSlots: '',
        cancellationPolicy: '',
        image: ''
      });
    }
  }, [selectedTrip]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTrip({ ...trip, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedTrip) {
      updateTrip(trip);
    } else {
      createTrip(trip);
    }
    setTrip({
      name: '',
      description: '',
      startDate: '',
      endDate: '',
      price: '',
      availableSlots: '',
      cancellationPolicy: '',
      image: ''
    });
  };

  const handleCancel = () => {
    setSelectedTrip(null);
    setTrip({
      name: '',
      description: '',
      startDate: '',
      endDate: '',
      price: '',
      availableSlots: '',
      cancellationPolicy: '',
      image: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="backdrop-blur-2xl w-full md:w-2/3 p-4 rounded shadow-md mb-4 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={trip.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Description</label>
            <textarea
              name="description"
              value={trip.description}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Start Date</label>
            <input
              type="date"
              name="startDate"
              value={trip.startDate}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">End Date</label>
            <input
              type="date"
              name="endDate"
              value={trip.endDate}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
        </div>
        <div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Price</label>
            <input
              type="number"
              name="price"
              value={trip.price}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Available Slots</label>
            <input
              type="number"
              name="availableSlots"
              value={trip.availableSlots}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Cancellation Policy</label>
            <textarea
              name="cancellationPolicy"
              value={trip.cancellationPolicy}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Image URL</label>
            <input
              type="text"
              name="image"
              value={trip.image}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
          {selectedTrip ? 'Update Trip' : 'Create Trip'}
        </button>
        {selectedTrip && (
          <button type="button" onClick={handleCancel} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition duration-300">
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default TripForm;
