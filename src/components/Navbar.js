import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar  navbar-expand-lg sticky-top navbar-${props.mode} bg-${props.mode}`}
    >
      <Link className=" text-primary navbar-brand mx-3" to="/">
        {props.title}
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
    
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/home">
              Home 
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              {props.aboutText}
            </Link>
          </li>
        </ul>
        
        <div
          className={`form-check form-switch mx-5 text-${
            props.mode === "light" ? "dark" : "light"
          }`}
        >
          <input
            onClick={props.toggleMode}
            className="form-check-input"
            type="checkbox"
            id="flexSwitchCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            {
            props.mode === "light" ? "Enable Dark" : "Disable Dark"
          } Mode
          </label>
        </div>
      </div>
    </nav>
  );
}

// Navbar.propTypes = {
//     title: PropTypes.string,
//     aboutText: PropTypes.string
// };
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Set title here",
  aboutText: "About",
};
