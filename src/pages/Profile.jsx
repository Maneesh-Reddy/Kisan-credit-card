// src/pages/Profile.jsx
import React, { useState } from 'react';

const Profile = () => {
  const [userProfile, setUserProfile] = useState({
    name: 'chaitanya',
    email: 'chaitanya@gmail.com',
    phone: '8074981414',
    address: 'india',
    role: 'Farmer',
  });

  const [editing, setEditing] = useState(false);

  const handleEdit = () => {
    setEditing(!editing);
  };

  const handleSave = () => {
    // Here, you would usually save the updated profile data
    setEditing(false);
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-8">Profile</h1>

      {/* Profile Information */}
      <div className="bg-white p-6 rounded-xl shadow-md max-w-lg mx-auto">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">User Profile</h2>
        <div className="space-y-4">
          <div>
            <label className="text-lg text-gray-600">Name</label>
            <input
              type="text"
              value={userProfile.name}
              disabled={!editing}
              onChange={(e) => setUserProfile({ ...userProfile, name: e.target.value })}
              className="w-full mt-2 p-3 border rounded-md"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="text-lg text-gray-600">Email</label>
            <input
              type="email"
              value={userProfile.email}
              disabled={!editing}
              onChange={(e) => setUserProfile({ ...userProfile, email: e.target.value })}
              className="w-full mt-2 p-3 border rounded-md"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="text-lg text-gray-600">Phone Number</label>
            <input
              type="text"
              value={userProfile.phone}
              disabled={!editing}
              onChange={(e) => setUserProfile({ ...userProfile, phone: e.target.value })}
              className="w-full mt-2 p-3 border rounded-md"
              placeholder="Enter your phone number"
            />
          </div>
          <div>
            <label className="text-lg text-gray-600">Address</label>
            <input
              type="text"
              value={userProfile.address}
              disabled={!editing}
              onChange={(e) => setUserProfile({ ...userProfile, address: e.target.value })}
              className="w-full mt-2 p-3 border rounded-md"
              placeholder="Enter your address"
            />
          </div>
          <div>
            <label className="text-lg text-gray-600">Role</label>
            <input
              type="text"
              value={userProfile.role}
              disabled
              className="w-full mt-2 p-3 border rounded-md bg-gray-100"
            />
          </div>
          <div className="mt-6 flex justify-between">
            {editing ? (
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Save Changes
              </button>
            ) : (
              <button
                onClick={handleEdit}
                className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
              >
                Edit Profile
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
