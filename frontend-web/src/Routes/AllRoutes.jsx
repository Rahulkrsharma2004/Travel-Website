// App.js
import React from "react";
import {  Route, Routes } from "react-router-dom";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import Login from "../components/Auth/Login";
import Signup from "../components/Auth/Signup";
import LandingPage from "../pages/LandingPage";
import UserDashboard from "../components/Dashboard/UserDashboard.jsx";
import OrganizerDashboard from "../components/Dashboard/OrganizerDashboard";

function AllRoutes() {
  return (
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<LandingPage/>}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Signup/>}></Route>
          <Route path="/user-dashboard" element={<UserDashboard/>}></Route>
          <Route path="/organizer-dashboard" element={<OrganizerDashboard/>}></Route>
          {/* <Route path="/admin-login" element={<AdminLogin />}></Route> */}
          {/* <Route path="/admin-register" element={<AdminRegister />}></Route> */}
          {/* <Route path="/order" element={<OrderPage />}></Route> */}
          {/* <Route path="/admin-dashboard" element={<AdminDashboard />}></Route> */}
        </Routes>
        <Footer/>
      </div>
  );
}

export default AllRoutes;
