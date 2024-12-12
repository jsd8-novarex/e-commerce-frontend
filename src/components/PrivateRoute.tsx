import { Navigate, Outlet, useLocation } from "react-router-dom";

function PrivateRoute() {
  const secret = localStorage.getItem("token");; 
  const location = useLocation();
  
  return secret ? <Outlet /> : <Navigate to={"/sign-in"} state={{ from: location }} replace />;
}

export default PrivateRoute;
