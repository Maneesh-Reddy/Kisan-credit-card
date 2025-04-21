
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import LoanApplication from '../pages/LoanApplication';
import Applications from '../pages/officer/Applications';
import Farmers from '../pages/officer/Farmers';
import Reports from '../pages/officer/Reports';
import AccountSummary from '../pages/AccountSummary';
import Profile from '../pages/Profile';
import Settings from '../pages/Settings';
import { ProtectedRoute } from '../components/ProtectedRoute';

export const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/',
    element: <ProtectedRoute><Layout /></ProtectedRoute>,
    children: [
      { path: '/', element: <Dashboard /> },
      { path: '/loan-application', element: <LoanApplication /> },
      { path: '/applications', element: <Applications /> },
      { path: '/farmers', element: <Farmers /> },
      { path: '/reports', element: <Reports /> },
      { path: '/account', element: <AccountSummary /> },
      { path: '/profile', element: <Profile /> },
      { path: '/settings', element: <Settings /> }
    ]
  }
]);
