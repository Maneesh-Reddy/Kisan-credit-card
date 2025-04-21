
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../services/store';

const Navbar = () => {
  const navigate = useNavigate();
  const { user, setUser } = useAuthStore();

  const handleLogout = () => {
    setUser(null);
    navigate('/login');
  };

  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold">KCC Bank</span>
            </div>
          </div>
          <div className="flex items-center">
            <button onClick={handleLogout} className="text-gray-600 hover:text-gray-900">
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
