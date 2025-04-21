
import React from 'react';
import { Users, FileText, BarChart2 } from 'lucide-react';

const OfficerDashboard = () => {
  const stats = {
    totalFarmers: 150,
    pendingApplications: 12,
    approvedLoans: 45,
    totalDisbursed: 2500000
  };

  const recentApplications = [
    { id: 1, farmer: 'Raj Kumar', amount: 100000, status: 'pending', date: '2024-03-15' },
    { id: 2, farmer: 'Priya Singh', amount: 150000, status: 'approved', date: '2024-03-14' },
    { id: 3, farmer: 'Amit Patel', amount: 75000, status: 'rejected', date: '2024-03-13' }
  ];

  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Farmers</p>
              <h3 className="text-2xl font-semibold">{stats.totalFarmers}</h3>
            </div>
            <Users className="h-8 w-8 text-blue-600" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Pending Applications</p>
              <h3 className="text-2xl font-semibold">{stats.pendingApplications}</h3>
            </div>
            <FileText className="h-8 w-8 text-yellow-600" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Approved Loans</p>
              <h3 className="text-2xl font-semibold">{stats.approvedLoans}</h3>
            </div>
            <BarChart2 className="h-8 w-8 text-green-600" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Disbursed</p>
              <h3 className="text-2xl font-semibold">₹{stats.totalDisbursed.toLocaleString()}</h3>
            </div>
            <FileText className="h-8 w-8 text-purple-600" />
          </div>
        </div>
      </div>

      {/* Recent Applications */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900">Recent Applications</h2>
          <div className="mt-4">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Farmer</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {recentApplications.map((application) => (
                  <tr key={application.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{application.farmer}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">₹{application.amount.toLocaleString()}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        application.status === 'approved' ? 'bg-green-100 text-green-800' : 
                        application.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {application.status.charAt(0).toUpperCase() + application.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{application.date}</td>
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

export default OfficerDashboard;
