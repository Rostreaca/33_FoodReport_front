import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ requiredRole, children }) => {
  const { auth, authLoading } = useContext(AuthContext);

  if (authLoading) {
    return (
      <div style={{ padding: "50px", textAlign: "center", fontSize: "1.2em" }}>
        인증 상태를 확인 중입니다...
      </div>
    );
  }

  const isAuthenticated = auth?.accessToken;
  const hasRequiredRole = auth?.role?.includes(requiredRole);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (requiredRole && !hasRequiredRole) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;
