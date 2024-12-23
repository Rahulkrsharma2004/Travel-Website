const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const tripRoutes = require("./routes/tripRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const cors = require("cors");

dotenv.config();
connectDB();

const app = express();

app.use(express.json());

app.use(cors({origin: ["http://localhost:5173","https://travel-web-backend.vercel.app","https://travel-website-rk.vercel.app",],
    credentials: true,
  })
);

app.use("/auth", authRoutes);
app.use("/trips", tripRoutes);
app.use("/bookings", bookingRoutes);

const PORT = process.env.PORT || 5000;
app.use("/", (req, res) => {
  res.send("Welcome to the backend HomePage");
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
