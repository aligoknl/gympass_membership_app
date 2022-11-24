import { PASSWORD_REGEX, USERNAME_REGEX, EMAIL_REGEX } from "./constants.js";

export const validateUser = (user) => {
  let errors = {};
  // validate username
  if (!validateUsernameLength(user.name)) {
    errors.name = "username should be between 5 and 25 characters.";
  }
  // validate password
  if (!validatePasswordLength(user.password)) {
    errors.password = "password is too short. Should be at least 8 characters";
  } else if (!validatePasswordStrength(user.password)) {
    errors.password =
      "password is too weak. Should include 1 Capital letter, 1 number, and 1 special character.";
  }

  // validate email address
  if (!validateEmailAddress(user.email)) {
    errors.email =
      "email address should contain @ sign. Only dot (.), and underscore (_) are allowed as special characters";
  }

  // validate user type
  if (!validateUserType(user.userType)) {
    errors.userType = "user type is required field";
  }

  return errors;
};

export const validatePasswordLength = (v) => {
  if (v.length >= 8) {
    return true;
  }
  return false;
};

export const validateUsernameLength = (v) => {
  if (v.length >= 5 && v.length <= 25) {
    return true;
  }
  return false;
};

export const validateUsernamPattern = (v) => {
  return USERNAME_REGEX.test(v);
};

export const validateEmailAddress = (v) => {
  return EMAIL_REGEX.test(v);
};

export const validateUserType = (v) => {
  if (v.length > 0) {
    return true;
  } else {
    return false;
  }
};

export const validatePasswordStrength = (v) => {
  return PASSWORD_REGEX.test(v);
};
