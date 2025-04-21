// src/pages/AccountSummary.jsx
import React, { useState, useEffect } from 'react';

const AccountSummary = () => {
  const [accountSummary, setAccountSummary] = useState({
    accountBalance: 50000,
    totalLoans: 150000,
    activeLoans: 2,
    nextDue: 5000,
    repaymentStatus: 'On Track',
    nextDueDate: 'March 30, 2026',
    recentLoans: [
      { id: 1, amount: 100000, purpose: 'Crop Cultivation', status: 'Pending', date: '2025-03-15' },
      { id: 2, amount: 50000, purpose: 'Equipment Purchase', status: 'Approved', date: '2025-03-10' },
    ],
    recentTransactions: [
      { date: '2025-03-15', description: 'Loan Disbursement', amount: 25000, type: 'Credit' },
    ],
  });

  useEffect(() => {
  }, []);

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-8">Account Summary</h1>

      {/* Account Overview */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold text-gray-700">Account Overview</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-6">
          <div className="flex flex-col items-center bg-gray-100 p-4 rounded-xl">
            <h3 className="text-lg font-medium text-gray-600">Account Balance</h3>
            <p className="text-2xl text-green-600">₹{accountSummary.accountBalance}</p>
          </div>
          <div className="flex flex-col items-center bg-gray-100 p-4 rounded-xl">
            <h3 className="text-lg font-medium text-gray-600">Total Loans</h3>
            <p className="text-2xl text-red-600">₹{accountSummary.totalLoans}</p>
          </div>
          <div className="flex flex-col items-center bg-gray-100 p-4 rounded-xl">
            <h3 className="text-lg font-medium text-gray-600">Active Loans</h3>
            <p className="text-2xl text-blue-600">{accountSummary.activeLoans}</p>
          </div>
        </div>
      </div>

      {/* Loan Details */}
      <div className="bg-white p-6 mt-8 rounded-xl shadow-md">
        <h3 className="text-xl font-semibold text-gray-700">Next Due</h3>
        <p className="text-lg text-gray-600 mt-2">₹{accountSummary.nextDue}</p>
        <h3 className="text-xl font-semibold text-gray-700 mt-4">Repayment Status</h3>
        <p className="text-lg text-gray-600 mt-2">{accountSummary.repaymentStatus}</p>
        <h3 className="text-xl font-semibold text-gray-700 mt-4">Next Due Date</h3>
        <p className="text-lg text-gray-600 mt-2">{accountSummary.nextDueDate}</p>
      </div>

      {/* Recent Loan Applications */}
      <div className="bg-white p-6 mt-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Recent Loan Applications</h2>
        <table className="min-w-full bg-white">
          <thead>
            <tr className="border-b">
              <th className="px-4 py-2 text-left text-sm text-gray-600">ID</th>
              <th className="px-4 py-2 text-left text-sm text-gray-600">Amount</th>
              <th className="px-4 py-2 text-left text-sm text-gray-600">Purpose</th>
              <th className="px-4 py-2 text-left text-sm text-gray-600">Status</th>
              <th className="px-4 py-2 text-left text-sm text-gray-600">Date</th>
            </tr>
          </thead>
          <tbody>
            {accountSummary.recentLoans.map((loan) => (
              <tr key={loan.id} className="border-b">
                <td className="px-4 py-2 text-sm">{loan.id}</td>
                <td className="px-4 py-2 text-sm">₹{loan.amount}</td>
                <td className="px-4 py-2 text-sm">{loan.purpose}</td>
                <td className={`px-4 py-2 text-sm ${loan.status === 'Pending' ? 'text-yellow-500' : 'text-green-500'}`}>
                  {loan.status}
                </td>
                <td className="px-4 py-2 text-sm">{loan.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white p-6 mt-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Recent Transactions</h2>
        <table className="min-w-full bg-white">
          <thead>
            <tr className="border-b">
              <th className="px-4 py-2 text-left text-sm text-gray-600">Date</th>
              <th className="px-4 py-2 text-left text-sm text-gray-600">Description</th>
              <th className="px-4 py-2 text-left text-sm text-gray-600">Amount</th>
              <th className="px-4 py-2 text-left text-sm text-gray-600">Type</th>
            </tr>
          </thead>
          <tbody>
            {accountSummary.recentTransactions.map((transaction, index) => (
              <tr key={index} className="border-b">
                <td className="px-4 py-2 text-sm">{transaction.date}</td>
                <td className="px-4 py-2 text-sm">{transaction.description}</td>
                <td className="px-4 py-2 text-sm">₹{transaction.amount}</td>
                <td className="px-4 py-2 text-sm">{transaction.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AccountSummary;
