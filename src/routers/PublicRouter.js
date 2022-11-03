
import {Navigate, Outlet} from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

export default function PublicRoute() {
  const {isAuthenticated} = useAuthContext();

  if (isAuthenticated) {
    return <Navigate to={"/dashboard"} />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
}
