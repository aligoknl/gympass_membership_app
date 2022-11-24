import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../slices/authSlice";
import { StyledFormLoginRegister } from "../../components/StyledFormLoginRegister";
import { FaQuestion } from "react-icons/fa";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    userType: "non-member",
  });

  useEffect(() => {
    if (auth.user) {
      navigate("/");
    }
  }, [auth.user, navigate]);

  let errors = {};

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(user));
  };

  if (auth.registerError.errors) {
    errors = auth.registerError.errors;
  }

  const setValues = (e) => {
    const { name, value } = e.target;

    setUser((prev) => ({ ...prev, [name]: value.trim() }));
  };

  return (
    <>
      <StyledFormLoginRegister onSubmit={handleSubmit}>
        <div className="register-page">
          <h2>Create new account</h2>
          {auth.registerError && auth.registerError.message && (
            <div className="error-alert">{auth.registerError.message}</div>
          )}
          <div className="input-container">
            <div className="radio-input">
              I want to be a member
              <input
                id="non-member"
                value="non-member"
                name="userType"
                type="radio"
                onChange={setValues}
                defaultChecked
              />
            </div>
            <div className="radio-input">
              I am a club owner
              <input
                id="admin"
                value="admin"
                name="userType"
                type="radio"
                onChange={setValues}
              />
            </div>
            {errors.userType != null && (
              <p className="error-text">{errors.userType}</p>
            )}
          </div>
          <div className="input-container">
            <div className="input-with-tip">
              <input
                type="text"
                placeholder="name"
                name="name"
                className={`input-field ${
                  errors.name != null ? "invalid-input" : undefined
                }`}
                onChange={setValues}
              />
              <FaQuestion className="tip-icon" />
              <p className="tip">
                Name should be between 5 and 25 characters long.
              </p>
            </div>
            {errors.name != null && <p className="error-text">{errors.name}</p>}
          </div>
          <div className="input-container">
            <input
              type="email"
              placeholder="example@example.com"
              name="email"
              className={`input-field ${
                errors.email != null ? "invalid-input" : undefined
              }`}
              onChange={setValues}
            />
            {errors.email != null && (
              <p className="error-text">{errors.email}</p>
            )}
          </div>
          <div className="input-container">
            <div className="input-with-tip">
              <input
                type="password"
                name="password"
                placeholder="password"
                className={`input-field ${
                  errors.password != null ? "invalid-input" : undefined
                }`}
                onChange={setValues}
              />
              <FaQuestion className="tip-icon" />
              <p className="tip">
                Password should be at least 8 characters. It must include 1
                capital letter, 1 number, and 1 special character
              </p>
            </div>
            {errors.password != null && (
              <p className="error-text">{errors.password}</p>
            )}
          </div>
          <button className="btn-submit">
            {auth.registerStatus === "pending" ? "Submitting..." : "Register"}
          </button>
          <p className="p-with-link">
            Already have an account? Please login&nbsp;
            <button
              type={"button"}
              className="btn-link"
              onClick={() => navigate("/login")}
            >
              <span className="register-here">here</span>.
            </button>
          </p>
        </div>
      </StyledFormLoginRegister>
    </>
  );
};

export default Register;
