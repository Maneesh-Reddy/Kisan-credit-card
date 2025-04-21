
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const LoanApplication = () => {
  const [formData, setFormData] = useState({
    amount: '',
    purpose: '',
    cropType: '',
    landArea: '',
    duration: '',
    documents: null
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.keys(formData).forEach(key => {
      if (key === 'documents') {
        if (formData.documents) {
          Array.from(formData.documents).forEach(file => {
            data.append('documents', file);
          });
        }
      } else {
        data.append(key, formData[key]);
      }
    });

    try {
      const response = await fetch('http://0.0.0.0:5000/api/loan', {
        method: 'POST',
        body: data
      });
      if (response.ok) {
        toast.success('Loan application submitted successfully');
        setFormData({
          amount: '',
          purpose: '',
          cropType: '',
          landArea: '',
          duration: '',
          documents: null
        });
      }
    } catch (error) {
      toast.error('Error submitting loan application');
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Loan Application</h1>
      <form onSubmit={handleSubmit} className="max-w-lg">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Loan Amount</label>
          <input
            type="number"
            value={formData.amount}
            onChange={(e) => setFormData({...formData, amount: e.target.value})}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Purpose</label>
          <input
            type="text"
            value={formData.purpose}
            onChange={(e) => setFormData({...formData, purpose: e.target.value})}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Crop Type</label>
          <input
            type="text"
            value={formData.cropType}
            onChange={(e) => setFormData({...formData, cropType: e.target.value})}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Land Area (in acres)</label>
          <input
            type="text"
            value={formData.landArea}
            onChange={(e) => setFormData({...formData, landArea: e.target.value})}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Loan Duration (in months)</label>
          <input
            type="number"
            value={formData.duration}
            onChange={(e) => setFormData({...formData, duration: e.target.value})}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Documents</label>
          <input
            type="file"
            multiple
            onChange={(e) => setFormData({...formData, documents: e.target.files})}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default LoanApplication;
