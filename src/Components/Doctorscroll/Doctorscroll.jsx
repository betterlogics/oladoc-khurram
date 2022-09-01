import React from "react";
import "./Doctorscroll.css";
import { AiTwotoneCrown } from "react-icons/ai";
import { HiThumbUp } from "react-icons/hi";
import { RiArrowDropRightLine } from "react-icons/ri";
export default function Doctorscroll() {
  return (
    <div>
      <div className=" doctorscroll text-start">
        <div className="platinum-doc-heading-section ">
          <h6 className="platinum-doc-heading">
            <AiTwotoneCrown className="me-2 text-warning" />
            PLATINUM DOCTORS
          </h6>
          <a
            href=""
            className="platinum-doc-viewall text-decoration-none text-dark pe-3"
          >
            View All
          </a>
        </div>
        <div className="my-2"></div>
        <div className="platinum-doctors-wrapper position-relative">
          {/* <button
            className="platinum-slider-prev platinum-slider-arrow btn-start d-none d-md-block"
            aria-label="left-arrow"
            onclick
            id="pt-btn-start"
            type="button"
          ></button>
          <button
            className="platinum-slider-prev platinum-slider-arrow btn-end d-none d-md-block"
            aria-label="right-arrow"
            onclick
            id="pt-btn-end"
            type="button"
          ></button> */}
          <div className=" row platinum-doctor platinum-fee_carousel  ">
            {/* card 1 */}
            <a href="" className="platinum-carousel-card">
              <div class="card " style={{ width: "18rem" }}>
                <div class="row g-0">
                  <div class="col-3 pt-3 ps-2">
                    <img
                      src="dr-humaira.png"
                      class="img-fluid rounded-circle"
                      alt="..."
                    />
                  </div>
                  <div class="col-9">
                    <div class="card-body px-1 pb-1">
                      <h5 class="card-title">Dr. Humaira Shamim</h5>
                      <p class="card-text mb-0">12 years experience</p>
                      <p class="card-text mb-2">
                        <small class="text-muted">
                          <HiThumbUp />
                          100% (251)
                        </small>
                      </p>
                      <a href="#" class="btn text-warning text-start ">
                        Book Appointment{" "}
                        <RiArrowDropRightLine className=" fs-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            {/*  */}

            <a href="" className="platinum-carousel-card">
              <div class="card  " style={{ width: "18rem" }}>
                <div class="row g-0">
                  <div class="col-3 pt-3 ps-2">
                    <img
                      src="dr-humaira.png"
                      class="img-fluid rounded-circle"
                      alt="..."
                    />
                  </div>
                  <div class="col-9">
                    <div class="card-body px-1 pb-1">
                      <h5 class="card-title">Dr. Humaira Shamim</h5>
                      <p class="card-text mb-0">12 years experience</p>
                      <p class="card-text mb-2">
                        <small class="text-muted">
                          <HiThumbUp />
                          100% (251)
                        </small>
                      </p>
                      <a href="#" class="btn text-warning text-start ">
                        Book Appointment{" "}
                        <RiArrowDropRightLine className=" fs-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </a>

            <a href="" className="platinum-carousel-card">
              <div class="card  " style={{ width: "18rem" }}>
                <div class="row g-0">
                  <div class="col-3 pt-3 ps-2">
                    <img
                      src="dr-humaira.png"
                      class="img-fluid rounded-circle"
                      alt="..."
                    />
                  </div>
                  <div class="col-9">
                    <div class="card-body px-1 pb-1">
                      <h5 class="card-title">Dr. Humaira Shamim</h5>
                      <p class="card-text mb-0">12 years experience</p>
                      <p class="card-text mb-2">
                        <small class="text-muted">
                          <HiThumbUp />
                          100% (251)
                        </small>
                      </p>
                      <a href="#" class="btn text-warning text-start ">
                        Book Appointment{" "}
                        <RiArrowDropRightLine className=" fs-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </a>

            <a href="" className="platinum-carousel-card">
              <div class="card  " style={{ width: "18rem" }}>
                <div class="row g-0">
                  <div class="col-3 pt-3 ps-2">
                    <img
                      src="dr-humaira.png"
                      class="img-fluid rounded-circle"
                      alt="..."
                    />
                  </div>
                  <div class="col-9">
                    <div class="card-body px-1 pb-1">
                      <h5 class="card-title">Dr. Humaira Shamim</h5>
                      <p class="card-text mb-0">12 years experience</p>
                      <p class="card-text mb-2">
                        <small class="text-muted">
                          <HiThumbUp />
                          100% (251)
                        </small>
                      </p>
                      <a href="#" class="btn text-warning text-start ">
                        Book Appointment{" "}
                        <RiArrowDropRightLine className=" fs-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </a>

            <a href="" className="platinum-carousel-card">
              <div class="card  " style={{ width: "18rem" }}>
                <div class="row g-0">
                  <div class="col-3 pt-3 ps-2">
                    <img
                      src="dr-humaira.png"
                      class="img-fluid rounded-circle"
                      alt="..."
                    />
                  </div>
                  <div class="col-9">
                    <div class="card-body px-1 pb-1">
                      <h5 class="card-title">Dr. Humaira Shamim</h5>
                      <p class="card-text mb-0">12 years experience</p>
                      <p class="card-text mb-2">
                        <small class="text-muted">
                          <HiThumbUp />
                          100% (251)
                        </small>
                      </p>
                      <a href="#" class="btn text-warning text-start ">
                        Book Appointment{" "}
                        <RiArrowDropRightLine className=" fs-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
