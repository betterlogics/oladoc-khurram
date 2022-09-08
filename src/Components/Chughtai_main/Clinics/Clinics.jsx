import React from "react";

export default function Clinics() {
  return (
    <div>
      <div className="card ">
        <div className="card-body text-lg-start">
          <div className="row">
            <div className="col-12 col-lg-8">
              <h5 className="card-title">
                Chughtai Lab (X-Ray, Ultrasound, Pathology)
              </h5>
              <p className="card-text">
                17 Awaisia Housing Society, Near Ghazi Chowk, College Road,
                Lahore
              </p>
            </div>
            <div className="col-12 col-lg-4">
              {" "}
              <a href="#" className="btn border-dark d-block">
                Call Helpline
              </a>
            </div>
          </div>
          <div className="doc-profile-page-content pt-4">
            <ul className="row list-unstyled">
              <li className="col-4 mb-3">Today</li>
              <li className="col-8 mb-3">09:00 AM - 09:00 PM</li>
              <li className="col-4 mb-3">Tomorrow</li>
              <li className="col-8 mb-3">09:00 AM - 09:00 PM</li>
              <li className="col-4 mb-1"></li>
              <li className="col-8 mb-1">
                <a href="" className="btn">
                  View all timings
                </a>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
