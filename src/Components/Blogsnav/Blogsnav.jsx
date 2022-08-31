import React from "react";
import "./Blogsnav.css";
import { Routes, Route, Link } from "react-router-dom";
export default function Blogsnav() {
  return (
    <div className="d-block d-md-none">
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {" "}
            <Link to="/">
              <img src="/logo.png" alt="" />
            </Link>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link show menu-item-object fw-bold py-4"
                  aria-current="page"
                  href="#"
                >
                  FIND & BOOK DOCTORS
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
