import React, { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { logoutUser, validateToken } from "../../slices/authSlice";
const Protected = ({ children, role }) => {
  const { user, invalidToken, loginStatus } = useSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch();
  const location = useLocation();
  // if token has expired, log the user out
  useEffect(() => {
    if (user) dispatch(validateToken());
  }, [location.pathname]);

  // if the user not loggedin, redirect him to the login page
  if (user === null) {
    return (
      <Navigate
        to="/login"
        state={
          invalidToken
            ? {
                invalidTokenText: "Your session expired. Please log in again",
              }
            : null
        }
      />
    );
  }

  if (loginStatus !== "pending" && invalidToken) {
    dispatch(logoutUser());
  }

  // if this route is specific to a certain role
  if (role && user.userType !== role)
    return <Navigate to={"/"} replace={true} />;

  return <>{children}</>;
};

Protected.propTypes = {
  children: PropTypes.element.isRequired,
  role: PropTypes.string,
};

export default Protected;
