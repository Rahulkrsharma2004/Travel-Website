const jwt = require("jsonwebtoken");
const User = require("../models/User");
const dotenv = require("dotenv");
dotenv.config();

exports.protect = async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Not authorized, no token" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select("-password");
    next();
  } catch (error) {
    res.status(401).json({ message: "Not authorized, token failed" });
  }
};

exports.organizer = (req, res, next) => {
  if (req.user && req.user.isOrganizer) {
    next();
  } else {
    res.status(401).json({ message: "Not authorized as an organizer" });
  }
};
