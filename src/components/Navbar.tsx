// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Use useNavigate for redirection

const Navbar = () => {
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const navigate = useNavigate(); // Used for navigation

  const toggleNotifications = () => {
    setNotificationsOpen(!notificationsOpen);
  };

  const toggleProfile = () => {
    setProfileOpen(!profileOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('user'); // Clear user session from localStorage
    navigate('/login'); // Redirect to login page after logout
  };

  const notifications = [
    { id: 1, message: 'Your loan application is approved!' },
    { id: 2, message: 'New repayment due on March 30, 2024.' },
    { id: 3, message: 'Funds transferred successfully to your account.' },
  ];

  return (
    <div className="flex justify-between items-center p-4 bg-green-600 text-white">
      <div className="flex items-center">
        <h2 className="text-2xl font-bold">KCC Bank</h2>
      </div>

      {/* Icons Section - Notification Bell and Profile Icon */}
      <div className="flex items-center space-x-6">
        {/* Notification Bell */}
        <div className="relative">
          <button onClick={toggleNotifications} className="text-white hover:text-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-7 h-7 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2 2 0 0018 14V10a6 6 0 00-12 0v4a2 2 0 00-.595 1.195L4 17h5m6 0a3 3 0 11-6 0"
              />
            </svg>
          </button>
          {notificationsOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-md p-2">
              <ul>
                {notifications.map((notification) => (
                  <li key={notification.id} className="p-2 border-b">{notification.message}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* User Profile Icon */}
        <div className="relative">
          <button onClick={toggleProfile} className="text-white hover:text-gray-200">
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
              <path d="M19 18c0-2.21-3.58-4-7-4s-7 1.79-7 4" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
            </svg>
          </button>
          {profileOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-md p-2">
              <ul>
                <li className="p-2"><button onClick={handleLogout} className="block w-full text-left">Logout</button></li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
