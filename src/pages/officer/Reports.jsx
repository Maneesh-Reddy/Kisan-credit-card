import React from 'react';

const sampleReports = [
  {
    id: 'L001',
    farmer: 'Ramesh Yadav',
    amount: 60000,
    duration: '12 months',
    applied: '2024-04-01',
    approved: '2024-04-05',
    status: 'Approved',
    repayment: 'On Track',
  },
  {
    id: 'L002',
    farmer: 'Sita Kumari',
    amount: 45000,
    duration: '24 months',
    applied: '2024-04-08',
    approved: '',
    status: 'Pending',
    repayment: 'N/A',
  },
  {
    id: 'L003',
    farmer: 'Ravi Meena',
    amount: 80000,
    duration: '36 months',
    applied: '2024-03-15',
    approved: '2024-03-20',
    status: 'Approved',
    repayment: 'Delayed',
  },
];

const Reports = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Loan Reports</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border">Loan ID</th>
              <th className="px-4 py-2 border">Farmer</th>
              <th className="px-4 py-2 border">Amount</th>
              <th className="px-4 py-2 border">Duration</th>
              <th className="px-4 py-2 border">Applied Date</th>
              <th className="px-4 py-2 border">Approved Date</th>
              <th className="px-4 py-2 border">Status</th>
              <th className="px-4 py-2 border">Repayment</th>
            </tr>
          </thead>
          <tbody>
            {sampleReports.map((report) => (
              <tr key={report.id}>
                <td className="border px-4 py-2">{report.id}</td>
                <td className="border px-4 py-2">{report.farmer}</td>
                <td className="border px-4 py-2">₹{report.amount}</td>
                <td className="border px-4 py-2">{report.duration}</td>
                <td className="border px-4 py-2">{report.applied}</td>
                <td className="border px-4 py-2">{report.approved || '—'}</td>
                <td className="border px-4 py-2">
                  <span className={`px-2 py-1 rounded-full text-xs text-white ${
                    report.status === 'Approved' ? 'bg-green-500' :
                    report.status === 'Rejected' ? 'bg-red-500' : 'bg-yellow-500'
                  }`}>
                    {report.status}
                  </span>
                </td>
                <td className="border px-4 py-2">
                  <span className={`text-xs ${
                    report.repayment === 'On Track' ? 'text-green-600' :
                    report.repayment === 'Delayed' ? 'text-red-600' : 'text-gray-500'
                  }`}>
                    {report.repayment}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reports;
