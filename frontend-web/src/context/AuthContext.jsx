import React, { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [organizer, setOrganizer] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [isOrganizerLoggedIn, setIsOrganizerLoggedIn] = useState(false);
  const [userID, setUserID] = useState("");
  const [organizerID, setOrganizerID] = useState("");
  const [userName,setUserName] = useState("");
  const [organizerName,setOrganizerName] = useState("");


  useEffect(() => {
    const storedOrganizer = localStorage.getItem("organizer") === "true";
    const storedIsUserLoggedIn = localStorage.getItem("isUserLoggedIn") === "true";
    const storedIsOrganizerLoggedIn = localStorage.getItem("isOrganizerLoggedIn") === "true";
    const storedUserID = localStorage.getItem("userID") || "";
    const storedOrganizerID = localStorage.getItem("organizerID") || "";
    const storedUserName = localStorage.getItem("userName") || "";
    const storedOrganizerName = localStorage.getItem("organizerName") || "";
    setOrganizer(storedOrganizer);
    setIsUserLoggedIn(storedIsUserLoggedIn);
    setIsOrganizerLoggedIn(storedIsOrganizerLoggedIn);
    setUserID(storedUserID);
    setOrganizerID(storedOrganizerID);
    setUserName(storedUserName);
    setOrganizerName(storedOrganizerName);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        userID,
        userName,
        organizer,
        setUserID,
        setUserName,
        organizerID,
        setOrganizer,
        organizerName,
        isUserLoggedIn,
        setOrganizerID,
        setOrganizerName,
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
