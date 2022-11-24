import React from "react";
import PropTypes from "prop-types";
import StyledConfirmationModal from "./StyledConfirmationModal";

const CancelMembershipModal = ({ credit, onCancel, cancelMembership }) => {
  return (
    <StyledConfirmationModal>
      <div className="modal">
        <p className="modal-text">
          You have {credit} credits and you are cancelling your membership. You
          will not be able to check in if you cancel your membership. Are you
          sure?
        </p>
        <div className="btn-list">
          <button className="btn btn-approve" onClick={cancelMembership}>
            Yes, cancel it!
          </button>
          <button className="btn btn-cancel" onClick={onCancel}>
            No, keep it!
          </button>
        </div>
      </div>
    </StyledConfirmationModal>
  );
};

CancelMembershipModal.propTypes = {
  onCancel: PropTypes.func.isRequired,
  credit: PropTypes.number.isRequired,
  cancelMembership: PropTypes.func.isRequired,
};
export default CancelMembershipModal;
