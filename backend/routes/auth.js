const express = require('express');
const router = express.Router();
const User = require('../models/User');

let otpStore = {};

// ✅ Send OTP only if user exists
router.post('/send-otp', async (req, res) => {
  const { mobile } = req.body;

  const user = await User.findOne({ mobile });
  if (!user) return res.status(404).send('User not found');

  const otp = Math.floor(100000 + Math.random() * 900000);
  otpStore[mobile] = otp;
  console.log(`OTP for ${mobile}: ${otp}`);
  res.send('OTP sent');
});

// ✅ Verify OTP and return user data
router.post('/verify-otp', async (req, res) => {
  const { mobile, otp } = req.body;

  if (otpStore[mobile] != otp) {
    return res.status(400).send('Invalid OTP');
  }

  delete otpStore[mobile];

  const user = await User.findOne({ mobile });
  if (!user) return res.status(404).send('User not found');

  res.json(user);
});

module.exports = router;
