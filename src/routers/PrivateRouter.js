import {Navigate, Outlet} from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

export default function PrivateRoute() {
  const {isAuthenticated} = useAuthContext();

  if (!isAuthenticated) {
    return <Navigate to={'/'} />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
}
