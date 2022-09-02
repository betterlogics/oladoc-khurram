import React from "react";

export default function Experiencedoc() {
  return (
    <div>
      <div className="container">
        <div className="title-holder text-md-start showing-exp-doc-hospital fs-4 py-4 ps-3">
          Most Experienced Doctors in Doctors Hospital
        </div>
        <div className="row">
          <div className="col-12 hospital-card-section">
            <div class="card mb-3 doc-listing-card">
              <div class="row g-0">
                <div className="col-12 col-lg-2 text-start listing-card-image">
                  <div className="row justify-content-between">
                    <div className="col-2 col-lg-12 px-3 px-lg-4 pb-2 py-4 ">
                      <div className="avatar d-flex ">
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
                      <div className="row ">
                        <div className="col-2"></div>
                        <div className="col-10  ">
                          <h5 className="fw-bold m-0">
                            <a
                              href=""
                              className="bg-transparent btn-light text-decoration-none shadow-none btn-outline-none"
                            >
                              Dr. Iftikhar Ali Shah
                            </a>
                          </h5>
                          <small className="text-muted text-sm">
                            Hand Surgeon, Cosmetic Surgeon, Reconstructive
                            Surgeon, Plastic Surgeon MBBS, FRCS (Edin),
                            FRCS(Glasgow), Diplomate in Plastic Surgery
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
                    <div className="d-none d-md-block text-area text-start">
                      <h5 class="card-title">
                        <a href="" className="text-decoration-none text-dark">
                          Dr. Iftikhar Ali Shah
                        </a>
                      </h5>
                      <small>
                        Hand Surgeon, Cosmetic Surgeon, Reconstructive Surgeon,
                        Plastic Surgeon MBBS, FRCS (Edin), FRCS(Glasgow),
                        Diplomate in Plastic Surgery
                      </small>
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
                          <span className="text-muted">Satisfied Patient</span>
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
                {/* <div className="col-md-7 px-3 order-lg-3 listing-review-section">
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
                  </div> */}
              </div>
            </div>

            {/*  */}
          </div>
        </div>
      </div>
    </div>
  );
}
