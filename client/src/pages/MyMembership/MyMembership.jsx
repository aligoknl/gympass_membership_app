import React, { useState, useEffect } from "react";
import "./myMembership.css";
import { useSelector, useDispatch } from "react-redux";
import { updateUser, updateError } from "../../slices/authSlice";
import CancelMembershipModal from "../../components/Modals/CancelMembershipModal";
import { toast, ToastContainer } from "react-toastify";

const MyMembership = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [isCancelMembershipModal, setIsCancelMembershipModal] = useState(false);

  const [cancelMembership, setCancelMembership] = useState({
    userType: user.membership.userType,
  });

  const openCancelMembershipModal = () => {
    setIsCancelMembershipModal(true);
  };
  useEffect(() => {
    if (user) {
      setCancelMembership(() => ({
        userType: "non-member",
      }));
    }

    if (updateError) {
      toast.error(
        "Oops! Sorry. Something went wrong. We cannot cancel your account."
      );
    }
  }, [user]);

  const getDateTime = (date, days) => {
    const membershipDate = new Date(date);
    membershipDate.setDate(membershipDate.getDate() + days);
    return `${membershipDate.toLocaleDateString("en-GB", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })}  ${membershipDate.toLocaleTimeString("en-GB").slice(0, 5)}`;
  };

  if (updateError) {
    toast.error(
      "Oops! Sorry. Something went wrong. We cannot cancel your account."
    );
  }

  return (
    <>
      <div className="membership-container">
        <ToastContainer />
        {isCancelMembershipModal && (
          <CancelMembershipModal
            credit={user.membership.currentCredit}
            cancelMembership={() => {
              dispatch(updateUser(cancelMembership));
              toast.success("You have succesfully cancelled your account.");
              setIsCancelMembershipModal(false);
            }}
            onCancel={() => setIsCancelMembershipModal(false)}
          />
        )}
        <div className="membership-container">
          <div className="membership-detail">
            <h1 className="membership-head-title">MY MEMBERSHIP</h1>
            <h2 className="membership-title">
              Membership Credit
              <p className="membership-info">
                {" "}
                {user.membership.currentCredit}
              </p>
            </h2>
            <h2 className="membership-title">
              Membership Start Date{" "}
              <p className="membership-info">
                {" "}
                {getDateTime(user.membership.membershipDate, 0)}
              </p>
            </h2>
            <h2 className="membership-title">
              Membership End Date{" "}
              <p className="membership-info">
                {" "}
                {getDateTime(user.membership.membershipEndDate, 0)}
              </p>
            </h2>
            <div className="membership-button">
              <button
                className="membership-cancel-button"
                onClick={openCancelMembershipModal}
              >
                Cancel My Membership
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyMembership;
