const mongoose = require('mongoose');

const LoanSchema = new mongoose.Schema({
  amount: String,
  purpose: String,
  cropType: String,
  landArea: String,
  duration: String,
  farmerName: String,
  farmerMobile: String,
  status: {
    type: String,
    enum: ['Pending', 'Approved', 'Rejected'],
    default: 'Pending',
  },
  appliedDate: Date,
  documents: [String],
});

module.exports = mongoose.model('Loan', LoanSchema);
