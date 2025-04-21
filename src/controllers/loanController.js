
const api = require('../lib/api');

exports.submitLoanApplication = async (loanData) => {
  try {
    const response = await api.post('/loans', loanData);
    return response;
  } catch (error) {
    throw error;
  }
};

exports.getLoanApplications = async () => {
  try {
    const response = await api.get('/loans');
    return response;
  } catch (error) {
    throw error;
  }
};

exports.updateLoanStatus = async (loanId, status) => {
  try {
    const response = await api.post(`/loans/${loanId}/status`, { status });
    return response;
  } catch (error) {
    throw error;
  }
};
