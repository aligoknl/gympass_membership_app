import React from "react";
import "./invoice.css";
import { useSelector } from "react-redux";
import { CREDIT_VALUE } from "../../../constants";

const Invoice = () => {
  const { user } = useSelector((state) => state.auth);

  const getDateTime = (date, days) => {
    const membershipDate = new Date(date);
    membershipDate.setDate(membershipDate.getDate() + days);
    return `${membershipDate.toLocaleDateString("en-GB", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })}  ${membershipDate.toLocaleTimeString("en-GB").slice(0, 5)}`;
  };

  const dueDate = getDateTime(user.membership.invoice[0].date, 7);

  const dateDiffInDays = (day1, day2) => {
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    const utc1 = Date.UTC(day1.getFullYear(), day1.getMonth(), day1.getDate());
    const utc2 = Date.UTC(day2.getFullYear(), day2.getMonth(), day2.getDate());
    return Math.floor((utc2 - utc1) / _MS_PER_DAY);
  };
  const day1 = new Date(),
    day2 = new Date(dueDate),
    difference = dateDiffInDays(day1, day2);

  const totalCredits = user.membership.invoice.reduce(
    (current, { amount }) => current + amount,
    0
  );

  const totalAmount = totalCredits * CREDIT_VALUE;

  return (
    <>
      <div className="invoice-container">
        <div className="invoice-detail">
          <h1 className="invoice-head-title"> MY INVOICE</h1>
          {difference > 0 ? (
            <h2 className="invoice-title">
              {" "}
              Invoice Payment Status
              <p className="invoice-info">
                {user.membership.invoice[0].status}
              </p>
            </h2>
          ) : (
            <h2 className="invoice-title">
              Invoice Payment Status <p className="invoice-info">Unpaid</p>
            </h2>
          )}
          <h2 className="invoice-title">
            Invoice Payment Due Date{" "}
            <p className="invoice-info">
              {" "}
              {getDateTime(user.membership.invoice[0].date, 7)}
            </p>
          </h2>
          <h2 className="invoice-title">
            Invoice Total Amount
            <p className="invoice-info">{totalAmount} Euros</p>
          </h2>
          <h2 className="invoice-title">
            {" "}
            Here are the activities
            {user.membership.invoice.map((invoice, index) => (
              <p className="invoice-info" key={index}>
                You {invoice.description} on {getDateTime(invoice.date, 0)}
              </p>
            ))}
          </h2>
        </div>
      </div>
    </>
  );
};

export default Invoice;
