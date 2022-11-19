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
            <Link className="nav-link" to="/">
              Home 
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              {props.aboutText}
            </Link>
          </li>
        </ul>
        {/* <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form> */}

        {/* the toggle function */}
        <div
          className={`form-check form-switch mx-5 text-${
            // checking the condition
            props.mode === "light" ? "dark" : "light"
          }`}
        >
          {/* the method this gonna call */}
          <input
            onClick={props.toggleMode}
            className="form-check-input"
            type="checkbox"
            id="flexSwitchCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            {
            // checking the condition
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
