import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser, reset as resetAuth } from "../../slices/authSlice";
import { reset as resetData } from "../../slices/userDataSlice";
import { IconContext } from "react-icons";
import "./nav.css";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/gympassLogo2.jpg";
import { FiLogOut } from "react-icons/fi";
import { ROLE_MEMBER, ROLE_ADMIN, ROLE_NON_MEMBER } from "../../../constants";
const Nav = () => {
  const [sidebar, setSidebar] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAuthenticated = user != null;
  const isAdmin = user != null && user.userType === ROLE_ADMIN;
  const isMember = user != null && user.userType === ROLE_MEMBER;
  const isNonMember = user != null && user.userType === ROLE_NON_MEMBER;

  useEffect(() => {
    if (window.scrollY > 700) {
      window.scrollTo({ top: true });
    }
  }, [location.pathname]);

  const onLogout = () => {
    dispatch(logoutUser());
    dispatch(resetAuth());
    dispatch(resetData());
    navigate("/login");
  };
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div>
      <IconContext.Provider value={{ color: "#000000" }}>
        <div className="navbar">
          <div className="links">
            <Link to="/" className="nav-text">
              Home
            </Link>
            {isAdmin && (
              <>
                <Link to="/myClubs" className="nav-text">
                  <li>My Clubs</li>
                </Link>
                <Link to="/createClub" className="nav-text">
                  <li>Create Club</li>
                </Link>
              </>
            )}
            {isMember && (
              <>
                <Link to="/myCheckIns" className="nav-text">
                  <li>My Check-ins</li>
                </Link>
                <Link to="/myMembership" className="nav-text">
                  <li>My Membership</li>
                </Link>
                <Link to="/getCredits" className="nav-text">
                  <li>Get Credit</li>
                </Link>
                <Link to="/invoice" className="nav-text">
                  <li>My Invoice</li>
                </Link>
              </>
            )}
            {isNonMember && (
              <Link to="/getCredits" className="nav-text">
                <li>Start Membership</li>
              </Link>
            )}
          </div>
          <Link to="#" className="menu-bars">
            <FaBars className="hamburger" onClick={showSidebar} />
          </Link>
          <img
            className={isAuthenticated ? "logo-img" : "logo-img-no-user"}
            onClick={() => navigate("/")}
            src={logo}
          />
          <ul className="buttons-nav">
            {!isAuthenticated ? (
              <>
                <Link to="/login">
                  <button className="button-nav">Log in</button>
                </Link>
                <Link to="/register">
                  <button className="button-nav">Sign up</button>
                </Link>
              </>
            ) : (
              <div className="flex-row v-centered">
                <Link to="/" className="user-name-nav">
                  Hello, {user.name}
                </Link>
                <FiLogOut className="icon" onClick={onLogout} />
              </div>
            )}
          </ul>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars-close">
                <AiOutlineClose />
              </Link>
            </li>
            <li className="buttons-hamburger">
              {isAuthenticated ? (
                <>
                  <Link to="/" className="user-name-hamburger">
                    {user.name}
                  </Link>
                  <button className="button-hamburger" onClick={onLogout}>
                    Log out
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login">
                    <button className="button-hamburger">Log in</button>
                  </Link>
                  <Link to="/register">
                    <button className="button-hamburger">Sign up</button>
                  </Link>
                </>
              )}
            </li>
            <Link to="/" className="nav-text-hamburger">
              <li>Home</li>
            </Link>
            {isAdmin && (
              <>
                <Link to="/createClub" className="nav-text-hamburger">
                  <li>Create Club</li>
                </Link>
                <Link to="/myClubs" className="nav-text-hamburger">
                  <li>My Clubs</li>
                </Link>
              </>
            )}
            {isMember && (
              <>
                <Link to="/myCheckIns" className="nav-text-hamburger">
                  <li>My Check-ins</li>
                </Link>
                <Link to="/myMembership" className="nav-text-hamburger">
                  <li>My Membership</li>
                </Link>
                <Link to="/getCredits" className="nav-text-hamburger">
                  <li>Get Credit</li>
                </Link>
                <Link to="/invoice" className="nav-text-hamburger">
                  <li>My Invoice</li>
                </Link>
              </>
            )}
            {isNonMember && (
              <Link to="/getCredits" className="nav-text-hamburger">
                <li>Start Membership</li>
              </Link>
            )}
          </ul>
        </nav>
      </IconContext.Provider>
    </div>
  );
};

export default Nav;
