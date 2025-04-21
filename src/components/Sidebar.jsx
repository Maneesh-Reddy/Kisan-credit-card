
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuthStore } from '../services/store';

const Sidebar = () => {
  const location = useLocation();
  const user = useAuthStore(state => state.user);

  const farmerLinks = [
    { path: '/', label: 'Dashboard' },
    { path: '/loan-application', label: 'Apply for Loan' },
    { path: '/account-summary', label: 'Account Summary' },
    { path: '/fund-transfer', label: 'Fund Transfer' },
    { path: '/beneficiary', label: 'Beneficiary' },
    { path: '/profile', label: 'Profile' },
    { path: '/settings', label: 'Settings' }
  ];

  const officerLinks = [
    { path: '/', label: 'Dashboard' },
    { path: '/applications', label: 'Loan Applications' },
    { path: '/farmers', label: 'Farmers' },
    { path: '/reports', label: 'Reports' }
  ];

  const links = user?.role === 'staff' ? officerLinks : farmerLinks;

  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen">
      <div className="p-4">
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`block py-2 px-4 rounded ${
              location.pathname === link.path ? 'bg-gray-700' : 'hover:bg-gray-700'
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
