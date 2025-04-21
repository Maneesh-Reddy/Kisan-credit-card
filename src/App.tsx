import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FundTransfer from './pages/FundTransfer';
import Login from './pages/Login';
import Register from './pages/Register';
import FarmerDashboard from './pages/Dashboard';
import OfficerDashboard from './pages/officer/Dashboard';
import LoanApplication from './pages/LoanApplication';
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';
import AccountSummary from './pages/AccountSummary';
import Beneficiary from './pages/Beneficiary';
import Profile from './pages/Profile';
import Applications from './pages/officer/Applications';
import Settings from './pages/Settings';
import Reports from './pages/officer/Reports';
import { useAuthStore } from './lib/store';
import Farmers from './pages/officer/Farmers';

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
    <Route path="/officer-dashboard" element={<OfficerDashboard />} /> {/* ✅ Optional direct route */}
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
