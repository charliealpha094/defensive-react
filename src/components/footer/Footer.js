import React from "react";

import "./FooterStyle.css";
import { HiOutlinePaperAirplane } from "react-icons/hi";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import {
  FiDribbble,
  FiFacebook,
  FiLinkedin,
  FiMail,
  FiGithub,
  FiInstagram,
} from "react-icons/fi";

import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="logo-footer">
            <HiOutlinePaperAirplane className="icon" />
            <h2>Defensive Inc.</h2>
          </div>
          <Link
            activeClass="active"
            to="top"
            spy={true}
            smooth={true}
            duration={500}
          >
            <BsFillArrowUpCircleFill className="icon" />
          </Link>
        </div>
        <div className="col-container">
          <div className="col">
            <h3>Navigation</h3>
            <p>Home</p>
            <p>F16</p>
            <p>Refurbishment</p>
            <p>Contact</p>
          </div>
          <div className="col">
            <h3>Information</h3>
            <p>Home</p>
            <p>F16</p>
            <p>Refurbishment</p>
            <p>Contact</p>
          </div>
          <div className="col">
            <h3>Legal</h3>
            <p>Home</p>
            <p>F16</p>
            <p>Refurbishment</p>
            <p>Contact</p>
          </div>
          <form>
            <h3>Recruitment</h3>
            <input type="email" placeholder="Enter your email" />
            <FiMail className="mail-icon" />
            <div className="social-group">
              <FiInstagram className="social-icon" />
              <FiFacebook className="social-icon" />
              <FiLinkedin className="social-icon" />
              <FiDribbble className="social-icon" />
              <FiGithub className="social-icon" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
