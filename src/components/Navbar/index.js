import React from "react";
import { NavLink, Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
      <div className="container">
        <h1>
          <Link to="/" className="navbar-brand fs-1">
            Rick & Morty <span>Wiki</span>
          </Link>
        </h1>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <style jsx="true">
            {`
              button[aria-expanded="false"] > .close {
                display: none;
              }
              button[aria-expanded="true"] > .open {
                display: none;
              }
            `}
          </style>
          <i className="fas fa-bars open fw-bold text-dark"></i>
          <i className="fas fa-times close fw-bold text-dark"></i>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end fs-3"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <NavLink className="nav-link" activeclassname="active" to="/">
              Characters
            </NavLink>
            <NavLink
              className="nav-link"
              activeclassname="active"
              to="/episodes"
            >
              Episodes
            </NavLink>
            <NavLink
              className="nav-link"
              activeclassname="active"
              to="/locations"
            >
              Locations
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};
