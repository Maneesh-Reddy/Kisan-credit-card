import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  FileText,
  CreditCard,
  Users,
  Settings,
  FileSpreadsheet,
  UserCircle,
  Send,
  ClipboardList,
} from 'lucide-react';
import { useAuthStore } from '../lib/store';

const farmerNavigation = [
  { name: 'Dashboard', icon: LayoutDashboard, href: '/' },
  { name: 'Account Summary', icon: FileText, href: '/account-summary' },
  { name: 'Loan Application', icon: FileSpreadsheet, href: '/loan-application' },
  { name: 'Fund Transfer', icon: Send, href: '/fund-transfer' },
  { name: 'Beneficiary', icon: Users, href: '/beneficiary' },
  { name: 'Profile', icon: UserCircle, href: '/profile' },
  { name: 'Settings', icon: Settings, href: '/settings' },
];

const officerNavigation = [
  { name: 'Dashboard', icon: LayoutDashboard, href: '/' },
  { name: 'Loan Applications', icon: ClipboardList, href: '/applications' },
  { name: 'Farmers', icon: Users, href: '/farmers' },
  { name: 'Reports', icon: FileText, href: '/reports' },
  { name: 'Settings', icon: Settings, href: '/settings' },
];

const Sidebar = () => {
  const user = useAuthStore((state) => state.user);
  const navigation = user?.role === 'staff' ? officerNavigation : farmerNavigation;

  return (
    <div className="hidden lg:flex lg:flex-shrink-0">
      <div className="flex flex-col w-64">
        <div className="flex flex-col flex-grow bg-white pt-5 pb-4 overflow-y-auto">
          <div className="flex items-center flex-shrink-0 px-4">
            <CreditCard className="h-8 w-8 text-green-600" />
            <span className="ml-2 text-xl font-semibold text-gray-900">KCC Bank</span>
          </div>
          <nav className="mt-5 flex-1 px-2 space-y-1">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  `group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                    isActive
                      ? 'bg-green-50 text-green-700'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`
                }
              >
                <item.icon
                  className="mr-3 h-5 w-5 flex-shrink-0"
                  aria-hidden="true"
                />
                {item.name}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;