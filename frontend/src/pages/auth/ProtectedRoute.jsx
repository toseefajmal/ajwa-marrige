
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children, requiredRole = "customer" }) => {
  const location = useLocation();

  const userRole = sessionStorage.getItem("userRole");
  const registered =
    sessionStorage.getItem("customerRegistered") === "true";

  if (requiredRole === "customer" && !registered) {
    return (
      <Navigate
        to={`/register?redirect=${encodeURIComponent(location.pathname)}`}
        replace
      />
    );
  }

  if (userRole !== requiredRole) {
    const loginPath =
      requiredRole === "admin" ? "/admin-login" : "/login";

    return (
      <Navigate
        to={`${loginPath}?redirect=${encodeURIComponent(location.pathname)}`}
        replace
      />
    );
  }

  return children;
};

export default ProtectedRoute;
