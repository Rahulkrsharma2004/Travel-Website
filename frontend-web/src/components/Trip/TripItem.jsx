import React from 'react';

const TripItem = ({ trip, deleteTrip, setSelectedTrip }) => {
  console.log(trip)
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <img src={trip.image} alt={trip.name} className="w-full h-48 object-cover rounded mb-4" />
      <h2 className="text-xl font-bold mb-2">{trip.name}</h2>
      <p className="text-sm text-gray-600 mb-2">StartDate :- {trip.startDate} | EndDate :- {trip.endDate}</p>
      <p className="text-gray-800 mb-4">{trip.description}</p>
      <p className="text-lg font-semibold mb-2">Rs - {trip.price}</p>
      <p className="text-sm text-gray-600 mb-4">Available Slots: {trip.availableSlots}</p>
      <p className="text-sm text-gray-600 mb-4">{trip.cancellationPolicy}</p>
      <div className="flex justify-between">
        <button
          onClick={() => setSelectedTrip(trip)}
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition duration-300"
        >
          Edit
        </button>
        <button
          onClick={() => deleteTrip(trip._id)}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TripItem;
