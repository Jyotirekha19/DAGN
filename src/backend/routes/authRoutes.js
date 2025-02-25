// const express = require("express");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const User = require("../models/user");

// const router = express.Router();

// // Signup Route
// router.post("/signup", async (req, res) => {
//   try {
//     const { name, email, password } = req.body;

//     // Check if user already exists
//     let user = await User.findOne({ email });
//     if (user) return res.status(400).json({ message: "User already exists" });

//     // Hash Password
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     // Create new user
//     user = new User({
//       name,
//       email,
//       password: hashedPassword,
//     });

//     await user.save();

//     // Generate JWT Token
//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

//     res.status(201).json({ token, userId: user._id, name: user.name });
//   } catch (error) {
//     res.status(500).json({ message: "Server error", error });
//   }
// });

// module.exports = router;


const express = require('express');
const User = require('../models/user');
const router = express.Router();
const { getCaseHistories } = require('../controllers/caseHistoriesController');

router.get('/', getCaseHistories);

router.post('/signup', async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    // Check if the email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use" });
    }

    // Save new user
    const newUser = new User({ fullName, email, password });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
