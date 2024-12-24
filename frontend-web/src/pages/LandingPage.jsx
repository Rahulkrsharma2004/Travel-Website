import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const trips = [
    {
      id: 1,
      destination: "Paris",
      date: "2024-05-01",
      description: "Explore the City of Lights with guided tours.",
      price: 999,
    },
    {
      id: 2,
      destination: "Tokyo",
      date: "2024-06-15",
      description: "Experience the culture and cuisine of Japan.",
      price: 1200,
    },
    {
      id: 3,
      destination: "New York",
      date: "2024-07-10",
      description: "Visit iconic landmarks and theaters in NYC.",
      price: 850,
    },
  ];

  return (
    <div className="bg-transparent text-gray-800" >
      {/* Hero Section */}
      <div className="text-yellow-500 py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to TravelExplorer</h1>
        <p className="text-xl">
          Your gateway to the best travel experiences around the world.
        </p>
        <Link
          to="/trips"
          className="mt-8 inline-block px-6 py-3 bg-yellow-100 text-yellow-500 font-semibold rounded-lg hover:bg-yellow-600 hover:text-white transition duration-300"
        >
          Browse Our Trips
        </Link>
      </div>

      {/* About Section */}
      <div className="container mx-auto py-16 px-4 md:px-8">
        <h2 className="text-3xl font-semibold mb-8 text-center">About Us</h2>
        <p className="text-lg leading-relaxed">
          TravelExplorer is a travel agency dedicated to bringing you amazing
          travel experiences. We offer guided tours, adventure trips, and
          cultural experiences around the world. Whether you're looking to relax
          on a beach, explore a new city, or experience a new culture, we have
          the perfect trip for you.
        </p>
      </div>

      {/* Upcoming Trips Section */}
      <div className="py-16 ">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-12">Upcoming Trips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trips.map((trip) => (
              <div
                key={trip.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300"
              >
                <img
                  src={`https://via.placeholder.com/400x250?text=${trip.destination}`} // Placeholder image URL for destination
                  alt={trip.destination}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">
                    {trip.destination}
                  </h3>
                  <p className="text-gray-600 mb-4">{trip.description}</p>
                  <p className="text-yellow-500 font-bold mb-4">
                    ${trip.price}
                  </p>
                  <p className="text-sm text-gray-500">
                    Starting on {new Date(trip.date).toLocaleDateString()}
                  </p>
                  <div className="mt-4 flex justify-between">
                    <Link
                      to={`/trips/${trip.id}`}
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
