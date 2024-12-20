import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/TripPage.css';
import { fetchTripById } from '../utils/api';

const TripPage = () => {
  const { id } = useParams();
  const [trip, setTrip] = useState(null);

  useEffect(() => {
    const loadTrip = async () => {
      const data = await fetchTripById(id);
      setTrip(data);
    };
    loadTrip();
  }, [id]);

  if (!trip) {
    return <div className="loading">Loading trip details...</div>;
  }

  return (
    <div className="trip-page">
      <h1>{trip.name}</h1>
      <p>{trip.description}</p>
      <p><strong>Dates:</strong> {trip.dates}</p>
      <p><strong>Price:</strong> ${trip.price}</p>
      <p><strong>Available Slots:</strong> {trip.availableSlots}</p>
      <p><strong>Cancellation Policy:</strong> {trip.cancellationPolicy}</p>
      <button className="book-button">Book Now</button>
    </div>
  );
};

export default TripPage;