import React from "react";
import "./creditBox.css";

import PropTypes from "prop-types";

const CreditBox = ({ credit, price, openModal, title }) => {
  return (
    <li className="credit-card-container">
      <div className="credit-card">
        <div className="credit-card-content">
          <h2 className="credit-card-title">{title} PACKAGE</h2>
          <h3 className="credit-card-title">{credit} Credits</h3>
          <p className="credit-card-title">Only {price} Euros!</p>
          <button
            className="credit-card-button"
            onClick={openModal}
            id={credit}
          >
            Get {credit} Credits!
          </button>
        </div>
      </div>
    </li>
  );
};
CreditBox.propTypes = {
  credit: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default CreditBox;
