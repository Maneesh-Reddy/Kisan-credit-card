
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const generateToken = (user) => {
  return jwt.sign({ id: user._id, role: user.role }, 'your_jwt_secret', {
    expiresIn: '30d',
  });
};

const verifyToken = async (token) => {
  try {
    const decoded = jwt.verify(token, 'your_jwt_secret');
    const user = await User.findById(decoded.id);
    return user;
  } catch (error) {
    return null;
  }
};

module.exports = { generateToken, verifyToken };
