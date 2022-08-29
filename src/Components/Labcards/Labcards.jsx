import React from "react";
import "./Labcards.css";
import { GoPrimitiveDot } from "react-icons/go";
export default function Labcards() {
  return (
    <div>
      <div className="container my-4">
        <div className="row">
          <div className="col-px-2">
            <div className="list-item-page">
              <div class="card mb-3 doc-listing-card">
                <div class="row g-0">
                  <div className="col-12 col-lg-2 text-start listing-card-image">
                    <div className="row">
                      <div className="col-3 col-lg-12 px-3 px-lg-4 pb-2 py-4 ">
                        <div className="avatar  ">
                          <span className="css-avatar-img rounded-circle d-block position-relative overflow-hidden">
                            <a href="">
                              {" "}
                              <img
                                src="/hameed-latif-hospital.webp"
                                className="img-fluid "
                                alt="..."
                              />
                            </a>
                          </span>
                        </div>
                      </div>
                      <div className="col-9 mobile-offset d-lg-none overflow-hidden">
                        <div className="row text-start">
                          <div className="col-12 ">
                            <h5 className="fw-bold m-0">
                              <a
                                href=""
                                className="bg-transparent btn-light text-decoration-none shadow-none btn-outline-none"
                              >
                                Chughtai Lab, Lahore (20% DISCOUNT)
                              </a>
                            </h5>
                            <small className="text-muted text-sm">
                              Radiology Lab, Pathology Lab
                            </small>
                            <div className="doc-discription-columns d-md-none ">
                              <div className="item">
                                <span className="fw-normal me-2">
                                  Under 15 Min
                                </span>
                                <span className="text-muted">Wait Time</span>
                              </div>
                              <div className="item">
                                {" "}
                                <span className="fw-normal me-2">15 Year</span>
                                <span className="text-muted">Experience</span>
                              </div>
                              <div className="item">
                                {" "}
                                <span className="fw-normal me-2">80%(326)</span>
                                <span className="text-muted">
                                  Satisfied Patient
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-10 col-lg-7 pt-md-0 px-0 ps-md-2 pe-md-4 mb-md-2 pb-md-2 mx-2 mx-md-0 listing-card-info">
                    <div class="card-body">
                      <div className="d-none d-md-block text-area">
                        <h5 class="card-title">
                          <a href="" className="text-decoration-none text-dark">
                            Chughtai Lab, Lahore (20% DISCOUNT)
                          </a>
                        </h5>
                        <small>Radiology Lab, Pathology Lab</small>
                        <div className="doc-discribtion-columns d-flex flex-wrap text-start pt-4">
                          <div className="item">
                            <span className="fw-normal ">Under 15 Min</span>
                            <span className="text-muted ">Wait Time</span>
                          </div>
                          <div className="item">
                            {" "}
                            <span className="fw-normal">15 Year</span>
                            <span className="text-muted">Experience</span>
                          </div>
                          <div className="item">
                            {" "}
                            <span className="fw-normal">80%(326)</span>
                            <span className="text-muted">
                              Satisfied Patient
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 mb-lg-2 pb-lg-2 btn-holder order-3 order-lg-2 listing-card-button py-2">
                    <div className="row booking-btn-holder pt-lg-5 me-md-3 justify-content-around">
                      <div className="col-6 col-lg-12 mb-2 ">
                        <a
                          href=""
                          className="btn d-lg-block btn-outline-primary fw-normal  listing-view-profile-btn text-center "
                        >
                          {" "}
                          View Profile{" "}
                        </a>
                      </div>
                      {/* booking button  */}
                      <div className="col-6 col-lg-12 mb-2">
                        <a
                          href=""
                          className="btn d-lg-block btn-warning text-white fw-normal listing-view-profile-btn "
                        >
                          {" "}
                          Book Appointment
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-7 px-3 order-lg-3 listing-review-section">
                    <q
                      className="text-truncate-dot review-text mx-2"
                      style={{ maxwidth: "150px" }}
                    >
                      It was a good experience but we had to wait as the
                      receptionist didn't know about the 10 percent discount
                      from oladoc and he was completely evident about it. So
                      next time just make sure that all chughtai staff members
                      know about the policies. Thanx
                    </q>
                  </div>
                  <div className="col-12 ps-0 px-md-3 py-lg-2 order-lg-4">
                    <div className="dd-hospital-carddetails overflow-scroll d-flex flex-nowrap py-3">
                      <div>
                        <a
                          href=""
                          className="frame d-block text-decoration-none"
                        >
                          <div className="p-2 listing-locations">
                            <div className="d-flex fw-normal">
                              <span className="text-truncate d-block mb-1 fw-normal">
                                Chughtai Lab Head Office (All Radiology,
                                Pathology) (Jail Road)
                              </span>
                              {/* <span className="ms-auto flex-shrink-0 ps-2">
                                Fee:
                                <span className="text-muted">N/A</span>
                              </span> */}
                            </div>
                            <div className="d-flex">
                              <div className="px-2 text-truncate fw-normal">
                                <div className="row text-available text-decoration-none d-inline">
                                  <span className="me-2 icon-available">
                                    <GoPrimitiveDot />
                                  </span>
                                  <span className="col ps-0 text-truncate fw-normal">
                                    Available Today
                                  </span>
                                </div>
                              </div>
                              <div className="d-inline flex-shrink-0 ms-auto fw-normal">
                                {" "}
                                <span>
                                  Fee:
                                  <span className="text-muted">N/A</span>
                                </span>{" "}
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>

                      <div>
                        <a
                          href=""
                          className="frame d-block text-decoration-none"
                        >
                          <div className="p-2 listing-locations">
                            <div className="d-flex fw-normal">
                              <span className="text-truncate d-block mb-1 fw-normal">
                                Chughtai Lab Head Office (All Radiology,
                                Pathology) (Jail Road)
                              </span>
                              {/* <span className="ms-auto flex-shrink-0 ps-2">
                                Fee:
                                <span className="text-muted">N/A</span>
                              </span> */}
                            </div>
                            <div className="d-flex">
                              <div className="px-2 text-truncate fw-normal">
                                <div className="row text-available text-decoration-none d-inline">
                                  <span className="me-2 icon-available">
                                    <GoPrimitiveDot />
                                  </span>
                                  <span className="col ps-0 text-truncate fw-normal">
                                    Available Today
                                  </span>
                                </div>
                              </div>
                              <div className="d-inline flex-shrink-0 ms-auto fw-normal">
                                {" "}
                                <span>
                                  Fee:
                                  <span className="text-muted">N/A</span>
                                </span>{" "}
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>

                      <div>
                        <a
                          href=""
                          className="frame d-block text-decoration-none"
                        >
                          <div className="p-2 listing-locations">
                            <div className="d-flex fw-normal">
                              <span className="text-truncate d-block mb-1 fw-normal">
                                Chughtai Lab Head Office (All Radiology,
                                Pathology) (Jail Road)
                              </span>
                              {/* <span className="ms-auto flex-shrink-0 ps-2">
                                Fee:
                                <span className="text-muted">N/A</span>
                              </span> */}
                            </div>
                            <div className="d-flex">
                              <div className="px-2 text-truncate fw-normal">
                                <div className="row text-available text-decoration-none d-inline">
                                  <span className="me-2 icon-available">
                                    <GoPrimitiveDot />
                                  </span>
                                  <span className="col ps-0 text-truncate fw-normal">
                                    Available Today
                                  </span>
                                </div>
                              </div>
                              <div className="d-inline flex-shrink-0 ms-auto fw-normal">
                                {" "}
                                <span>
                                  Fee:
                                  <span className="text-muted">N/A</span>
                                </span>{" "}
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>

                      <div>
                        <a
                          href=""
                          className="frame d-block text-decoration-none"
                        >
                          <div className="p-2 listing-locations">
                            <div className="d-flex fw-normal">
                              <span className="text-truncate d-block mb-1 fw-normal">
                                Chughtai Lab Head Office (All Radiology,
                                Pathology) (Jail Road)
                              </span>
                              {/* <span className="ms-auto flex-shrink-0 ps-2">
                                Fee:
                                <span className="text-muted">N/A</span>
                              </span> */}
                            </div>
                            <div className="d-flex">
                              <div className="px-2 text-truncate fw-normal">
                                <div className="row text-available text-decoration-none d-inline">
                                  <span className="me-2 icon-available">
                                    <GoPrimitiveDot />
                                  </span>
                                  <span className="col ps-0 text-truncate fw-normal">
                                    Available Today
                                  </span>
                                </div>
                              </div>
                              <div className="d-inline flex-shrink-0 ms-auto fw-normal">
                                {" "}
                                <span>
                                  Fee:
                                  <span className="text-muted">N/A</span>
                                </span>{" "}
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
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
