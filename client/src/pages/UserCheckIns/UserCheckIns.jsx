import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./userCheckIns.css";
import {
  getClubsByUser,
  getCheckInsByUser,
  reset as resetUserClubs,
} from "../../slices/userDataSlice";
import ClubCard from "../../components/ClubCard/ClubCard";
import { ROLE_ADMIN } from "../../../constants";
import { ROLE_MEMBER } from "../../../constants";
import {
  setIsClubDetailPage,
  reset as resetClubs,
} from "../../slices/clubSlice";

const userClubs = () => {
  const { user } = useSelector((state) => state.auth);
  const userData = useSelector((state) => state.userData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetClubs());
    dispatch(setIsClubDetailPage(false));

    if (user.userType === ROLE_ADMIN) {
      dispatch(getClubsByUser());
    } else {
      dispatch(getCheckInsByUser());
    }
    return () => dispatch(resetUserClubs());
  }, []);

  const clubsTitle = user.userType === ROLE_ADMIN ? "My Clubs" : "My Check-ins";

  const myResult =
    user.userType === ROLE_MEMBER ? userData.myCheckIns : userData.myClubs;

  const sortedMyResult = [...myResult];

  sortedMyResult.sort((a, b) => {
    return new Date(b.createdAt) - new Date(a.createdAt);
  });

  return (
    <>
      <h1 className="my-clubs-title">{clubsTitle}</h1>
      <div className="my-clubs">
        <div className="my-clubs-list">
          {userData.isLoading && <div className="my-clubs-loadingSpinner" />}
          {userData.error && !userData.isLoading && (
            <p className="my-clubs-error">{userData.error}</p>
          )}
          {sortedMyResult.length > 0 ? (
            sortedMyResult.map((club) => {
              return <ClubCard key={club._id} item={club} />;
            })
          ) : (
            <h2 className="my-clubs-no-club-message">
              There is no club we can show.
            </h2>
          )}
        </div>
      </div>
    </>
  );
};

export default userClubs;
