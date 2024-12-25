import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import loginImg from "../../assets/travel-register.png";
import axios from "axios";
import AuthContext from "../../context/AuthContext";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { organizer } = useContext(AuthContext);
  const navigate = useNavigate();


  const handleRegister = async (e) => {
    e.preventDefault();
    // console.log("testing");
    try {
      console.log("organizer", organizer);
      const response = await axios.post(
        "https://travel-web-backend.vercel.app/auth/register",
        {
          name,
          email,
          password,
          isOrganizer: organizer,
        }
      );
      console.log(response);

      if(response.data.message === "Registration successful!" && response.data.user.isOrganizer === true ) {
        toast.success("Organizer Registration successful!");
        alert("Organizer Registration successful!");
        navigate("/login");
      }
      else if(response.data.message === "Registration successful!" && response.data.user.isOrganizer === false ) {
        toast.success("User Registration successful!");
        alert("User Registration successful!");
        navigate("/login");
      }

    } catch (error) {
      console.log(error.message);
      if (error.response && error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Registration failed. Please try again.");
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4.5rem)] p-6">
      <ToastContainer />
      <h1 className="text-3xl font-bold mb-8 text-yellow-700">
        {organizer ? "Organizer Register" : "User Register"}
      </h1>
      <div className="flex flex-col rounded shadow-md bg-white md:flex-row items-center space-x-0 md:space-x-6 space-y-6 md:space-y-0 p-6">
        <img
          src={loginImg}
          alt="Register illustration"
          className="w-72 h-auto hidden md:block"
        />
        <form onSubmit={handleRegister} className="w-full md:w-80">
          <input
            type="text"
            className="border p-2 mb-4 w-full rounded"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
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
            Register
          </button>
          <div className="mt-4 text-center">
            <p>
              Already registered?{" "}
              <Link
                to={organizer ? "/login" : "/login"}
                className="text-yellow-700 hover:underline"
              >
                Login as {organizer ? "Organizer" : "User"}
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
  
};

export default Signup;
