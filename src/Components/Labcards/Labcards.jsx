import React from "react";
import "./Labcards.css";
import { GoPrimitiveDot } from "react-icons/go";
import {AiOutlineCalendar} from "react-icons/ai"
export default function Labcards({
  title,
  docspecialization,
  docdegree,
  imgsrc,
  wait,
  time,
  years,
  experience,
  patient,
  satisfied,
  price,
  title1,
  discription
}) {
  return (
    <div>
      <div className="container my-4">
        <div className="row">
          <div className="col-px-2">
            <div className="list-item-page">
              <div className="card mb-3">
                <div className="row g-0 text-start">
                  <div className="col-md-2  ">
                    <div className="avatar flex  m-2 py-2">
                      <span className="css-avatar-img rounded-circle d-block position-relative overflow-hidden">
                        <img src={imgsrc} alt="" className="img-fluid" />
                      </span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card-body ps-lg-0 ">
                      <h5 className="card-title">{title}</h5>
                      <p className="mb-1 text-muted text-sm">
                        {docspecialization}
                      </p>
                      <p className="mb-1 text-muted text-sm">{docdegree}</p>
                      <div className="doc-discribtion-columns d-flex  text-start pt-4">
                        <div className="item">
                          <span className="fw-normal ">{wait}</span>
                          <span className="text-muted ">{time}</span>
                        </div>
                        <div className="item">
                          {" "}
                          <span className="fw-normal">{years}</span>
                          <span className="text-muted">{experience}</span>
                        </div>
                        <div className="item">
                          {" "}
                          <span className="fw-normal">{patient}</span>
                          <span className="text-muted">{satisfied}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 mb-lg-2 pb-lg-2 btn-holder order-3 order-lg-2 listing-card-button py-2">
                    <div className="row booking-btn-holder pt-lg-5 me-md-3 justify-content-around">
                      <div className="col-11 d-block mb-2 ">
                        <a
                          href=""
                          className="btn d-block btn-outline-primary fw-normal    "
                        >
                          {" "}
                          View Profile{" "}
                        </a>
                      </div>

                      <div className="col-11 mb-2">
                        <a
                          href=""
                          className="btn d-block btn-warning text-white fw-normal  "
                        >
                          {" "}
                          <span>Book Appointment</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-7 px-3 order-lg-3 listing-review-section">
                    <q
                      className="text-truncate-dot review-text mx-2"
                      style={{ maxwidth: "150px" }}
                    >
                      {discription}
                    </q>
                  </div>
                </div>
         
                  <div className="col-12 ps-0 px-md- py-lg-2 order-lg-4 mx-2">
                    <div className="dd-hospital-carddetails overflow-scroll d-flex flex-nowrap py-3">
                      <div>
                        <a
                          href=""
                          className="frame d-block text-decoration-none"
                        >
                          <div className="p-2 listing-locations">
                            <div className="d-flex fw-normal">
                              <span className="text-truncate d-block mb-1 fw-normal">
                                {title1}
                              </span>
                           
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
                              <span className="ms-auto flex-shrink-0 ps-2">
                                Fee:
                                <span className="text-muted">N/A</span>
                              </span>
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
                                {title1}
                              </span>
                           
                            </div>
                            <div className="d-flex">
                              <div className="px-2 text-truncate fw-normal">
                                <div className="row  text-decoration-none d-inline">
                                  <span className="me-2 icon-available">
                                    <AiOutlineCalendar />
                                  </span>
                                  <span className="col ps-0 text-truncate fw-normal">
                                  M, Tu, W, Th, F, Sa, Su
                                  </span>
                                </div>
                              </div>
                              <div className="d-inline flex-shrink-0 ms-auto fw-normal">
                                 <span className="ms-auto flex-shrink-0 ps-2">
                                Fee:
                                <span className="text-muted">N/A</span>
                              </span>
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
                             {title}
                              </span>
                             
                            </div>
                            <div className="d-flex">
                              <div className="px-2 text-truncate fw-normal">
                                <div className="row  text-decoration-none d-inline">
                                  <span className="me-2 icon-available">
                                  <AiOutlineCalendar />
                                  </span>
                                  <span className="col ps-0 text-truncate fw-normal">
                                  M, Tu, W, Th, F, Sa, Su
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
              {/*  */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
