import React from "react";
import ClubCard from "../ClubCard/ClubCard";
import PropTypes from "prop-types";
import "./clubCardRow.css";
import { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import Spinner from "../Spinner/Spinner";

const ClubCardRow = ({ title, className, route }) => {
  const [clubs, setClubs] = useState(null);
  const { isLoading, error, performFetch, cancelFetch } = useFetch(
    `/club/${route}`,
    (response) => {
      setClubs(response.result);
    }
  );

  useEffect(() => {
    performFetch();

    return () => cancelFetch();
  }, []);

  let content = null;

  if (isLoading) {
    return <Spinner />;
  } else if (error != null) {
    content = (
      <div className="home-club-cards-message">
        Oops! We cannot show the clubs now.
      </div>
    );
  } else {
    content = (
      <ul data-loaded={clubs != null} className="club-card-row">
        {clubs &&
          clubs.length > 0 &&
          clubs.map((club) => {
            return (
              <ClubCard item={club} key={club._id} data-elementid={club._id} />
            );
          })}
        {clubs && clubs.length <= 0 && (
          <div className="home-club-cards-message">
            Oops! We do not have any clubs now.
          </div>
        )}
      </ul>
    );
  }

  return (
    <div className={`row-container ${className}`}>
      <div className="row">
        <h2 className="row-title"> {title}</h2>
        <hr className="row-title-line" />
        {content}
      </div>
    </div>
  );
};

ClubCardRow.propTypes ==
  {
    title: PropTypes.string.isRequired,
    className: PropTypes.string,
    route: PropTypes.string,
  };

export default ClubCardRow;
