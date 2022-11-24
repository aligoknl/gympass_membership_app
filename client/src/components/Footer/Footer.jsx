import React from "react";
import "./footer.css";
import logo from "../../assets/gympassLogo4.jpg";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="sec footer-follow">
          <Link to="/">
            <img src={logo} className="logo" />
          </Link>

          <ul className="sci">
            <li>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaIcons.FaFacebook className="icons" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaIcons.FaInstagram className="icons" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaIcons.FaLinkedin className="icons" />
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaIcons.FaTwitter className="icons" />
              </a>
            </li>
          </ul>
        </div>
        <div className="sec quickLinks">
          <h2 className="footer-quick-links-title">Quick Links</h2>
          <ul className="footer-links">
            <li className="footer-home-link">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/aboutUs">About Us</Link>
            </li>
          </ul>
        </div>
        <div className="sec contact">
          <h2>Contact Info</h2>
          <ul className="info">
            <li>
              <span>
                <FaIcons.FaPhoneSquareAlt className="icons" />
              </span>
              <p>
                <a href="tel:0685563829">+3161231231</a>
              </p>
            </li>
            <li className="footer-email">
              <span>
                <FaIcons.FaMailBulk className="icons" />
              </span>
              <p>
                <a href="mailto:gympass@info.com">gympass@info.com</a>
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyrightText">
        <p>Copyright Ⓒ 2022 gympass. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
