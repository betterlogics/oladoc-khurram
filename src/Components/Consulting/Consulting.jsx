import React from "react";
import { MdVideocam } from "react-icons/md";
import "./Consulting.css";
import { RiArrowDropRightLine } from "react-icons/ri";
export default function Consulting() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-5 pt-3 py-md-3 mx-auto oldoc-care-banner px-md-0">
            {/*  */}
            <div class="card mb-3" style={{ maxwidth: "540px" }}>
              <div className="row g-0 justify-content-center">
                <div className="col-md-4 text-start oladoc-care-banner">
                  <MdVideocam />
                  <figure className="frame-figure  ">
                    <img
                      src="/oladoc-care-img-online-2.svg"
                      class="img-fluid rounded-start"
                      alt="..."
                    />
                  </figure>
                </div>
                <div className="col-md-8">
                  <div className="card-body p-2">
                    <h5 className="card-title">Oladoc Care</h5>
                    <p className="card-text">
                      Video Consultations with Top Specialists
                    </p>
                    <p className="card-text">
                      <spn className="book-now-bottom btn btn-warning">
                        Book Appointment <RiArrowDropRightLine />
                      </spn>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}

            {/*  */}
          </div>
          <div className="col-lg-5 pt-3 py-md-3 mx-auto oldoc-care-banner px-md-0">
            {/*  */}
            <div class="card mb-3" style={{ maxwidth: "540px" }}>
              <div className="row g-0">
                <div className="col-md-4  text-start oladoc-care-banner frame">
                  <MdVideocam />
                  <figure className="frame-figure">
                    <img
                      src="/oladoc-care-img-online-4.svg"
                      class="img-fluid rounded-start"
                      alt="..."
                    />
                  </figure>
                </div>
                <div className="col-md-8">
                  <div className="card-body p-2">
                    <h5 className="card-title">Doctors online now </h5>
                    <p className="card-text">
                      Instant Video Consultation with Top Doctors
                    </p>
                    <p className="card-text">
                      <spn className="book-now-bottom btn btn-primary">
                        Start Consulting <RiArrowDropRightLine />
                      </spn>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}

            {/*  */}
          </div>
        </div>
      </div>
    </div>
  );
}
