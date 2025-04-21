const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/register', async (req, res) => {
  try {
    const { name, mobile, email, address, role } = req.body;

    const existing = await User.findOne({ mobile });
    if (existing) return res.status(400).send('User already exists');

    const user = new User({ name, mobile, email, address, role });
    await user.save();
    res.send('User registered');
  } catch (err) {
    res.status(500).send('Registration failed');
  }
});

router.put('/:mobile', async (req, res) => {
  try {
    const updated = await User.findOneAndUpdate(
      { mobile: req.params.mobile },
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).send('Update failed');
  }
});

router.get('/:mobile', async (req, res) => {
  try {
    const user = await User.findOne({ mobile: req.params.mobile });
    res.json(user);
  } catch (err) {
    res.status(500).send('User not found');
  }
});

const auth = require('../middleware/auth');
const { updateProfile, getAllFarmers } = require('../controllers/userController');

router.put('/profile', auth, updateProfile);
router.get('/farmers', auth, getAllFarmers);

module.exports = router;