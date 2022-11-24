import React from "react";
import "./clubCard.css";
import locationIcon from "../../assets/location.svg";
import creditIcon from "../../assets/creditIcon.png";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ClubCard = ({ item }) => {
  const auth = useSelector((state) => state.auth);
  return (
    <>
      <div className="card-container">
        <div className="card">
          <div className="card-image-container">
            <img className={"card-image"} src={item.image} />
          </div>
          <div className="card-content">
            <h2 className="card-title">
              {item.title.length > 15
                ? item.title.slice(0, 15) + "..."
                : item.title}
            </h2>
            <div className="card-icon-text-container">
              <div className="card-icon-container">
                <img className="card-icon" src={locationIcon} alt="location" />
              </div>
              <p className="card-text">{item.address.city}</p>
            </div>
            <div className="card-icon-text-container">
              <div className="card-icon-container">
                <img className="card-icon" src={creditIcon} alt="credit" />
              </div>
              <p className="card-text">Only {item.credit} credits</p>
            </div>

            {auth.user !== null ? (
              <Link to={`/clubDetail/${item._id}`} className="club-card-link">
                View Details
              </Link>
            ) : (
              <Link to={"/register"} className="club-card-link">
                Sign up to check in!
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
ClubCard.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ClubCard;
