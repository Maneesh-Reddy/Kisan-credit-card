
const api = require('../lib/api');

exports.login = async (credentials) => {
  try {
    const response = await api.post('/auth/login', credentials);
    return response;
  } catch (error) {
    throw error;
  }
};

exports.register = async (userData) => {
  try {
    const response = await api.post('/auth/register', userData);
    return response;
  } catch (error) {
    throw error;
  }
};
