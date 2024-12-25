import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserDashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await axios.get('https://travel-web-backend.vercel.app/bookings', { withCredentials: true });
      console.log(response.data);
      setBookings(response.data);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    } finally {
      setLoading(false);
    }
  };

  const cancelBooking = async (bookingId) => {
    try {
      const responce = await axios.delete(`https://travel-web-backend.vercel.app/bookings/cancel/${bookingId}` , { withCredentials: true });
      console.log(responce);
      alert('Booking Cancelled Successfully!');
      setBookings(prevBookings => prevBookings.filter(booking => booking._id !== bookingId));
    } catch (error) {
      console.error('Error cancelling booking:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4 mb-64 text-white flex flex-col items-center">
      <h1 className="text-4xl font-semibold mb-4">User Dashboard (Booked Trips)</h1>
      {bookings.length === 0 ? (
        <p className='text-black'>No bookings found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {bookings.map((booking) => (
            <div key={booking._id} className="backdrop-blur-2xl p-4 rounded shadow-md flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-semibold text-black">Trip Name: {booking.trip.name}</h2>
                <p className="text-sm text-black">Booking Date: {new Date(booking.bookingDate).toLocaleDateString()}</p>
                <p className="text-sm text-black">Price: Rs - {booking.trip.price}</p>
                <p className="text-sm text-black">Cancellation Policy: {booking.trip.cancellationPolicy}</p>
                <p className="text-sm text-black">Start Date: {new Date(booking.trip.startDate).toLocaleDateString()}</p>
                <p className="text-sm text-black">End Date: {new Date(booking.trip.endDate).toLocaleDateString()}</p>
                <p className="text-sm text-black">Description: {booking.trip.description}</p>
              </div>
              <button
                onClick={() => cancelBooking(booking._id)}
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
              >
                Cancel Booking
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserDashboard;
