import React from "react";
import "./Bookapp.css";
import { BsFillCalendarPlusFill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { BsCheckCircleFill } from "react-icons/bs";
export default function Bookapp() {
  return (
    <div className="bookapp py-4 py-md-5">
      <div className="container">
        <h2 className="h4 mb-4">Book appointments in 3 easy steps</h2>
        <div className="row pt-md-4 mx-0 mx-md-row px-2 px-md-0 align-items-center justify-content-center">
          <div className="col-12 col-md-5 pb-4 order-md-2 text-start">
            <ul className="list-unstyled text-start">
              <li>
                <BsSearch className="svg" />
                <span>
                  <span className="text-primary fw-bold">Search </span>
                  for doctors by specialty, hospital, service or disease
                </span>
              </li>
              <li>
                <BsCheckCircleFill className="svg" />
                <span>
                  <span className="text-primary fw-bold">Select </span>
                  based on Experience, Fee or Rating
                </span>
              </li>
              <li>
                <BsFillCalendarPlusFill className="svg text-secondary text-sm-center" />
                <span>
                  <span className="text-primary fw-bold">Book </span>a Confirmed
                  Appointment within Seconds
                </span>
              </li>
            </ul>
            <div className="btn-holder text-center text-md-start d-sm-block">
              <a href="" className="btn btn-primary px-4 mt-md-4">
                Find a Doctor
              </a>
            </div>
          </div>
          <div className="col-12 col-md-4  order-md-1 ">
            <div className="mobileapp-img-holder easystepmobileapp-img-holder position-relative mx-auto mb-3 mb-md-2">
              <img
                src="/mobile-img-2.png"
                alt=""
                className="mobileapp-img img-fluid"
              />
              <img
                src="/easystep3.gif"
                alt=""
                className="img-fluid inner-data"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
