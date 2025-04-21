
import React, { useState } from 'react';

const Farmers = () => {
  const [farmers] = useState([
    {
      id: 1,
      name: 'John Doe',
      mobile: '9876543210',
      accountNumber: 'KCC001',
      totalLoans: 150000,
      activeLoans: 2
    },
    {
      id: 2,
      name: 'Jane Smith',
      mobile: '9876543211',
      accountNumber: 'KCC002',
      totalLoans: 200000,
      activeLoans: 1
    }
  ]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Farmers List</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border">ID</th>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Mobile</th>
              <th className="px-4 py-2 border">Account Number</th>
              <th className="px-4 py-2 border">Total Loans</th>
              <th className="px-4 py-2 border">Active Loans</th>
            </tr>
          </thead>
          <tbody>
            {farmers.map((farmer) => (
              <tr key={farmer.id}>
                <td className="border px-4 py-2">{farmer.id}</td>
                <td className="border px-4 py-2">{farmer.name}</td>
                <td className="border px-4 py-2">{farmer.mobile}</td>
                <td className="border px-4 py-2">{farmer.accountNumber}</td>
                <td className="border px-4 py-2">₹{farmer.totalLoans}</td>
                <td className="border px-4 py-2">{farmer.activeLoans}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Farmers;
