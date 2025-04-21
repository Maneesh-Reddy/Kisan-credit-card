
const User = require('../models/User');

// Store OTPs temporarily (in production, use Redis or similar)
const otpStore = {};

exports.login = async (req, res) => {
  try {
    const { mobile, otp } = req.body;
    
    if (otpStore[mobile] != otp) {
      return res.status(400).json({ message: 'Invalid OTP' });
    }

    delete otpStore[mobile];
    
    const user = await User.findOne({ mobile });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.register = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
