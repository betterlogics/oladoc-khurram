import React from "react";

export default function Testcard({
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
}) {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="card mb-3">
              <div className="row g-0 text-start">
                <div className="col-md-2  ">
                  <div className="avatar flex  m-2 py-2">
                    <span className="css-avatar-img rounded-circle d-block position-relative overflow-hidden">
                      <img src="dr-sana.jpg" class="img-fluid  " alt="..." />
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
                        <span className="ms-4">
                          {/* <AiOutlineArrowRight /> */}
                        </span>
                      </a>
                    </div>
                    {/* booking button  */}
                    <div className="col-11 mb-2">
                      <a
                        href=""
                        className="btn d-block btn-warning text-white fw-normal  "
                      >
                        {" "}
                        <span>Book Appointment</span>
                        <span className="ms-1">{price}</span>
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
  );
}
