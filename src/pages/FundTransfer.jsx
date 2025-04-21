import React, { useState } from 'react';

const FundTransfer = () => {
  const [amount, setAmount] = useState('');
  const [recipient, setRecipient] = useState('');
  const [message, setMessage] = useState('');

  const handleTransfer = () => {
    if (!amount || !recipient) {
      setMessage('Please fill out all fields.');
      return;
    }

    const options = {
      key: 'rzp_test_NiZsX5sz9bMYT6', // replace with your Razorpay key ID
      amount: parseInt(amount) * 100, // amount in paise
      currency: 'INR',
      name: 'KCC Bank',
      description: `Transfer to ${recipient}`,
      handler: function (response) {
        setMessage(`Payment Successful! Transaction ID: ${response.razorpay_payment_id}`);
      },
      prefill: {
        name: recipient,
        email: 'user@example.com',
        contact: '9876543210',
      },
      theme: {
        color: '#10B981', // Tailwind green
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-8">Fund Transfer</h1>
      <div className="bg-white p-6 rounded-xl shadow-md max-w-lg mx-auto">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">Transfer Funds</h2>
        <div className="space-y-4">
          <div>
            <label className="text-lg text-gray-600">Recipient's Account</label>
            <input
              type="text"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              className="w-full mt-2 p-3 border rounded-md"
              placeholder="Enter recipient's name or account"
            />
          </div>
          <div>
            <label className="text-lg text-gray-600">Amount (₹)</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full mt-2 p-3 border rounded-md"
              placeholder="Enter amount"
            />
          </div>
          <button
            onClick={handleTransfer}
            className="w-full mt-4 p-3 bg-green-500 text-white rounded-md hover:bg-green-600"
          >
            Pay with Razorpay
          </button>
          {message && <p className="mt-4 text-center text-xl text-gray-600">{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default FundTransfer;
