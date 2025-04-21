const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  mobile: String,
  email: String,
  address: String,
  role: {
    type: String,
    enum: ['farmer', 'staff'],
    default: 'farmer',
  },
});

module.exports = mongoose.model('User', UserSchema);
