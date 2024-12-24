import React from "react";
import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./Routes/AllRoutes";
import { AuthProvider } from "./context/AuthContext";
function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <AllRoutes />
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
