import React from "react";
import { GoPrimitiveDot } from "react-icons/go";
import { GrLocation } from "react-icons/gr";
import { BiTimeFive } from "react-icons/bi";
import { BsHeadphones, BsFillLockFill, BsFillStarFill } from "react-icons/bs";
import "./Chughtaicard.css";
export default function Chughtaicard({
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
}) {
  return (
    <div>
      <div className="container my-4">
        <div className="row">
          <div className=" col-lg-8 col-12 booking-content-area pe-lg-5">
            <div className="list-item-page">
              <div className="card mb-3 border-0">
                <div className="row g-0 text-start">
                  <div className="col-md-3  ">
                    <div className="avatar flex  m-2 py-2">
                      <span className="css-avatar-img rounded-circle d-block position-relative overflow-hidden">
                        <img src={imgsrc} alt="" className="img-fluid" />
                      </span>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="card-body ps-lg-0 ">
                      <h3 className="card-title">{title}</h3>
                      <p className="mb-1 text-muted ">{docspecialization}</p>
                      <p className="mb-1 text-muted ">{docdegree}</p>
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
                </div>
              </div>
              {/*  */}
            </div>

            <div className="row">
              <div className="col-12 px-0 px-lg-2">
                <div className="card border-0">
                  <div className="card-header bg-white">
                    <h4>
                      <BsFillStarFill className="me-2" /> Chughtai Lab, Lahore
                      (20% DISCOUNT)’S Reviews (6374)
                    </h4>
                  </div>
                  <div className="card-body">
                    <div className="row page-section">
                      <div className="col-5 overall-feedback-text ">
                        <span className="mx-auto d-inline-flex">96%</span>
                        <strong className="d-inline ms-3">
                          Satisfied out of 6374 patients
                        </strong>
                      </div>
                      <div className="col-7 progress-bar-holder doc-profile-page-content">
                        <div className="row mb-3 align-items-center">
                          <div className="col-md-6 col-12">Doctor Checkup</div>
                          <div className="col-md-6 col-12 ">
                            <div
                              className="progress flex-grow-1 green"
                              style={{ height: "5px" }}
                            >
                              <div
                                className="progress-bar bg-dark"
                                role="progressbar"
                                style={{ width: "97%" }}
                                aria-valuenow="97"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                              {/* <div className="ms-2"><span>97%</span></div> */}
                            </div>
                          </div>
                        </div>
                        <div className="row  mb-3 align-items-center">
                          <div className="col-md-6 col-12">
                            Clinic Environment
                          </div>
                          <div className="col-md-6 col-12 ms-0">
                            <div
                              className="progress flex-grow-1 green"
                              style={{ height: "5px" }}
                            >
                              <div
                                className="progress-bar bg-dark"
                                role="progressbar"
                                style={{ width: "97%" }}
                                aria-valuenow="97"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </div>
                        </div>
                        <div className="row  mb-3 align-items-center">
                          <div className="col-md-6 col-12">Staff Behaviour</div>
                          <div className="col-md-6 col-12 ms-0">
                            <div
                              className="progress flex-grow-1 green"
                              style={{ height: "5px" }}
                            >
                              <div
                                className="progress-bar bg-dark"
                                role="progressbar"
                                style={{ width: "97%" }}
                                aria-valuenow="97"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-around">
              <div className="col-11 px-0 px-lg-2">
                <div class="card">
                  <div class="card-body text-lg-start">
                    <blockquote class="blockquote mb-0">
                      <q>
                        {" "}
                        It was a good experience but we had to wait as the
                        receptionist didn't know about the 10 percent discount
                        from oladoc and he was completely evident about it. So
                        next time just make sure that all chughtai staff members
                        know about the policies. Thanx{" "}
                      </q>
                      <footer class="blockquote-footer my-2">
                        Verified patient:{" "}
                        <cite title="Source Title">R** ***n .</cite>1 year ago
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
            <div className="btn-holder py-2 text-start ps-lg-4 my-2 ">
              <a href="" className="btn border-dark d-block d-md-inline">
                Read all reviews
              </a>
            </div>
          </div>
          <div className="col-lg-4 row-wrraper-siderbar col-12 position-sticky  ">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">
                  Chughtai Lab Head Office (All Radiology, Pathology)
                </h5>
                <table className="card-text fees-and-address-section-table my-4">
                  <tbody>
                    <tr className="fees-and-adress-row">
                      <td className="fees-and-adress-content text-muted">
                        Address:
                      </td>
                      <td className="fees-and-adress-content text-end">
                        <a href="" className="text-decoration-none text-dark">
                          <span
                            className="fw-normal text-truncate d-block ms-2"
                            style={{ width: "200px" }}
                          >
                            <GrLocation /> 10 Jail Road, Adjacent to Ammar
                            Medical Complex, Gulberg, Lahore.
                          </span>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div class="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button p-0"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        <ul className="list-unstyled ">
                          <li className="mb-0 d-inline text-success">
                            <BiTimeFive className="me-1" />
                            Available today
                          </li>
                          <li className="d-inline mb-0 fw-normal ms-4 text-dark">
                            09:00 AM - 09:00 PM{" "}
                          </li>
                        </ul>
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse "
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <ul className="list-unstyled row">
                          <li className="col-4 mb-1">Monday</li>
                          <li className="col-8 ps-4 mb-1">
                            09:00 AM - 09:00 PM
                          </li>
                          <li className="col-4 mb-1">Tuesday </li>
                          <li className="col-8 ps-4 mb-1">
                            09:00 AM - 09:00 PM
                          </li>
                          <li className="col-4 mb-1">Wednesday </li>
                          <li className="col-8 ps-4 mb-1">
                            09:00 AM - 09:00 PM
                          </li>
                          <li className="col-4 mb-1">Thursday </li>
                          <li className="col-8 ps-4 mb-1">
                            09:00 AM - 09:00 PM
                          </li>
                          <li className="col-4 mb-1">Friday </li>
                          <li className="col-8 ps-4 mb-1">
                            09:00 AM - 09:00 PM
                          </li>
                          <li className="col-4 mb-1">Saturday </li>
                          <li className="col-8 ps-4 mb-1">
                            09:00 AM - 09:00 PM
                          </li>
                          <li className="col-4 ">Sunday</li>
                          <li className="col-8 ps-4">09:00 AM - 09:00 PM</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <a href="#" className="btn btn-warning text-white d-block">
                  Book Appointment
                </a>
              </div>
            </div>
            <ul className="list-unstyled ps-2">
              <li className="mb-2 mt-3">
                <BsHeadphones className="me-2" />
                Priorty customer support
              </li>
              <li className="mb-2">
                <BsFillLockFill className="me-2" />
                100% secure
              </li>
              <li>
                <BiTimeFive className="me-2" />
                Book Appointmet in 30 sec
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
