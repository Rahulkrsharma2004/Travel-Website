import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const LandingPage = () => {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const response = await axios.get('https://travel-web-backend.vercel.app/trips', { withCredentials: true });
        setTrips(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching trips:', error);
        alert('Failed to load trips.');
      }
    };

    fetchTrips();
  }, []);

  return (
    <div className="bg-transparent text-gray-800 font-sans">
      <div className="text-yellow-200 py-10 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to TravelExplorer</h1>
        <p className="text-xl">
          Your gateway to the best travel experiences around the world.
        </p>
      </div>

      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-semibold mb-8 text-center">About Us</h2>
        <p className="text-xl leading-relaxed text-center ">
          TravelExplorer is a travel agency dedicated to bringing you amazing
          travel experiences. We offer guided tours, adventure trips, and
          cultural experiences around the world. Whether you're looking to relax
          on a beach, explore a new city, or experience a new culture, we have
          the perfect trip for you.
        </p>
      </div>

      <div className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-12">Upcoming Trips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loading ? (
              Array(6).fill().map((_, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300"
                >
                  <Skeleton height={192} />
                  <div className="p-6">
                    <Skeleton height={30} width={`60%`} />
                    <Skeleton height={20} width={`80%`} style={{ margin: '10px 0' }} />
                    <Skeleton height={20} width={`40%`} />
                    <Skeleton height={20} width={`70%`} style={{ margin: '10px 0' }} />
                    <Skeleton height={30} width={`30%`} />
                  </div>
                </div>
              ))
            ) : (
              trips.map((trip) => (
                <div
                  key={trip._id}
                  className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300"
                >
                  <img
                    src={trip.image}
                    alt={trip.image}
                    className="w-full h-48 object-cover hover:scale-105 transition duration-300"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold mb-2">
                      {trip.name}
                    </h3>
                    <p className="text-yellow-500 font-bold mb-4">
                      Rs - {trip.price}
                    </p>
                    <p className="text-sm text-gray-500">
                      Starting on {new Date(trip.startDate).toLocaleDateString('en-GB')}
                    </p>
                    <div className="mt-4 flex justify-between">
                      <Link
                        to={`/trips/${trip._id}`}
                        className="text-yellow-500 hover:underline"
                      >
                        View Details
                      </Link>
                      <button className="px-4 py-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition duration-300">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
