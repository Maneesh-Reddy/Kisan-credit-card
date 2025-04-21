
import React from 'react';

const Applications = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Loan Applications</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border">Application ID</th>
              <th className="px-4 py-2 border">Farmer Name</th>
              <th className="px-4 py-2 border">Amount</th>
              <th className="px-4 py-2 border">Status</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">APP001</td>
              <td className="border px-4 py-2">John Doe</td>
              <td className="border px-4 py-2">₹50,000</td>
              <td className="border px-4 py-2">Pending</td>
              <td className="border px-4 py-2">
                <button className="bg-green-500 text-white px-2 py-1 rounded mr-2">
                  Approve
                </button>
                <button className="bg-red-500 text-white px-2 py-1 rounded">
                  Reject
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Applications;
