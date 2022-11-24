import React from "react";
import { Link } from "react-router-dom";
import { FaDumbbell } from "react-icons/fa";

import "./pageNotFound.css";

const PageNotFound = () => {
  return (
    <>
      <div className="mainbox">
        <div className="number-dumbbell">
          <div className="number-four-first">4</div>
          <i className="dumbbell">
            <FaDumbbell />
          </i>
          <div className="number-four-second">4</div>
        </div>
        <div className="page-not-found-message">
          <h3>Ooops...page not found.</h3>
          <p className="go-home">
            Let&apos;s go{" "}
            <Link to="/" className="home-link">
              home
            </Link>{" "}
            and try from there.
          </p>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
