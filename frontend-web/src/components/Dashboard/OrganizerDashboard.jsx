import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TripForm from '../Trip/TripForm';
import TripList from '../Trip/TripList';

const OrganizerDashboard = () => {
  const [trips, setTrips] = useState([]);
  const [selectedTrip, setSelectedTrip] = useState(null);

  useEffect(() => {
    fetchTrips();
  }, []);

  const fetchTrips = async () => {
    try {
      const response = await axios.get('https://travel-web-backend.vercel.app/trips', { withCredentials: true });
      console.log(response.data);
      setTrips(response.data);
    } catch (error) {
      console.error('Error fetching trips:', error);
      alert('Failed to load trips.');
    }
  };

  const createTrip = async (trip) => {
    console.log('Creating trip:', trip);
    try {
      const response = await axios.post('https://travel-web-backend.vercel.app/trips/create/', trip, { withCredentials: true });
      console.log(response);
      setTrips(prevTrips => [...prevTrips, response.data]);
      alert('Trip created successfully!');
    } catch (error) {
      console.error('Error creating trip:', error);
      alert('Failed to create trip.');
    }
  };

  const updateTrip = async (trip) => {
    try {
      const response = await axios.put(`https://travel-web-backend.vercel.app/trips/update/${trip._id}`, trip, { withCredentials: true });
      setTrips(prevTrips => prevTrips.map(t => t._id === trip._id ? response.data : t));
      setSelectedTrip(null);
      alert('Trip updated successfully!');
    } catch (error) {
      console.error('Error updating trip:', error);
      alert('Failed to update trip.');
    }
  };

  const deleteTrip = async (id) => {
    console.log('Deleting trip:', id);
    try {
      await axios.delete(`https://travel-web-backend.vercel.app/trips/delete/${id}`, { withCredentials: true });
      setTrips(prevTrips => prevTrips.filter(t => t._id !== id));
      alert('Trip deleted successfully!');
    } catch (error) {
      console.error('Error deleting trip:', error);
      alert('Failed to delete trip.');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Organizer Dashboard</h1>
      <TripForm createTrip={createTrip} updateTrip={updateTrip} selectedTrip={selectedTrip} setSelectedTrip={setSelectedTrip} />
      <TripList trips={trips} deleteTrip={deleteTrip} setSelectedTrip={setSelectedTrip} />
    </div>
  );
};

export default OrganizerDashboard;
