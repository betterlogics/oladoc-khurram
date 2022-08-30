import React from "react";
import "./Healthnav.css";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { ImYoutube2 } from "react-icons/im";
import { FaSearch } from "react-icons/fa";
import { Routes, Route, Link } from "react-router-dom";
export default function Healthnav() {
  return (
    <div className="navbar-light bg-white fixed-top mediumnavigation py-3">
      <div className="container">
        {/* begin logo  */}
        <div className="row brandrow">
          <div className="col-lg-4 col-md-4 col-12 text-start customarea ">
            <a
              href=""
              className="btn rounded-pill border follow me-2"
              target="_blank"
            >
              <AiOutlineTwitter />
              Follow
            </a>
            <a className="me-2" href="">
              <FaFacebookF />
            </a>
            <a className="me-2" href="">
              <AiOutlineInstagram />
            </a>
            <a href="">
              <ImYoutube2 />
            </a>
          </div>
          <div className="col-lg-4 col-md-4 col-12 logoarea">
            <a href="" className="blog-logo">
              {" "}
              <Link to="/">
                <img src="/logo.png" alt="" />
              </Link>
            </a>
          </div>
          <div className="col-lg-4 col-md-4 col-12 text-end searcharea">
            <from className="search-form" role="Search" method="get" action="">
              <input
                type="search"
                name="s"
                id=""
                placeholder="Search..."
                className="search-field"
                title="seach-for"
              />
              <button type="submit" className="search-submit btn-primary">
                <FaSearch />
              </button>
            </from>
          </div>
        </div>
        {/* end logo  */}
        <div className="navarea">
          <nav className="navbar navbar-toggleable-sm">
            <button
              className="navbar-toggler navbar-togler-right"
              type="button"
              data-toggle="collapse"
              data-target="#bs4navbar"
              aria-controls="bs4navbar"
              aria-expanded="true"
              aria-label="Toggle navigation"
            ></button>
            <div
              id="bs4navbar"
              className="navbar-collapse collapse sow"
              aria-expanded="true"
            >
              <ul
                id="menu-main-menu"
                className="navbar-nav col-md-12 justify-content-center"
              >
                <li
                  id="menu-item-11"
                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-11 nav-item"
                >
                  <a href="" className="nav-link">
                    FIND & BOOK DOCTORS
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
