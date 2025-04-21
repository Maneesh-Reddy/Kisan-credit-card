const express = require('express');
const router = express.Router();
const Loan = require('../models/Loan');
const multer = require('multer');
const path = require('path');

// Multer Setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueName);
  },
});
const upload = multer({ storage });

// POST route with file upload
router.post('/', upload.array('documents'), async (req, res) => {
  try {
    const {
      amount,
      purpose,
      cropType,
      landArea,
      duration,
      farmerName,
      farmerMobile
    } = req.body;

    const documents = req.files.map((file) => `/uploads/${file.filename}`);

    const loan = new Loan({
      amount,
      purpose,
      cropType,
      landArea,
      duration,
      farmerName,
      farmerMobile,
      status: 'Pending',
      appliedDate: new Date(),
      documents,
    });

    await loan.save();
    res.status(201).json({ message: 'Loan application submitted', loan });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// Get all loans
router.get('/', async (req, res) => {
  try {
    const loans = await Loan.find().sort({ appliedDate: -1 });
    res.json(loans);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
