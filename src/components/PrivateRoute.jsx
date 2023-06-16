import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../contextFolder/AuthContext";

export const PrivateRoute = ({ children }) => {
  const { pathname } = useLocation();

  const { token } = useContext(AuthContext);

  return token ? children : <Navigate to="/login" state={{ from: pathname }} />;
};
