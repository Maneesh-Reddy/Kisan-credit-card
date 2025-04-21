import React, { useState } from 'react';
import { Upload, Check } from 'lucide-react';
import { toast } from 'react-toastify';
import { useAuthStore } from '../lib/store';

const LoanApplication = () => {
  const user = useAuthStore((state) => state.user);
  const [formData, setFormData] = useState({
    amount: '',
    purpose: '',
    cropType: '',
    landArea: '',
    duration: '12',
    documents: [] as File[],
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData((prev) => ({
        ...prev,
        documents: [...Array.from(e.target.files)],
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (key === 'documents') {
        (value as File[]).forEach((file) => formDataToSend.append('documents', file));
      } else {
        formDataToSend.append(key, value as string);
      }
    });

    // Add logged-in user's name and phone
    formDataToSend.append('farmerName', user?.name || '');
    formDataToSend.append('farmerMobile', user?.mobile || '');

    try {
      const res = await fetch('http://localhost:5000/api/loan', {
        method: 'POST',
        body: formDataToSend,
      });

      if (!res.ok) throw new Error('Submission failed');
      toast.success('Loan application submitted successfully!');
      setFormData({
        amount: '',
        purpose: '',
        cropType: '',
        landArea: '',
        duration: '12',
        documents: [],
      });
    } catch (error) {
      toast.error('Submission failed. Try again.');
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white shadow rounded-lg">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800">Loan Application Form</h2>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Loan Amount (₹)</label>
              <input type="number" name="amount" value={formData.amount} onChange={handleInputChange} required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-green-500" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Loan Duration (Months)</label>
              <select name="duration" value={formData.duration} onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-green-500">
                <option value="12">12 Months</option>
                <option value="24">24 Months</option>
                <option value="36">36 Months</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Crop Type</label>
              <input type="text" name="cropType" value={formData.cropType} onChange={handleInputChange} required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-green-500" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Land Area (Acres)</label>
              <input type="number" name="landArea" value={formData.landArea} onChange={handleInputChange} required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-green-500" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Loan Purpose</label>
            <textarea name="purpose" rows={3} value={formData.purpose} onChange={handleInputChange} required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-green-500" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Required Documents</label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md">
              <div className="text-center space-y-1">
                <Upload className="mx-auto h-10 w-10 text-gray-400" />
                <label className="text-green-600 cursor-pointer hover:text-green-500">
                  Upload files
                  <input type="file" name="documents" multiple onChange={handleFileChange} className="sr-only" />
                </label>
                <p className="text-xs text-gray-500">Upload Aadhaar, Land Docs, Bank Statements</p>
              </div>
            </div>
          </div>

          {formData.documents.length > 0 && (
            <ul className="text-sm text-gray-600 space-y-1">
              {formData.documents.map((file, i) => (
                <li key={i} className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  {file.name}
                </li>
              ))}
            </ul>
          )}

          <div className="flex justify-end">
            <button type="submit"
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoanApplication;
