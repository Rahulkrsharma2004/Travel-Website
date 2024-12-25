import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    setOrganizer,
    isOrganizerLoggedIn,
    setIsOrganizerLoggedIn,
    isUserLoggedIn,
    setIsUserLoggedIn,
  } = useContext(AuthContext);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleOrganizerLogin = () => {
    localStorage.setItem("organizer", "true");
    setOrganizer(true);
    navigate("/login");
  };

  const handleOrganizerLogout = async () => {
    try {
      const response = await axios.post(
        "https://travel-web-backend.vercel.app/auth/logout",
        {},
        { withCredentials: true }
      );
      console.log(response);
      if (response.data.message === "Logout successful!") {
        setOrganizer(false);
        setIsOrganizerLoggedIn(false);
        localStorage.setItem("organizer", "false");
        localStorage.setItem("isOrganizerLoggedIn", false);
        localStorage.setItem("allOrganizerData", "");
        Cookies.remove("token");
        toast.success("Organizer Logout successful!");
        alert("Organizer Logout successful!");
        navigate("/");
      }
    } catch (error) {
      console.log(error.message);
      alert("Logout failed. Please try again.");
    }
  };

  const handleUserLogin = () => {
    localStorage.setItem("organizer", "false");
    setOrganizer(false);
    navigate("/login");
  };

  const handleUserLogout = async () => {
    try {
      const response = await axios.post(
        "https://travel-web-backend.vercel.app/auth/logout",
        {},
        { withCredentials: true }
      );
      console.log(response);
      if (response.data.message === "Logout successful!") {
        localStorage.setItem("allUserData", "");
        localStorage.setItem("isUserLoggedIn", false);
        setIsUserLoggedIn(false);
        Cookies.remove("token");
        toast.success("User Logout successful!");
        alert("User Logout successful!");
        navigate("/");
      }
    } catch (error) {
      console.log(error.message);
      alert("Logout failed. Please try again.");
    }
  };

  return (
    <nav className="bg-white p-4 shadow-lg ">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          {isOrganizerLoggedIn ? (
            <div
              className="text-white text-2xl font-bold tracking-wide"
            >
              <img
                src="https://explorertours.al/wp-content/uploads/2016/08/explorerlogo.png"
                alt="Explorer Travel Logo"
                className="w-[12rem] h-auto"
              />
            </div>
          ) : (
            <Link
              to="/"
              className="text-white text-2xl font-bold tracking-wide"
            >
              <img
                src="https://explorertours.al/wp-content/uploads/2016/08/explorerlogo.png"
                alt="Explorer Travel Logo"
                className="w-[12rem] h-auto"
              />
            </Link>
          )}
        </div>
        <div className="hidden md:flex space-x-4">
          {isOrganizerLoggedIn ? (
            <>
              <button
                onClick={() => navigate("/organizer-dashboard")}
                className="bg-green-300 hover:bg-yellow-200 px-4 py-2 rounded transition duration-300 ease-in-out"
              >
                Dashboard
              </button>
              <button
                onClick={handleOrganizerLogout}
                className="bg-red-200 hover:bg-yellow-200 px-4 py-2 rounded transition duration-300 ease-in-out"
              >
                Organizer Logout
              </button>
            </>
          ) : isUserLoggedIn ? (
            <>
              <button
                onClick={() => navigate("/user-dashboard")}
                className="bg-green-300 hover:bg-yellow-200 px-4 py-2 rounded transition duration-300 ease-in-out"
              >
                User Dashboard
              </button>
              <button
                onClick={handleUserLogout}
                className="bg-red-200 hover:bg-yellow-200 px-4 py-2 rounded transition duration-300 ease-in-out"
              >
                User Logout
              </button>
            </>
          ) : (
            <>
              <button
                onClick={handleUserLogin}
                className="bg-blue-200 hover:bg-yellow-200 px-4 py-2 rounded transition duration-300 ease-in-out"
              >
                User Login
              </button>
              <button
                onClick={handleOrganizerLogin}
                className="bg-blue-200 hover:bg-yellow-200 px-4 py-2 rounded transition duration-300 ease-in-out"
              >
                Organizer Login
              </button>
            </>
          )}
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden transition duration-500 ease-in-out`}
      >
        {isOrganizerLoggedIn ? (
          <>
            <button
              onClick={() => navigate("/organizer-dashboard")}
              className="bg-green-300 hover:bg-yellow-200 px-4 py-2 rounded transition duration-300 ease-in-out"
            >
              Dashboard
            </button>
            <button
              onClick={handleOrganizerLogout}
              className="bg-red-200 hover:bg-yellow-200 px-4 py-2 rounded transition duration-300 ease-in-out"
            >
              Organizer Logout
            </button>
          </>
        ) : isUserLoggedIn ? (
          <>
            <button
              onClick={() => navigate("/user-dashboard")}
              className="bg-green-300 hover:bg-yellow-200 px-4 py-2 rounded transition duration-300 ease-in-out"
            >
              User Dashboard
            </button>
            <button
              onClick={handleUserLogout}
              className="bg-red-200 hover:bg-yellow-200 px-4 py-2 rounded transition duration-300 ease-in-out"
            >
              User Logout
            </button>
          </>
        ) : (
          <>
            <button
              onClick={handleUserLogin}
              className="bg-blue-300 hover:bg-yellow-200 px-4 py-2 rounded transition duration-300 ease-in-out"
            >
              User Login
            </button>
            <button
              onClick={handleOrganizerLogin}
              className="bg-blue-300 hover:bg-yellow-200 px-4 py-2 rounded transition duration-300 ease-in-out"
            >
              Organizer Login
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
