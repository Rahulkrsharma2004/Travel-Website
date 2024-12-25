import React, { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [organizer, setOrganizer] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [isOrganizerLoggedIn, setIsOrganizerLoggedIn] = useState(false);
  const [allUserData, setAllUserData] = useState({});
  const [allOrganizerData, setAllOrganizerData] = useState({});

  useEffect(() => {
    const storedOrganizer = localStorage.getItem("organizer") === "true";
    const storedIsUserLoggedIn = localStorage.getItem("isUserLoggedIn") === "true";
    const storedIsOrganizerLoggedIn = localStorage.getItem("isOrganizerLoggedIn") === "true";
    const storedUserData = localStorage.getItem("allUserData") || "";
    const storedOrganizerData = localStorage.getItem("allOrganizerData") || "";
    setOrganizer(storedOrganizer);
    setIsUserLoggedIn(storedIsUserLoggedIn);
    setIsOrganizerLoggedIn(storedIsOrganizerLoggedIn);
    setAllUserData(storedUserData);
    setAllOrganizerData(storedOrganizerData);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        organizer,
        setOrganizer,
        allUserData,
        setAllUserData,
        allOrganizerData,
        setAllOrganizerData,
        isUserLoggedIn,
        setIsUserLoggedIn,
        isOrganizerLoggedIn,
        setIsOrganizerLoggedIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
