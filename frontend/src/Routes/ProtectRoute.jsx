import { useContext } from "react";

import { authContext } from "../context/authContext";

import React from "react";
import { Navigate } from "react-router-dom";

const ProtectRoute = ({ children, allowedRoles }) => {
  const { token, role } = useContext(authContext);

  const isAllowed = allowedRoles.includes(role);

  const AccessibleRoute =
    isAllowed && token ? children : <Navigate to={"/login"} replace={true} />;

  return AccessibleRoute;
};

export default ProtectRoute;
