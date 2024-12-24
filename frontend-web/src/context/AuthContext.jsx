import React, { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [organizer, setOrganizer] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [isOrganizerLoggedIn, setIsOrganizerLoggedIn] = useState(false);
  const [userToken, setUserToken] = useState("");
  const [organizerToken, setOrganizerToken] = useState("");

  useEffect(() => {
    const storedOrganizer = localStorage.getItem("organizer") === "true";
    const storedIsUserLoggedIn = localStorage.getItem("isUserLoggedIn") === "true";
    const storedIsOrganizerLoggedIn = localStorage.getItem("isOrganizerLoggedIn") === "true";
    const storedUserToken = localStorage.getItem("userToken") || "";
    const storedOrganizerToken = localStorage.getItem("organizerToken") || "";
    setOrganizer(storedOrganizer);
    setIsUserLoggedIn(storedIsUserLoggedIn);
    setIsOrganizerLoggedIn(storedIsOrganizerLoggedIn);
    setUserToken(storedUserToken);
    setOrganizerToken(storedOrganizerToken);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        organizer,
        setOrganizer,
        isUserLoggedIn,
        setIsUserLoggedIn,
        userToken,
        setUserToken,
        organizerToken,
        setOrganizerToken,
        isOrganizerLoggedIn,
        setIsOrganizerLoggedIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
