import React, { useEffect, useState } from 'react';

interface Loan {
  _id: string;
  farmerName: string;
  farmerMobile: string;
  cropType: string;
  landArea: string;
  amount: number;
  duration: string;
  status: string;
}

const Applications = () => {
  const [applications, setApplications] = useState<Loan[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const stored = localStorage.getItem('loanStatusUpdates');
        if (stored) {
          setApplications(JSON.parse(stored));
        } else {
          const res = await fetch('http://localhost:5000/api/loan');
          const data = await res.json();
          setApplications(data);
        }
      } catch (err) {
        console.error('Error fetching applications:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchApplications();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Loan Applications</h1>
      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2">Application ID</th>
                <th className="border px-4 py-2">Farmer</th>
                <th className="border px-4 py-2">Mobile</th>
                <th className="border px-4 py-2">Crop</th>
                <th className="border px-4 py-2">Land Area</th>
                <th className="border px-4 py-2">Amount</th>
                <th className="border px-4 py-2">Duration</th>
                <th className="border px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app) => (
                <tr key={app._id}>
                  <td className="border px-4 py-2">{app._id.slice(-6).toUpperCase()}</td>
                  <td className="border px-4 py-2">{app.farmerName}</td>
                  <td className="border px-4 py-2">{app.farmerMobile}</td>
                  <td className="border px-4 py-2">{app.cropType}</td>
                  <td className="border px-4 py-2">{app.landArea} acres</td>
                  <td className="border px-4 py-2">₹{app.amount}</td>
                  <td className="border px-4 py-2">{app.duration} months</td>
                  <td className="border px-4 py-2">
                    <span className={`px-2 py-1 rounded-full text-xs text-white ${
                      app.status === 'Approved' ? 'bg-green-500' :
                      app.status === 'Rejected' ? 'bg-red-500' : 'bg-yellow-500'
                    }`}>
                      {app.status}
                    </span>
                  </td>
                </tr>
              ))}
              {applications.length === 0 && (
                <tr>
                  <td colSpan={8} className="text-center py-4 text-gray-500">
                    No applications found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Applications;
