import React from "react";
import { GoPrimitiveDot } from "react-icons/go";
import {GrLocation} from "react-icons/gr"
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
          <div className="col-px-2 col-lg-8 col-12">
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
          </div>
          <div className="col-lg-4 row-wrraper-siderbar col-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">
                  Chughtai Lab Head Office (All Radiology, Pathology)
                </h5>
                <table className="card-text fees-and-address-section-table">
                  <tbody>
                    <tr className="fees-and-adress-row">
                      <td className="fees-and-adress-content text-muted">
                        Address:
                      </td>
                      <td className="fees-and-adress-content text-end">
                        <a href="" className="text-decoration-none text-dark">
                            <span className="fw-normal text-truncate d-block ms-2" style={{width:"200px"}}>
                                <GrLocation /> 10 Jail Road, Adjacent to Ammar Medical Complex, Gulberg, Lahore.

                            </span>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
                
                <a href="#" className="btn btn-primary d-block">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
