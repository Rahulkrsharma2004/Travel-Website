import React from "react";

const TripDetailsModal = ({ trip, onClose }) => {
  if (!trip) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4 sm:p-8">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
        <button
          className="absolute text-3xl sm:text-5xl text-red-500 top-0 right-2 hover:text-red-600 transition duration-300"
          onClick={onClose}
        >
          &times;
        </button>
        <img
          src={trip.image}
          alt={trip.name}
          className="w-full h-48 sm:h-64 object-cover mb-4 rounded-lg"
        />
        <h2 className="text-xl sm:text-2xl font-bold mb-2">{trip.name}</h2>
        <p className="text-yellow-500 font-bold mb-4">Rs - {trip.price}</p>
        <p className="text-sm sm:text-base text-green-500 mb-4">
          Available Slots - {trip.availableSlots}
        </p>
        <p className="text-sm sm:text-base text-black-500 mb-4">
          Starting Trip Date -{" "}
          {new Date(trip.startDate).toLocaleDateString("en-GB")}
        </p>
        <p className="text-sm sm:text-base text-black-500 mb-4">
          End Trip Date - {new Date(trip.endDate).toLocaleDateString("en-GB")}
        </p>
        <p className="text-sm sm:text-base text-black-500 mb-4">
          Cancellation Policy - {trip.cancellationPolicy}
        </p>
        <p className="text-black-700">{trip.description}</p>
      </div>
    </div>
  );
};

export default TripDetailsModal;
