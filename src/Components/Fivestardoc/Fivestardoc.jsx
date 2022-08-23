import React from "react";
import "./Fivestardoc.css";
import { BsCheckLg } from "react-icons/bs";
export default function Fivestardoc() {
  return (
    <div className="fivestardoc pt-4 mb-4">
      <div className="container">
        <div className="row align-items-end jutify-content-around">
          <div className="col-12 col-md-6 order-md-2">
            <header className="head d-md-none text-center pb-2">
              <h2 className="h4 mb-2">Are you a five-star doctor?</h2>
              <p>Sign-up to reach millions of patients</p>
            </header>
            <img
              src="/phones.png"
              alt=""
              className="img-fluid d-block mx-auto"
            />
          </div>
          <div className="col-12 col-md-5 py-4 py-md-5 order-md-1 px-3 px-md-col">
            <header className="head d-md-block d-none text-start pb-2">
              <h2 className="h4 mb-2">Are you a five-star doctor?</h2>
              <p>Sign-up to reach millions of patients</p>
            </header>
            <ul className="py-2 py-md-4 list-unstyled text-start  yellow_tick_svg">
              <li className="mb-2">
                <BsCheckLg className="me-2 text-warning" />
                Get more appointments through online bookings
              </li>
              <li className="mb-2">
                <BsCheckLg className="me-2 text-warning" />
                Create and view patient records from anywhere
              </li>
              <li className="mb-2">
                <BsCheckLg className="me-2 text-warning" />
                Manage your schedule efficiently
              </li>
            </ul>
            <a href="" className="btn btn-primary btn-block fw-light mx-auto mx-md-0 mb-2 col-9 col-md-5">Join Now</a>
          </div>
        </div>
      </div>
    </div>
  );
}
