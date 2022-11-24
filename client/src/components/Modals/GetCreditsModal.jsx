import React from "react";
import PropTypes from "prop-types";
import StyledConfirmationModal from "./StyledConfirmationModal";

const GetCreditsModal = ({ credit, onCancel, getCredits, dueDate }) => {
  return (
    <StyledConfirmationModal>
      <div className="modal">
        <p className="modal-text">
          You are getting {credit} credits. You can use your credits by{" "}
          {dueDate}.
        </p>
        <div className="btn-list">
          <button className="btn btn-approve" onClick={getCredits}>
            Get {credit} Credits!
          </button>
          <button className="btn btn-cancel" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </StyledConfirmationModal>
  );
};

GetCreditsModal.propTypes = {
  onCancel: PropTypes.func.isRequired,
  credit: PropTypes.number.isRequired,
  dueDate: PropTypes.string.isRequired,
  getCredits: PropTypes.func.isRequired,
};
export default GetCreditsModal;
