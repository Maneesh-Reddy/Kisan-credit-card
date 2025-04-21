
const api = require('../lib/api');

exports.getUserProfile = async () => {
  try {
    const response = await api.get('/users/profile');
    return response;
  } catch (error) {
    throw error;
  }
};

exports.updateUserProfile = async (userData) => {
  try {
    const response = await api.post('/users/profile', userData);
    return response;
  } catch (error) {
    throw error;
  }
};

exports.getAllFarmers = async () => {
  try {
    const response = await api.get('/users/farmers');
    return response;
  } catch (error) {
    throw error;
  }
};
