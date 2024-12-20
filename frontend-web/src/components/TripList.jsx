import React, { useState, useEffect } from 'react';
// import './TripList.css';
import { fetchTrips } from '../utils/api';

const TripList = () => {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const loadTrips = async () => {
      const data = await fetchTrips();
      setTrips(data);
    };
    loadTrips();
  }, []);

  return (
    <div className="trip-list">
      {trips.map((trip) => (
        <div key={trip._id} className="trip-card">
          <h2>{trip.name}</h2>
          <p>{trip.description}</p>
          <p><strong>Dates:</strong> {trip.dates}</p>
          <p><strong>Price:</strong> ${trip.price}</p>
          <button>View Details</button>
        </div>
      ))}
    </div>
  );
};

export default TripList;