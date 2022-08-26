import React from "react";
import "./Hospital.css";
import { GrMap } from "react-icons/gr";
import { GoThumbsup } from "react-icons/go";
import { TbStethoscope } from "react-icons/tb";
import { MdLocationPin } from "react-icons/md";
import {RiArrowDropRightLine} from "react-icons/ri"
export default function Hospital() {
  return (
    <div className="hospital-section">
      <div className="container">
        <div className="col my-1 ps-0 text-start">
          <h5 className="fw-bold my-2 py-2">
            Showing 1,450 top Hospitals in Lahore
          </h5>
        </div>

        <div className="row ps-2">
          {" "}
          <nav>
            {" "}
            <ol className="breadcrumb bg-transparent p-0 ">
              <li className="breadcrumb-item">
                <a href="">HOME</a>
              </li>
              <li className="breadcrumb-item">
                <a href="">PAKISTAN</a>
              </li>
              <li className="breadcrumb-item">
                <a href="">LAHORE</a>
              </li>
              <li className="breadcrumb-item">
                <a href="">HOSPITAL</a>
              </li>
            </ol>
          </nav>{" "}
        </div>

        <div className="row">
          <div className="col px-0 px-lg-2">
            <div className="card mb-3 border-0 ">
              <div className="row g-0">
                <div className="col-12 col-lg-2">
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
                        <div className="col-12  ">
                          <h5 className="fw-bold m-0">
                            <a
                              href=""
                              className="bg-transparent btn-light text-decoration-none shadow-none btn-outline-none"
                            >
                              Hameed Latif Hospital
                            </a>
                          </h5>
                          <p className="m-0">
                            <small className="text-muted text-sm">
                              14 - Abu Bakar Block, New Garden Town, Lahore
                            </small>
                          </p>
                          <a
                            href=""
                            className="d-inlineblock me-2 text-decoration-none text-primary"
                          >
                            <span className="d-flex align-items-center">
                              <span className="d-flex align-items-center seeonmap-icon-holder">
                                <GrMap />
                              </span>
                              <span className="text-sm">See On Map</span>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-7 order-3 order-lg-2">
                  <div className="card-body p-2 py-lg-3">
                    <div className="mobile-offset mb-3 d-none d-lg-block">
                      <div className="col-12 pe-5 text-start">
                        <h5 className="fw-bold m-0">
                          <a
                            href=""
                            className="bg-transparent btn-light text-decoration-none shadow-none btn-outline-none"
                          >
                            Hameed Latif Hospital
                          </a>
                        </h5>
                        <p className="m-0">
                          <small className="text-muted text-sm">
                            14 - Abu Bakar Block, New Garden Town, Lahore
                          </small>
                        </p>
                        <a
                          href=""
                          className="d-inlineblock me-2 text-decoration-none text-primary"
                        >
                          <span className="d-flex align-items-center">
                            <span className="d-flex align-items-center seeonmap-icon-holder">
                              <GrMap />
                            </span>
                            <span className="text-sm">See On Map</span>
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-lg-5 col-xl-4 pr-lg-5 mb-2 mb-lg-0">
                        <a
                          href=""
                          className="btn btn-block fw-bold fs-6 btn-primary  d-md-none d-block"
                        >
                          Contact Details
                        </a>
                        <a
                          href=""
                          className="btn btn-block fw-bold fs-6 btn-primary d-none d-md-block"
                        >
                          Contact Details
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* side list  */}
                <div className="col-12 col-lg-3 order-2  py-2 py-lg-5">
                  <div className="row css-col-stats">
                    <div className="my-1 col-6 col-lg-12">
                      <div className="row">
                        <span className="col-2 text-warning">
                          <GoThumbsup />
                        </span>
                        <small className="col ps-0 text-start">
                          1 Recommendations
                        </small>
                      </div>
                    </div>
                    <div className="my-1 col-6 col-lg-12">
                      <div className="row">
                        <span className="col-2 text-warning">
                          <TbStethoscope />
                        </span>
                        <small className="col ps-0 text-start">
                          175 Panel Doctors
                        </small>
                      </div>
                    </div>
                    <div className="my-1 col-6 col-lg-12">
                      <div className="row">
                        <span className="col-2 text-warning">
                          <MdLocationPin />
                        </span>
                        <small className="col ps-0 text-start">
                          New Garden Town, Lahore
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className="row">
          <div className="col px-0 px-lg-2">
            <div className="card mb-3 border-0 ">
              <div className="row g-0">
                <div className="col-12 col-lg-2">
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
                        <div className="col-12  ">
                          <h5 className="fw-bold m-0">
                            <a
                              href=""
                              className="bg-transparent btn-light text-decoration-none shadow-none btn-outline-none"
                            >
                              Hameed Latif Hospital
                            </a>
                          </h5>
                          <p className="m-0">
                            <small className="text-muted text-sm">
                              14 - Abu Bakar Block, New Garden Town, Lahore
                            </small>
                          </p>
                          <a
                            href=""
                            className="d-inlineblock me-2 text-decoration-none text-primary"
                          >
                            <span className="d-flex align-items-center">
                              <span className="d-flex align-items-center seeonmap-icon-holder">
                                <GrMap />
                              </span>
                              <span className="text-sm">See On Map</span>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-7 order-3 order-lg-2">
                  <div className="card-body p-2 py-lg-3">
                    <div className="mobile-offset mb-3 d-none d-lg-block">
                      <div className="col-12 pe-5 text-start">
                        <h5 className="fw-bold m-0">
                          <a
                            href=""
                            className="bg-transparent btn-light text-decoration-none shadow-none btn-outline-none"
                          >
                            Hameed Latif Hospital
                          </a>
                        </h5>
                        <p className="m-0">
                          <small className="text-muted text-sm">
                            14 - Abu Bakar Block, New Garden Town, Lahore
                          </small>
                        </p>
                        <a
                          href=""
                          className="d-inlineblock me-2 text-decoration-none text-primary"
                        >
                          <span className="d-flex align-items-center">
                            <span className="d-flex align-items-center seeonmap-icon-holder">
                              <GrMap />
                            </span>
                            <span className="text-sm">See On Map</span>
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-lg-5 col-xl-4 pr-lg-5 mb-2 mb-lg-0">
                        <a
                          href=""
                          className="btn btn-block fw-bold fs-6 btn-primary  d-md-none d-block"
                        >
                          Contact Details
                        </a>
                        <a
                          href=""
                          className="btn btn-block fw-bold fs-6 btn-primary d-none d-md-block"
                        >
                          Contact Details
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* side list  */}
                <div className="col-12 col-lg-3 order-2  py-2 py-lg-5">
                  <div className="row css-col-stats">
                    <div className="my-1 col-6 col-lg-12">
                      <div className="row">
                        <span className="col-2 text-warning">
                          <GoThumbsup />
                        </span>
                        <small className="col ps-0 text-start">
                          1 Recommendations
                        </small>
                      </div>
                    </div>
                    <div className="my-1 col-6 col-lg-12">
                      <div className="row">
                        <span className="col-2 text-warning">
                          <TbStethoscope />
                        </span>
                        <small className="col ps-0 text-start">
                          175 Panel Doctors
                        </small>
                      </div>
                    </div>
                    <div className="my-1 col-6 col-lg-12">
                      <div className="row">
                        <span className="col-2 text-warning">
                          <MdLocationPin />
                        </span>
                        <small className="col ps-0 text-start">
                          New Garden Town, Lahore
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>




        <div className="row">
          <div className="col px-0 px-lg-2">
            <div className="card mb-3 border-0 ">
              <div className="row g-0">
                <div className="col-12 col-lg-2">
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
                        <div className="col-12  ">
                          <h5 className="fw-bold m-0">
                            <a
                              href=""
                              className="bg-transparent btn-light text-decoration-none shadow-none btn-outline-none"
                            >
                              Hameed Latif Hospital
                            </a>
                          </h5>
                          <p className="m-0">
                            <small className="text-muted text-sm">
                              14 - Abu Bakar Block, New Garden Town, Lahore
                            </small>
                          </p>
                          <a
                            href=""
                            className="d-inlineblock me-2 text-decoration-none text-primary"
                          >
                            <span className="d-flex align-items-center">
                              <span className="d-flex align-items-center seeonmap-icon-holder">
                                <GrMap />
                              </span>
                              <span className="text-sm">See On Map</span>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-7 order-3 order-lg-2">
                  <div className="card-body p-2 py-lg-3">
                    <div className="mobile-offset mb-3 d-none d-lg-block">
                      <div className="col-12 pe-5 text-start">
                        <h5 className="fw-bold m-0">
                          <a
                            href=""
                            className="bg-transparent btn-light text-decoration-none shadow-none btn-outline-none"
                          >
                            Hameed Latif Hospital
                          </a>
                        </h5>
                        <p className="m-0">
                          <small className="text-muted text-sm">
                            14 - Abu Bakar Block, New Garden Town, Lahore
                          </small>
                        </p>
                        <a
                          href=""
                          className="d-inlineblock me-2 text-decoration-none text-primary"
                        >
                          <span className="d-flex align-items-center">
                            <span className="d-flex align-items-center seeonmap-icon-holder">
                              <GrMap />
                            </span>
                            <span className="text-sm">See On Map</span>
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-lg-5 col-xl-4 pr-lg-5 mb-2 mb-lg-0">
                        <a
                          href=""
                          className="btn btn-block fw-bold fs-6 btn-primary  d-md-none d-block"
                        >
                          Contact Details
                        </a>
                        <a
                          href=""
                          className="btn btn-block fw-bold fs-6 btn-primary d-none d-md-block"
                        >
                          Contact Details
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* side list  */}
                <div className="col-12 col-lg-3 order-2  py-2 py-lg-5">
                  <div className="row css-col-stats">
                    <div className="my-1 col-6 col-lg-12">
                      <div className="row">
                        <span className="col-2 text-warning">
                          <GoThumbsup />
                        </span>
                        <small className="col ps-0 text-start">
                          1 Recommendations
                        </small>
                      </div>
                    </div>
                    <div className="my-1 col-6 col-lg-12">
                      <div className="row">
                        <span className="col-2 text-warning">
                          <TbStethoscope />
                        </span>
                        <small className="col ps-0 text-start">
                          175 Panel Doctors
                        </small>
                      </div>
                    </div>
                    <div className="my-1 col-6 col-lg-12">
                      <div className="row">
                        <span className="col-2 text-warning">
                          <MdLocationPin />
                        </span>
                        <small className="col ps-0 text-start">
                          New Garden Town, Lahore
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>







        <div className="row">
          <div className="col px-0 px-lg-2">
            <div className="card mb-3 border-0 ">
              <div className="row g-0">
                <div className="col-12 col-lg-2">
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
                        <div className="col-12  ">
                          <h5 className="fw-bold m-0">
                            <a
                              href=""
                              className="bg-transparent btn-light text-decoration-none shadow-none btn-outline-none"
                            >
                              Hameed Latif Hospital
                            </a>
                          </h5>
                          <p className="m-0">
                            <small className="text-muted text-sm">
                              14 - Abu Bakar Block, New Garden Town, Lahore
                            </small>
                          </p>
                          <a
                            href=""
                            className="d-inlineblock me-2 text-decoration-none text-primary"
                          >
                            <span className="d-flex align-items-center">
                              <span className="d-flex align-items-center seeonmap-icon-holder">
                                <GrMap />
                              </span>
                              <span className="text-sm">See On Map</span>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-7 order-3 order-lg-2">
                  <div className="card-body p-2 py-lg-3">
                    <div className="mobile-offset mb-3 d-none d-lg-block">
                      <div className="col-12 pe-5 text-start">
                        <h5 className="fw-bold m-0">
                          <a
                            href=""
                            className="bg-transparent btn-light text-decoration-none shadow-none btn-outline-none"
                          >
                            Hameed Latif Hospital
                          </a>
                        </h5>
                        <p className="m-0">
                          <small className="text-muted text-sm">
                            14 - Abu Bakar Block, New Garden Town, Lahore
                          </small>
                        </p>
                        <a
                          href=""
                          className="d-inlineblock me-2 text-decoration-none text-primary"
                        >
                          <span className="d-flex align-items-center">
                            <span className="d-flex align-items-center seeonmap-icon-holder">
                              <GrMap />
                            </span>
                            <span className="text-sm">See On Map</span>
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-lg-5 col-xl-4 pr-lg-5 mb-2 mb-lg-0">
                        <a
                          href=""
                          className="btn btn-block fw-bold fs-6 btn-primary  d-md-none d-block"
                        >
                          Contact Details
                        </a>
                        <a
                          href=""
                          className="btn btn-block fw-bold fs-6 btn-primary d-none d-md-block"
                        >
                          Contact Details
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* side list  */}
                <div className="col-12 col-lg-3 order-2  py-2 py-lg-5">
                  <div className="row css-col-stats">
                    <div className="my-1 col-6 col-lg-12">
                      <div className="row">
                        <span className="col-2 text-warning">
                          <GoThumbsup />
                        </span>
                        <small className="col ps-0 text-start">
                          1 Recommendations
                        </small>
                      </div>
                    </div>
                    <div className="my-1 col-6 col-lg-12">
                      <div className="row">
                        <span className="col-2 text-warning">
                          <TbStethoscope />
                        </span>
                        <small className="col ps-0 text-start">
                          175 Panel Doctors
                        </small>
                      </div>
                    </div>
                    <div className="my-1 col-6 col-lg-12">
                      <div className="row">
                        <span className="col-2 text-warning">
                          <MdLocationPin />
                        </span>
                        <small className="col ps-0 text-start">
                          New Garden Town, Lahore
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>






        <div className="row">
          <div className="col px-0 px-lg-2">
            <div className="card mb-3 border-0 ">
              <div className="row g-0">
                <div className="col-12 col-lg-2">
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
                        <div className="col-12  ">
                          <h5 className="fw-bold m-0">
                            <a
                              href=""
                              className="bg-transparent btn-light text-decoration-none shadow-none btn-outline-none"
                            >
                              Hameed Latif Hospital
                            </a>
                          </h5>
                          <p className="m-0">
                            <small className="text-muted text-sm">
                              14 - Abu Bakar Block, New Garden Town, Lahore
                            </small>
                          </p>
                          <a
                            href=""
                            className="d-inlineblock me-2 text-decoration-none text-primary"
                          >
                            <span className="d-flex align-items-center">
                              <span className="d-flex align-items-center seeonmap-icon-holder">
                                <GrMap />
                              </span>
                              <span className="text-sm">See On Map</span>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-7 order-3 order-lg-2">
                  <div className="card-body p-2 py-lg-3">
                    <div className="mobile-offset mb-3 d-none d-lg-block">
                      <div className="col-12 pe-5 text-start">
                        <h5 className="fw-bold m-0">
                          <a
                            href=""
                            className="bg-transparent btn-light text-decoration-none shadow-none btn-outline-none"
                          >
                            Hameed Latif Hospital
                          </a>
                        </h5>
                        <p className="m-0">
                          <small className="text-muted text-sm">
                            14 - Abu Bakar Block, New Garden Town, Lahore
                          </small>
                        </p>
                        <a
                          href=""
                          className="d-inlineblock me-2 text-decoration-none text-primary"
                        >
                          <span className="d-flex align-items-center">
                            <span className="d-flex align-items-center seeonmap-icon-holder">
                              <GrMap />
                            </span>
                            <span className="text-sm">See On Map</span>
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-lg-5 col-xl-4 pr-lg-5 mb-2 mb-lg-0">
                        <a
                          href=""
                          className="btn btn-block fw-bold fs-6 btn-primary  d-md-none d-block"
                        >
                          Contact Details
                        </a>
                        <a
                          href=""
                          className="btn btn-block fw-bold fs-6 btn-primary d-none d-md-block"
                        >
                          Contact Details
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* side list  */}
                <div className="col-12 col-lg-3 order-2  py-2 py-lg-5">
                  <div className="row css-col-stats">
                    <div className="my-1 col-6 col-lg-12">
                      <div className="row">
                        <span className="col-2 text-warning">
                          <GoThumbsup />
                        </span>
                        <small className="col ps-0 text-start">
                          1 Recommendations
                        </small>
                      </div>
                    </div>
                    <div className="my-1 col-6 col-lg-12">
                      <div className="row">
                        <span className="col-2 text-warning">
                          <TbStethoscope />
                        </span>
                        <small className="col ps-0 text-start">
                          175 Panel Doctors
                        </small>
                      </div>
                    </div>
                    <div className="my-1 col-6 col-lg-12">
                      <div className="row">
                        <span className="col-2 text-warning">
                          <MdLocationPin />
                        </span>
                        <small className="col ps-0 text-start">
                          New Garden Town, Lahore
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



        <nav className="pb-3" area-label="card list pagination">
          <ul className="list-inline text-end">
            <li className="list-inline-item me-0 ms-1"><a href="" className="btn btn-primary border">1</a></li>
            <li className="list-inline-item me-0 ms-1"><a href="" className="btn btn-light border">2</a></li>
            <li className="list-inline-item me-0 ms-1">
            <a href="" className="btn btn-light border">3</a>
            </li>
            <li className="list-inline-item me-0 ms-1">
            <a href="" className="btn btn-light border"><RiArrowDropRightLine></RiArrowDropRightLine></a>
            </li>
          </ul>
        </nav>




      </div>
    </div>
  );
}
