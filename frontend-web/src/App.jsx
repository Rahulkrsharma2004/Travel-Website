import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
// import TripPage from './pages/TripPage';
// import UserDashboardPage from './pages/UserDashboardPage';
// import OrganizerDashboardPage from './pages/OrganizerDashboardPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/trip/:id" element={<TripPage />} /> */}
        {/* <Route path="/dashboard" element={<UserDashboardPage />} /> */}
        {/* <Route path="/organizer" element={<OrganizerDashboardPage />} /> */}
      </Routes>
    </Router>
  );
};

export default App;