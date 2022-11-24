import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../slices/authSlice";
import { useNavigate, useLocation } from "react-router-dom";
import { StyledFormLoginRegister } from "../../components/StyledFormLoginRegister";

const Login = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const [user, setUser] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [errors, setErrors] = useState({
    email: null,
    password: null,
  });

  useEffect(() => {
    if (auth.user) {
      navigate("/");
    }
  }, [auth.user, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    let valid = true;

    for (let key in errors) {
      if (errors[key] != null) {
        valid = false;
        break;
      }
    }

    for (let key in user) {
      if (typeof user[key] === "string" && user[key].trim().length === 0) {
        setErrors((prev) => ({ ...prev, [key]: `${key} is required!` }));
        valid = false;
      }
    }

    if (valid) {
      dispatch(loginUser(user));
    }
  };

  const setValues = (e) => {
    let { name, value } = e.target;

    value = value.trim();

    if (name == "email") {
      if (value.trim().length === 0) {
        setErrors((prev) => ({ ...prev, [name]: "Email is required!" }));
      } else {
        setErrors((prev) => ({ ...prev, [name]: null }));
      }
    }

    if (name == "password") {
      if (value.trim().length === 0) {
        setErrors((prev) => ({ ...prev, [name]: "Password is required!" }));
      } else {
        setErrors((prev) => ({ ...prev, [name]: null }));
      }
    }

    setUser((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <>
      <StyledFormLoginRegister onSubmit={handleSubmit}>
        <div className="login-page">
          <h2>Login</h2>
          {state && state.invalidTokenText && (
            <div className="error-alert">{state.invalidTokenText}</div>
          )}
          {auth.loginStatus === "rejected" ? (
            <div className="error-alert">{auth.loginError?.message}</div>
          ) : null}
          <div className="input-container">
            <input
              type="text"
              placeholder="email address"
              name="email"
              className={`input-field ${
                errors.email ? "invalid-input" : undefined
              }`}
              onChange={setValues}
            />
            {errors.email != null && (
              <p className="error-text">{errors.email}</p>
            )}
          </div>
          <div className="input-container">
            <input
              type="password"
              name="password"
              className={`input-field ${
                errors.password ? "invalid-input" : undefined
              }`}
              placeholder="password"
              onChange={setValues}
            />
            {errors.password != null && (
              <p className="error-text">{errors.password}</p>
            )}
          </div>
          <div className="input-container">
            <input
              type="checkbox"
              name="rememberMe"
              onChange={(e) =>
                setUser((prev) => ({ ...prev, rememberMe: e.target.checked }))
              }
            />
            &nbsp;&nbsp;<span className="checkbox-title">Remember me</span>
          </div>
          <button className="btn-submit">
            {auth.loginStatus === "pending" ? (
              <div className="loadingSpinner" />
            ) : (
              "Login"
            )}
          </button>
          <p className="p-with-link">
            Have no account? Please create one&nbsp;
            <button
              type={"button"}
              className="btn-link"
              onClick={() => navigate("/register")}
            >
              <span className="register-here">here</span>.
            </button>
          </p>
        </div>
      </StyledFormLoginRegister>
    </>
  );
};

export default Login;
