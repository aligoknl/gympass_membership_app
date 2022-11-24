import React, { useEffect } from "react";
import ClubCardRow from "../../components/ClubCardRow/ClubCardRow";
import "./home.css";
import { reset as resetClubs } from "../../slices/clubSlice";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetClubs());
  }, []);

  return (
    <div className="home">
      <div className="description">
        <h1>Find the most exclusive clubs!</h1>
        <h3>
          Use Gympass to find your favorite clubs and check-in easily! You can
          buy credits and use them to check-in.
        </h3>
      </div>
      <ClubCardRow
        title="Clubs Under 5 Credits"
        route="underFive"
        className=""
      />
      <ClubCardRow
        className="secondBackgroundColor"
        title="Clubs with 5 and More Credits"
        route="aboveFive"
      />
    </div>
  );
};

export default Home;
