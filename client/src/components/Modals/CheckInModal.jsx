import React from "react";
import PropTypes from "prop-types";
import StyledConfirmationModal from "./StyledConfirmationModal";

const CheckInModal = ({ clubTitle, onCancel, onCheckIn, clubCredit }) => {
  return (
    <StyledConfirmationModal>
      <div className="modal">
        <p className="modal-text">
          You are checking in for {clubTitle} and {clubCredit} credits will be
          subtracted from your account.
        </p>
        <div className="btn-list">
          <button className="btn btn-approve" onClick={onCheckIn}>
            Check in
          </button>
          <button className="btn btn-cancel" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </StyledConfirmationModal>
  );
};

CheckInModal.propTypes = {
  onCancel: PropTypes.func.isRequired,
  clubTitle: PropTypes.string.isRequired,
  onCheckIn: PropTypes.func.isRequired,
  clubCredit: PropTypes.number.isRequired,
};
export default CheckInModal;
