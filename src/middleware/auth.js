
import { useAuthStore } from '../services/store';
import { Navigate } from 'react-router-dom';

export const RequireAuth = ({ children }) => {
  const user = useAuthStore(state => state.user);
  
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};
