import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import registerImg from "../../assets/travel-register.png";
import axios from "axios";
import AuthContext from "../../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { organizer, setIsUserLoggedIn, setIsOrganizerLoggedIn,setUserName,setOrganizerName} =
    useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://travel-web-backend.vercel.app/auth/login",
        {
          email,
          password,
          isOrganizer: organizer,
        },
        { withCredentials: true }
      );
      console.log(response);
      if (
        response.data.message === "Login successful!" &&
        response.data.user.isOrganizer === true
      ) {
        let firstName = response.data.user.name.charAt(0).toUpperCase();
        setIsOrganizerLoggedIn(true);
        setOrganizerName(firstName);
        localStorage.setItem("isOrganizerLoggedIn", true);
        localStorage.setItem("organizerID", response.data.user._id);
        localStorage.setItem("organizerName",firstName);
        toast.success("Organizer Login successful!");
        alert("Organizer Login successful!");
        navigate("/organizer-dashboard");
      } else if (
        response.data.message === "Login successful!" &&
        response.data.user.isOrganizer === false
      ) {
        let firstName = response.data.user.name.charAt(0).toUpperCase();
        setIsUserLoggedIn(true);
        setUserName(firstName);
        localStorage.setItem("isUserLoggedIn", true);
        localStorage.setItem("userID", response.data.user._id);
        localStorage.setItem("userName",firstName);
        toast.success("User Login successful!");
        alert("User Login successful!");
        navigate("/");
      }
    } catch (error) {
      if (error.response && error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Login failed. Please try again.");
      }
    }
  };

  return (
    <div className="flex flex-col items-center min-h-[calc(100vh-4.5rem)] justify-center p-6">
      <ToastContainer />
      <h1 className="text-3xl font-bold mb-8 text-yellow-700">
        {organizer ? "Organizer Login" : "User Login"}
      </h1>
      <div className="backdrop-blur-sm bg-opacity-100 flex flex-col rounded shadow-md bg-white md:flex-row items-center space-x-0 md:space-x-6 space-y-6 md:space-y-0 p-6">
        <img
          src={registerImg}
          alt="Login illustration"
          className="w-72 h-auto hidden md:block"
        />
        <form onSubmit={handleLogin} className="w-full md:w-80">
          <input
            type="email"
            className="border p-2 mb-4 w-full rounded"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="border p-2 mb-4 w-full rounded"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="px-4 py-2 bg-yellow-500 text-white rounded w-full hover:bg-yellow-600 transition duration-300"
          >
            {organizer ? "Organizer Login" : "User Login"}{" "}
            {/* Conditional button text */}
          </button>
          <div className="mt-4 text-center">
            <p>
              {organizer ? "Not an Organizer?" : "Don't have an account?"}{" "}
              <Link
                to={"/register"}
                className="text-yellow-700 hover:underline"
              >
                {organizer ? "Register as Organizer" : "Register"}
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
