import React from "react";
import { GrLocation, GrFormClock,GrPhone } from "react-icons/gr";
// import {GrFormClock} from "react-icons/gr"
export default function Contactloc() {
  return (
    <div className="pb-5">
      <div className="container my-4">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body text-start">
                <div className="title-holder">
                  <h5 className="card-title ">Contact & Location</h5>
                </div>
                <div className="row contact-location-sec p-2 p-lg-3">
                  <div className="contact-location-section-with-icon col-md-5 mb-2 ">
                    <GrLocation className="me-2 fs-4" />
                    152 A - G / 1, Canal Bank, Johar Town, Lahore
                  </div>
                  <div className="contact-location-section-with-icon col-md-4 mb-2">
                    <GrFormClock className="me-2 fs-2" />
                    24 Hours Emergency
                  </div>
                  <div className="contact-location-section-with-icon col-md-3">
                    <GrPhone className="me-2 fs-4" />
                    <span>042 35302701</span>
                    <br />
                    <span className="ms-5 text-muted">Call Mon - Sun, 9am to 11pm</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
