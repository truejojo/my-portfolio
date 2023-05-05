import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

const AuthLayoutProtected = () => {
  const { user } = useAuth();
  const location = useLocation();

  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace state={{ from: location.pathname, message: "Du musst dafür angemeldet sein." }} />
  );
};

export default AuthLayoutProtected;
