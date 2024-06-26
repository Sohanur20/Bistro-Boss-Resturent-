/* eslint-disable react/prop-types */

import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../../../Hooks/UseAuth/UseAuth";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = UseAuth()
  console.log(user);
  const location = useLocation();

  if (loading) {
    return <progress className="progress w-56"></progress>;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoutes;
