
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FundTransfer from './views/FundTransfer';
import Login from './views/Login';
import Register from './views/Register';
import FarmerDashboard from './views/Dashboard';
import OfficerDashboard from './views/officer/Dashboard';
import LoanApplication from './views/LoanApplication';
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';
import AccountSummary from './views/AccountSummary';
import Beneficiary from './views/Beneficiary';
import Profile from './views/Profile';
import Applications from './views/officer/Applications';
import Settings from './views/Settings';
import Reports from './views/officer/Reports';
import { useAuthStore } from './services/store';
import Farmers from './views/officer/Farmers';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const user = useAuthStore((state) => state.user);

  return (
    <BrowserRouter>
      <ToastContainer position="top-right" autoClose={3000} />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<ProtectedRoute />}>
          <Route element={<Layout />}>
            <Route path="/" element={user?.role === 'staff' ? <OfficerDashboard /> : <FarmerDashboard />} />
            <Route path="/officer-dashboard" element={<OfficerDashboard />} />
            <Route path="/loan-application" element={<LoanApplication />} />
            <Route path="/account-summary" element={<AccountSummary />} />
            <Route path="/fund-transfer" element={<FundTransfer />} />
            <Route path="/beneficiary" element={<Beneficiary />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/applications" element={<Applications />} />
            <Route path="/farmers" element={<Farmers />} />
            <Route path="/reports" element={<Reports />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
