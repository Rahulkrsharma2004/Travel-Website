import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import TripDetailsModal from "./TripDetailsModal";
import PaymentModal from "./PaymentModal";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const { isUserLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const response = await axios.get(
          "https://travel-web-backend.vercel.app/trips",
          { withCredentials: true }
        );
        setTrips(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching trips:", error);
      }
    };

    fetchTrips();
  }, []);

  const handleViewDetails = async (tripId) => {
    try {
      const response = await axios.get(
        `https://travel-web-backend.vercel.app/trips/${tripId}`,
        { withCredentials: true }
      );
      setSelectedTrip(response.data);
      setModalOpen(true);
    } catch (error) {
      console.error("Error fetching trip details:", error);
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedTrip(null);
  };

  const handleBookNow = (tripId) => {
    if (!isUserLoggedIn) {
      alert("You must be login for Booked Trip");
      navigate("/login");
    } else {
      const selectedTrip = trips.find((trip) => trip._id === tripId);
      setSelectedTrip(selectedTrip);
      setPaymentModalOpen(true);
    }
  };

  const handlePaymentSuccess = async (tripId) => {
    try {
      const response = await axios.post(
        "https://travel-web-backend.vercel.app/bookings/book",
        { tripId },
        { withCredentials: true }
      );
      console.log(response);
      alert("Trip booked successfully!");
      setPaymentModalOpen(false);
      setSelectedTrip(null);
    } catch (error) {
      console.error("Error booking trip:", error);
      alert("Failed to book trip.");
    }
  };

  return (
    <div className="bg-transparent text-gray-800 font-sans">
      {isUserLoggedIn ? (
        <div className="text-yellow-200 py-10 text-center">
          <h1 className="text-4xl font-bold">
            Now you can book your favorite Upcoming Trip !
          </h1>
        </div>
      ) : (
        <div className="text-yellow-200 py-10 text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to TravelExplorer</h1>
          <p className="text-xl">
            Your gateway to the best travel experiences around the world.
          </p>
        </div>
      )}
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-semibold mb-8 text-center">About Us</h2>
        <p className="text-xl leading-relaxed text-center">
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
          <div className="grid px-5 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loading
              ? Array(trips.length || 6)
                  .fill()
                  .map((_, index) => (
                    <div
                      key={index}
                      className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300"
                    >
                      <Skeleton height={192} />
                      <div className="p-6">
                        <Skeleton height={30} width={`60%`} />
                        <Skeleton
                          height={20}
                          width={`80%`}
                          style={{ margin: "10px 0" }}
                        />
                        <Skeleton height={20} width={`40%`} />
                        <Skeleton
                          height={20}
                          width={`70%`}
                          style={{ margin: "10px 0" }}
                        />
                        <Skeleton height={30} width={`30%`} />
                      </div>
                    </div>
                  ))
              : trips.map((trip) => (
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
                      <p className="text-green-500 mb-4">
                        Available Slots - {trip.availableSlots}
                      </p>
                      <p className="text-sm font-bold text-black-500 mb-4">
                        Starting on{" "}
                        {new Date(trip.startDate).toLocaleDateString("en-GB")}
                      </p>
                      <div className="px-6 mt-4 flex justify-between">
                        <button
                          onClick={() => handleViewDetails(trip._id)}
                          className="text-yellow-500 hover:underline"
                        >
                          View Details
                        </button>
                        <button
                          onClick={() => handleBookNow(trip._id)}
                          className="px-4 py-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition duration-300"
                        >
                          Book now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>
      {modalOpen && (
        <TripDetailsModal trip={selectedTrip} onClose={handleCloseModal} />
      )}
      {paymentModalOpen && (
        <PaymentModal
          trip={selectedTrip}
          onClose={() => setPaymentModalOpen(false)}
          onPaymentSuccess={handlePaymentSuccess}
        />
      )}
    </div>
  );
};

export default LandingPage;
