
import React from 'react';
import { CreditCard, ArrowUpRight, ArrowDownRight, Clock } from 'lucide-react';

const Dashboard = () => {
  const user = {
    role: 'farmer',
    name: 'bharadwaja',
    accountNumber: '1234567890',
    branchCode: 'KCC001',
    balance: 50000,
  };

  const loanApplications = [
    {
      id: '1',
      amount: 100000,
      status: 'pending',
      purpose: 'Crop Cultivation',
      createdAt: '2025-03-15',
    },
    {
      id: '2',
      amount: 50000,
      status: 'approved',
      purpose: 'Equipment Purchase',
      createdAt: '2025-03-10',
    },
  ];

  const transactions = [
    {
      id: '1',
      type: 'credit',
      amount: 25000,
      description: 'Loan Disbursement',
      date: '2025-03-15',
    },
    {
      id: '2',
      type: 'debit',
      amount: 5000,
      description: 'Loan Repayment',
      date: '2025-03-10',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Account Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Account Balance</p>
              <h3 className="text-2xl font-semibold">₹{user.balance.toLocaleString()}</h3>
            </div>
            <CreditCard className="h-8 w-8 text-green-600" />
          </div>
          <div className="mt-4">
            <p className="text-sm text-gray-500">Account Number: {user.accountNumber}</p>
            <p className="text-sm text-gray-500">Branch Code: {user.branchCode}</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Loans</p>
              <h3 className="text-2xl font-semibold">₹150,000</h3>
            </div>
            <ArrowUpRight className="h-8 w-8 text-blue-600" />
          </div>
          <div className="mt-4">
            <p className="text-sm text-gray-500">Active Loans: 2</p>
            <p className="text-sm text-gray-500">Next Due: ₹5,000</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Repayment Status</p>
              <h3 className="text-2xl font-semibold text-green-600">On Track</h3>
            </div>
            <Clock className="h-8 w-8 text-green-600" />
          </div>
          <div className="mt-4">
            <p className="text-sm text-gray-500">Next Due Date: March 30, 2026</p>
            <div className="mt-2 h-2 bg-gray-200 rounded-full">
              <div className="h-2 bg-green-600 rounded-full" style={{ width: '75%' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Recent Loan Applications */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900">Recent Loan Applications</h2>
          <div className="mt-4">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Purpose</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {loanApplications.map((application) => (
                  <tr key={application.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{application.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">₹{application.amount.toLocaleString()}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{application.purpose}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        application.status === 'approved' ? 'bg-green-100 text-green-800' : 
                        application.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {application.status.charAt(0).toUpperCase() + application.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{application.createdAt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900">Recent Transactions</h2>
          <div className="mt-4">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Description</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {transactions.map((transaction) => (
                  <tr key={transaction.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{transaction.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{transaction.description}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">₹{transaction.amount.toLocaleString()}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center ${
                        transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {transaction.type === 'credit' ? (
                          <ArrowUpRight className="h-4 w-4 mr-1" />
                        ) : (
                          <ArrowDownRight className="h-4 w-4 mr-1" />
                        )}
                        {transaction.type.charAt(0).toUpperCase() + transaction.type.slice(1)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
