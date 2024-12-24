const User = require("../models/User");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

exports.register = async (req, res) => {
  const { name, email, password, isOrganizer } = req.body;
  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }
    const user = new User({
      name,
      email,
      password,
      isOrganizer,
    });
    await user.save();
    if (user) {
      res.status(201).json({
        message: "Registration successful!",
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
          isOrganizer: user.isOrganizer,
          token: generateToken(user._id),
        },
      });
    } else {
      res.status(400).json({ message: "Invalid user data" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};

exports.login = async (req, res) => {
  const { email, password, isOrganizer } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      if (user.isOrganizer !== isOrganizer) {
        return res
          .status(401)
          .json({ message: "You are not registered as an organizer" });
      }
      if (await user.matchPassword(password)) {
        return res.json({
          message: "Login successful!",
          user: {
            _id: user._id,
            name: user.name,
            email: user.email,
            isOrganizer: user.isOrganizer,
            token: generateToken(user._id),
          },
        });
      }
    }
    res.status(401).json({ message: "Invalid email or password" });
  } catch (error) {
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};

exports.getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (user) {
      res.json({
        message: "User profile retrieved successfully!",
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
          isOrganizer: user.isOrganizer,
        },
      });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};

exports.logout = async (req, res) => {
  try {
    res.status(200).json({ message: "Logout successful!" });
  } catch (error) {
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};
