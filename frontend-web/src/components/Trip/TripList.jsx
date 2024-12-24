import React from 'react';
import TripItem from './TripItem';

const TripList = ({ trips, deleteTrip, setSelectedTrip }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {trips.map((trip,index) => (
        <TripItem key={trip.id||index} trip={trip} deleteTrip={deleteTrip} setSelectedTrip={setSelectedTrip} />
      ))}
    </div>
  );
};

export default TripList;
