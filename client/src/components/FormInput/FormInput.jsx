import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import "./formInput.css";
import Cities from "../Cities/Cities";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, ...inputProps } = props;

  const handleFocus = () => {
    setFocused(true);
  };

  return (
    <div className="club-line">
      <label className="club-line-title">{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={focused.toString()}
      />
      <Cities />

      <span className="club-line-error-message">{errorMessage}</span>
    </div>
  );
};

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  errorMessage: PropTypes.string,
};
export default FormInput;
