import React, { useEffect, useState } from 'react';

interface Farmer {
  _id: string;
  name: string;
  mobile: string;
  email: string;
  village?: string;
  loans?: number;
  status?: 'Active' | 'Inactive';
  role?: string;
}

const Farmers = () => {
  const [farmers, setFarmers] = useState<Farmer[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFarmers = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/user');
        const data = await res.json();

        // Filter for role === 'farmer'
        const filtered = data.filter((user: Farmer) => user.role === 'farmer');
        setFarmers(filtered);
      } catch (error) {
        console.error('Error fetching farmers:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFarmers();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Farmers Directory</h1>

      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2">Farmer ID</th>
                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">Mobile</th>
                <th className="border px-4 py-2">Email</th>
                <th className="border px-4 py-2">Village</th>
                <th className="border px-4 py-2">Loans</th>
                <th className="border px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {farmers.map((farmer, i) => (
                <tr key={farmer._id}>
                  <td className="border px-4 py-2">F{String(i + 1).padStart(3, '0')}</td>
                  <td className="border px-4 py-2">{farmer.name}</td>
                  <td className="border px-4 py-2">{farmer.mobile}</td>
                  <td className="border px-4 py-2">{farmer.email}</td>
                  <td className="border px-4 py-2">{farmer.village || '—'}</td>
                  <td className="border px-4 py-2 text-center">{farmer.loans ?? 0}</td>
                  <td className="border px-4 py-2">
                    <span className={`px-2 py-1 rounded-full text-xs text-white ${
                      farmer.status === 'Active' ? 'bg-green-500' : 'bg-gray-400'
                    }`}>
                      {farmer.status || 'Inactive'}
                    </span>
                  </td>
                </tr>
              ))}
              {farmers.length === 0 && (
                <tr>
                  <td colSpan={7} className="text-center py-4 text-gray-500">
                    No farmers found.
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

export default Farmers;
