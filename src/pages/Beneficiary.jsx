// src/pages/Beneficiary.jsx
import React, { useState } from 'react';

const Beneficiary = () => {
  const [beneficiaries, setBeneficiaries] = useState([
    { id: 1, name: 'John Doe', account: '1234567890', relationship: 'Friend' },
    { id: 2, name: 'Jane Smith', account: '9876543210', relationship: 'Family' },
  ]);

  const [name, setName] = useState('');
  const [account, setAccount] = useState('');
  const [relationship, setRelationship] = useState('');

  const handleAddBeneficiary = () => {
    if (name && account && relationship) {
      const newBeneficiary = { id: beneficiaries.length + 1, name, account, relationship };
      setBeneficiaries([...beneficiaries, newBeneficiary]);
      setName('');
      setAccount('');
      setRelationship('');
    } else {
      alert('Please fill out all fields');
    }
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-8">Beneficiary Management</h1>

      {/* Add Beneficiary Form */}
      <div className="bg-white p-6 rounded-xl shadow-md max-w-lg mx-auto">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">Add Beneficiary</h2>
        <div className="space-y-4">
          <div>
            <label className="text-lg text-gray-600">Beneficiary Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full mt-2 p-3 border rounded-md"
              placeholder="Enter name"
            />
          </div>
          <div>
            <label className="text-lg text-gray-600">Account Number</label>
            <input
              type="text"
              value={account}
              onChange={(e) => setAccount(e.target.value)}
              className="w-full mt-2 p-3 border rounded-md"
              placeholder="Enter account number"
            />
          </div>
          <div>
            <label className="text-lg text-gray-600">Relationship</label>
            <input
              type="text"
              value={relationship}
              onChange={(e) => setRelationship(e.target.value)}
              className="w-full mt-2 p-3 border rounded-md"
              placeholder="Enter relationship (e.g. Family, Friend)"
            />
          </div>
          <button
            onClick={handleAddBeneficiary}
            className="w-full mt-4 p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Add Beneficiary
          </button>
        </div>
      </div>

      {/* Beneficiaries List */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-700">Existing Beneficiaries</h2>
        <table className="min-w-full mt-4">
          <thead>
            <tr className="border-b">
              <th className="px-4 py-2 text-left text-sm text-gray-600">Name</th>
              <th className="px-4 py-2 text-left text-sm text-gray-600">Account Number</th>
              <th className="px-4 py-2 text-left text-sm text-gray-600">Relationship</th>
            </tr>
          </thead>
          <tbody>
            {beneficiaries.map((beneficiary) => (
              <tr key={beneficiary.id} className="border-b">
                <td className="px-4 py-2 text-sm">{beneficiary.name}</td>
                <td className="px-4 py-2 text-sm">{beneficiary.account}</td>
                <td className="px-4 py-2 text-sm">{beneficiary.relationship}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Beneficiary;
