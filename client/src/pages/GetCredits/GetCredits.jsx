import React, { useState } from "react";
import "./getCredits.css";
import { useSelector, useDispatch } from "react-redux";
import { updateUser, updateError } from "../../slices/authSlice";
import { useEffect } from "react";
import { CREDIT_VALUE } from "../../../constants";
import GetCreditsModal from "../../components/Modals/GetCreditsModal";
import { toast, ToastContainer } from "react-toastify";
import CreditBox from "../../components/CreditBox/CreditBox";

const GetCredits = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.auth);
  const [membership, setMembership] = useState({
    membership: {
      credit: user.membership.credit,
      currentCredit: user.membership.currentCredit,
      status: user.membership.status,
      membershipDate: user.membership.membershipDate,
      membershipEndDate: user.membership.membershipEndDate,
      invoice: user.membership.invoice,
    },
    userType: user.membership.userType,
  });

  const [isGetCreditsModal, setIsGetCreditsModal] = useState(false);

  const [confirmedCredit, setConfirmedCredit] = useState("");

  const openGetCreditsModal = (e) => {
    const selectedCredit = Number(e.target.id);
    setConfirmedCredit(selectedCredit);
    if (membership) {
      membership.membership.currentCredit += selectedCredit;
      membership.membership.credit = selectedCredit;
    }

    if (membership.membership.invoice.length !== 0) {
      membership.membership.invoice[
        membership.membership.invoice.length - 1
      ].amount = selectedCredit;
      membership.membership.invoice[
        membership.membership.invoice.length - 1
      ].description = `bought ${selectedCredit} credits and you paid ${
        selectedCredit * CREDIT_VALUE
      } Euros`;
    }

    setIsGetCreditsModal(true);
  };

  useEffect(() => {
    const date = new Date();
    if (auth.user) {
      setMembership(() => ({
        membership: {
          credit: user.membership.credit,
          currentCredit: user.membership.currentCredit,
          status: user.membership.status,
          membershipDate: new Date(),
          membershipEndDate: date.setDate(date.getDate() + 30),
          invoice: [
            ...user.membership.invoice,
            {
              amount:
                user.membership.invoice.length === 0
                  ? 0
                  : user.membership.invoice[user.membership.invoice.length - 1]
                      .amount,
              date: new Date(),
              description:
                user.membership.invoice.length === 0
                  ? null
                  : user.membership.invoice[user.membership.invoice.length - 1]
                      .description,
              status: "outstanding",
            },
          ],
        },
        userType: "member",
      }));
    }
  }, [user]);

  const getDateTime = () => {
    const date = new Date();
    date.setDate(date.getDate() + 30);
    return `${date.toLocaleDateString("en-GB", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })}  ${date.toLocaleTimeString("en-GB").slice(0, 5)}`;
  };

  if (updateError) {
    toast.error(
      "Oops! Sorry. Something went wrong. The credits cannot be added to your account."
    );
  }

  return (
    <div className="get-credits-container">
      <ToastContainer />
      {isGetCreditsModal && (
        <GetCreditsModal
          credit={confirmedCredit}
          getCredits={() => {
            dispatch(updateUser(membership));
            toast.success(
              `You have succesfully bought the ${confirmedCredit} credits.`
            );
            setIsGetCreditsModal(false);
          }}
          onCancel={() => setIsGetCreditsModal(false)}
          dueDate={getDateTime()}
        />
      )}

      <CreditBox
        credit="10"
        openModal={openGetCreditsModal}
        price="20"
        title="SMALL"
      />
      <CreditBox
        credit="20"
        openModal={openGetCreditsModal}
        price="40"
        title="MEDIUM"
      />
      <CreditBox
        credit="40"
        openModal={openGetCreditsModal}
        price="80"
        title="LARGE"
      />
    </div>
  );
};

export default GetCredits;
