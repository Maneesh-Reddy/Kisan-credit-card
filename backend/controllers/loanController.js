
const Loan = require('../models/Loan');

exports.createLoan = async (req, res) => {
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

    const documents = req.files ? req.files.map(file => `/uploads/${file.filename}`) : [];

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
      documents
    });

    await loan.save();
    res.status(201).json({ message: 'Loan application submitted', loan });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

exports.getLoans = async (req, res) => {
  try {
    const loans = await Loan.find().sort({ appliedDate: -1 });
    res.json(loans);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

exports.updateLoanStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    
    const loan = await Loan.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );
    
    if (!loan) {
      return res.status(404).json({ message: 'Loan not found' });
    }
    
    res.json(loan);
  } catch (err) {
    res.status(500).send('Server error');
  }
};
