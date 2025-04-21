// src/pages/Settings.jsx
import React, { useState } from 'react';

const Settings = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSaveSettings = () => {
    if (password && email && phone) {
      setMessage('Settings updated successfully!');
    } else {
      setMessage('Please fill out all fields.');
    }
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-8">Settings</h1>

      {/* Settings Form */}
      <div className="bg-white p-6 rounded-xl shadow-md max-w-lg mx-auto">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">Update Profile Settings</h2>
        <div className="space-y-4">
          <div>
            <label className="text-lg text-gray-600">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-2 p-3 border rounded-md"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="text-lg text-gray-600">Phone Number</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full mt-2 p-3 border rounded-md"
              placeholder="Enter your phone number"
            />
          </div>
          <div>
            <label className="text-lg text-gray-600">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-2 p-3 border rounded-md"
              placeholder="Enter your new password"
            />
          </div>
          <div className="mt-6 flex justify-between">
            <button
              onClick={handleSaveSettings}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Save Settings
            </button>
          </div>
        </div>
      </div>

      {/* Message */}
      {message && <p className="mt-4 text-center text-xl text-gray-600">{message}</p>}
    </div>
  );
};

export default Settings;
