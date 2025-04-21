import React, { useEffect, useState } from 'react';

interface Loan {
  _id: string;
  farmerName: string;
  farmerMobile: string;
  amount: number;
  purpose: string;
  cropType: string;
  landArea: string;
  duration: string;
  status: 'Pending' | 'Approved' | 'Rejected';
  appliedDate: string;
  documents: string[];
}

const OfficerDashboard = () => {
  const [loans, setLoans] = useState<Loan[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLoans = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/loan');
        const data = await res.json();

        const stored = localStorage.getItem('loanStatusUpdates');
        if (stored) {
          setLoans(JSON.parse(stored));
        } else {
          setLoans(data);
        }
      } catch (err) {
        console.error('Failed to fetch loans:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchLoans();
  }, []);

  const handleStatusChange = (id: string, newStatus: 'Approved' | 'Rejected') => {
    const updated = loans.map((loan) =>
      loan._id === id ? { ...loan, status: newStatus } : loan
    );
    setLoans(updated);
    localStorage.setItem('loanStatusUpdates', JSON.stringify(updated));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Officer Dashboard</h1>

      {loading ? (
        <p>Loading loan applications...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border border-gray-200 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 border">Farmer</th>
                <th className="px-4 py-2 border">Mobile</th>
                <th className="px-4 py-2 border">Amount</th>
                <th className="px-4 py-2 border">Purpose</th>
                <th className="px-4 py-2 border">Status</th>
                <th className="px-4 py-2 border">Date</th>
                <th className="px-4 py-2 border">Documents</th>
                <th className="px-4 py-2 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loans.map((loan) => (
                <tr key={loan._id}>
                  <td className="border px-4 py-2">{loan.farmerName}</td>
                  <td className="border px-4 py-2">{loan.farmerMobile}</td>
                  <td className="border px-4 py-2">₹{loan.amount}</td>
                  <td className="border px-4 py-2">{loan.purpose}</td>
                  <td className="border px-4 py-2">
                    <span
                      className={`px-2 py-1 rounded-full text-white ${
                        loan.status === 'Approved'
                          ? 'bg-green-500'
                          : loan.status === 'Rejected'
                          ? 'bg-red-500'
                          : 'bg-yellow-500'
                      }`}
                    >
                      {loan.status}
                    </span>
                  </td>
                  <td className="border px-4 py-2">
                    {new Date(loan.appliedDate).toLocaleDateString()}
                  </td>
                  <td className="border px-4 py-2 space-y-1">
                    {loan.documents?.map((doc, i) => (
                      <a
                        key={i}
                        href={`http://localhost:5000${doc}`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-600 underline block"
                      >
                        View Doc {i + 1}
                      </a>
                    ))}
                  </td>
                  <td className="border px-4 py-2">
                    <button
                      className="bg-green-600 text-white px-2 py-1 text-xs rounded mr-2 disabled:opacity-50"
                      disabled={loan.status !== 'Pending'}
                      onClick={() => handleStatusChange(loan._id, 'Approved')}
                    >
                      Approve
                    </button>
                    <button
                      className="bg-red-600 text-white px-2 py-1 text-xs rounded disabled:opacity-50"
                      disabled={loan.status !== 'Pending'}
                      onClick={() => handleStatusChange(loan._id, 'Rejected')}
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))}
              {loans.length === 0 && (
                <tr>
                  <td colSpan={8} className="text-center py-4 text-gray-500">
                    No loan applications found.
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

export default OfficerDashboard;
