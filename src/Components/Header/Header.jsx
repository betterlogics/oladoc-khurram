import React from "react";
import "./Header.css";
import { BsArrowRightShort } from "react-icons/bs";
import { BsTelephoneFill } from "react-icons/bs";
import CMCLOG from "../Assets/CMCLOG.jpg";
import { Routes, Route, Link } from "react-router-dom";
export default function Header() {
  return (
    <div>
      {/*  */}
      <nav className="navbar navbar-expand-lg navbar-light fixed-top desktop shadow d-none d-lg-block">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <Link to="/">
              <img src="/logo.png" alt="" />
            </Link>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown show">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Doctors
                </a>
                <div
                  className="dropdown-menu  pt-lg-4"
                  style={{ width: "1100px" }}
                  aria-labelledby="navbarDropdown"
                >
                  <div className="container ">
                    <div className="row ">
                      <div className="col-12 pb-4 specialties">
                        <h4>Chose a Doctor</h4>

                        <Link to="/Doctor_main" className="nav-link">
                          View all specialties <BsArrowRightShort />
                        </Link>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-3">
                        <h6>Find Doctor by Speciality</h6>
                        <ul>
                          <li>
                            <Link
                              to="/Dermatologist_main"
                              className="nav-link show dropdown-item"
                            >
                              Dermatologist
                              <BsArrowRightShort />
                            </Link>
                          </li>
                          <li>
                          <Link
                              to="/Dermatologist_main"
                              className="nav-link show dropdown-item"
                            >
                              Gynecologist <BsArrowRightShort />
                            </Link>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Psychiatrist <BsArrowRightShort />
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Urologist <BsArrowRightShort />
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Sexologist <BsArrowRightShort />
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              ENT Specialist <BsArrowRightShort />
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Eye Specialist <BsArrowRightShort />
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Neurologist <BsArrowRightShort />
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Orthopedic Surgeon <BsArrowRightShort />
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Child Specialist <BsArrowRightShort />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-3">
                        <h6>Find Doctor by Treatment</h6>
                        <ul>
                          <li>
                            <a className="dropdown-item" href="#">
                              MRI <BsArrowRightShort />
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              CT Scan <BsArrowRightShort />
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Laser Hair Removal <BsArrowRightShort />
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Test Tube Baby <BsArrowRightShort />
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Penile Implant <BsArrowRightShort />
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Normal Delivery <BsArrowRightShort />
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              IVF <BsArrowRightShort />
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Laser for Skin <BsArrowRightShort />
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Vaccination <BsArrowRightShort />
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              All Treatments <BsArrowRightShort />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-3">
                        <h6>Find Doctor by Condition</h6>
                        <ul>
                          <li>
                            <a className="dropdown-item" href="#">
                              Piles <BsArrowRightShort />
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Male Sexual Dysfunction <BsArrowRightShort />
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Male Infertility <BsArrowRightShort />
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Hernia <BsArrowRightShort />
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Erectile Dysfunction <BsArrowRightShort />
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Acne Scars <BsArrowRightShort />
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Skin Diseases <BsArrowRightShort />
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Thyroid Diseases <BsArrowRightShort />
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Testicular Torsion <BsArrowRightShort />
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              All Conditions <BsArrowRightShort />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-3">
                        <h6 className="text-center">Find Doctor Online</h6>
                        <ul>
                          <li>
                            <a className="dropdown-item" href="#">
                              Online Dermatologist
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Online Gynecologist
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Online Psychiatrist
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Online Urologist
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Online Sexologist
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Online ENT Specialist
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Online Eye Specialist
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Online Neurologist
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Online Orthopedic Surgeon
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Online Child Specialist
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/*  */}
              <li className="nav-item dropdown show">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Hospitals
                </a>
                <div
                  className="dropdown-menu  pt-lg-4"
                  style={{ width: "1100px" }}
                  aria-labelledby="navbarDropdown"
                >
                  <div className="container ">
                    <div className="row ">
                      <div className="col-12 pb-4 specialties">
                        <h4>Chose a Hospital</h4>
                        
                          <Link to="/Hospital_main" className="nav-link">View all Hospital   <BsArrowRightShort /></Link>
                       
                       
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-3">
                        <h6 className="text-center">Lahore</h6>
                        <ul>
                          <li>
                            <a className="dropdown-item" href="#">
                              Doctors Hospital
                              <BsArrowRightShort />
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Hameed Latif Hospital
                              <BsArrowRightShort />
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Omar Hospital & Cardiac Center{" "}
                              <BsArrowRightShort />
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Mid City Hospital <BsArrowRightShort />
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Surgimed Hospital <BsArrowRightShort />
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              National Hospiatal <BsArrowRightShort />
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Fatima Memorial Hospital <BsArrowRightShort />
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Ittefaq Hospital <BsArrowRightShort />
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Iqra Medical Complex <BsArrowRightShort />
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              All Hospitals in Lahore <BsArrowRightShort />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-3">
                        <h6 className="text-center">Karachi</h6>
                        <ul>
                          <li>
                            <a className="dropdown-item" href="#">
                              Hashminas Hospital
                              <BsArrowRightShort />
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              South City Hospital <BsArrowRightShort />
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Altamash General Hospital <BsArrowRightShort />
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Medicare & General Hospital <BsArrowRightShort />
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Dr. Ziauddin Hospital <BsArrowRightShort />
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              National Medical Center <BsArrowRightShort />
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Darul Sehat Hospital <BsArrowRightShort />
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Patel Hospital <BsArrowRightShort />
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Saifee Hospital <BsArrowRightShort />
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              All Hospitals in Karachi <BsArrowRightShort />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-3">
                        <h6 className="text-center">Islamabad</h6>
                        <ul>
                          <li>
                            <a className="dropdown-item" href="#">
                              Advance Medical Center <BsArrowRightShort />
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Islamabad International Hospital{" "}
                              <BsArrowRightShort />
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Shifa International Hospital <BsArrowRightShort />
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Maroof International Hospital{" "}
                              <BsArrowRightShort />
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Ali Medical Center <BsArrowRightShort />
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Kulsum International Hospital{" "}
                              <BsArrowRightShort />
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              MaxHealth Hospital <BsArrowRightShort />
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Quaid-e-Azam Hospital <BsArrowRightShort />
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Chinar International Hospital{" "}
                              <BsArrowRightShort />
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              All Hospitals in Islamabad <BsArrowRightShort />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-3">
                        <h6 className="text-center">Rawalpindi</h6>
                        <ul>
                          <li>
                            <a className="dropdown-item" href="#">
                              Relince Hospital
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Khatoon Hospital
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Shaafi International Hospital
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Fauji Foundation Hospital
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Shamshad Aslam Hospital
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Hearts International Hospital
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Maryam Memorial Hospital
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Hanif Hospital (Rawalpindi)
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              All Hospitals in Rawalpindi
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/* Islamabad */}
              <li className="nav-item dropdown show">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="dropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Labs & Diagnostics
                </a>
                <div
                  className="dropdown-menu over  pt-lg-4"
                  style={{ width: "1000px", height: "500px" }}
                  aria-labelledby="navbarDropdown"
                >
                  <div className="container ">
                    <div className="row ">
                      <div className="col-12 pb-4 specialties">
                        <h4>Chose a Lab</h4>
                              <Link to="/Labs_main" className="nav-link">
                            View all Labs <BsArrowRightShort />
                          </Link>
                     
                      </div>
                    </div>
                    <div className="row">
                      <h5 className="ps-5">Lahore</h5>
                      <div className="col-3">
                        <a
                          href=""
                          className="dropdown-item dropdown-speciality border"
                        >
                          <img
                            src={CMCLOG}
                            alt=""
                            className="rounded-circle w-25"
                          />
                          <span className="speciality-title ms-2">
                            Chughtai Lab
                          </span>
                        </a>
                      </div>
                      <div className="col-3">
                        <a
                          href=""
                          className="dropdown-item dropdown-speciality border"
                        >
                          <img
                            src="/Nasarlab.png"
                            alt=""
                            className="rounded-circle w-25"
                          />
                          <span className="speciality-title ms-2">
                            Al-Nasar Lab
                          </span>
                        </a>
                      </div>
                      <div className="col-3">
                        <a
                          href=""
                          className="dropdown-item dropdown-speciality border"
                        >
                          <img
                            src="DDLC.jpg"
                            alt=""
                            className="rounded-circle w-25"
                          />
                          <span className="speciality-title ms-2">
                            Doctor Diagnostic...
                          </span>
                        </a>
                      </div>
                      <div className="col-3">
                        <a
                          href=""
                          className="dropdown-item dropdown-speciality border"
                        >
                          <img
                            src="/alnoor.jpg"
                            alt=""
                            className="rounded-circle w-25"
                          />
                          <span className="speciality-title ms-2">
                            Alnoor Diagnostic
                          </span>
                        </a>
                      </div>
                      <div className="col-3">
                        <a
                          href=""
                          className="dropdown-item dropdown-speciality border"
                        >
                          <img
                            src="/dr.jpg"
                            alt=""
                            className="rounded-circle w-25"
                          />
                          <span className="speciality-title ms-2">
                            Dr.Essa Laboratory
                          </span>
                        </a>
                      </div>
                      <div className="col-3">
                        <a
                          href=""
                          className="dropdown-item dropdown-speciality border"
                        >
                          <img
                            src="/idc.jpg"
                            alt=""
                            className="rounded-circle w-25"
                          />
                          <span className="speciality-title ms-2">
                            Islamabad Diagnostic
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="row">
                      <h5 className="ps-5">Islamabad</h5>
                      <div className="col-3">
                        <a
                          href=""
                          className="dropdown-item dropdown-speciality border"
                        >
                          <img
                            src="/shifa.jpg"
                            alt=""
                            className="rounded-circle w-25"
                          />
                          <span className="speciality-title ms-2">
                            Shifa International
                          </span>
                        </a>
                      </div>
                      <div className="col-3">
                        <a
                          href=""
                          className="dropdown-item dropdown-speciality border"
                        >
                          <img
                            src="/cip.jpg"
                            alt=""
                            className="rounded-circle w-25"
                          />
                          <span className="speciality-title ms-2">
                            Capital International
                          </span>
                        </a>
                      </div>
                      <div className="col-3">
                        <a
                          href=""
                          className="dropdown-item dropdown-speciality border"
                        >
                          <img
                            src="maroof.jpg"
                            alt=""
                            className="rounded-circle w-25"
                          />
                          <span className="speciality-title ms-2">
                            Maroof International
                          </span>
                        </a>
                      </div>
                      <div className="col-3">
                        <a
                          href=""
                          className="dropdown-item dropdown-speciality border"
                        >
                          <img
                            src="/adc.jpg"
                            alt=""
                            className="rounded-circle w-25"
                          />
                          <span className="speciality-title ms-2">
                            Advance Diagnostic
                          </span>
                        </a>
                      </div>
                      <div className="col-3">
                        <a
                          href=""
                          className="dropdown-item dropdown-speciality border"
                        >
                          <img
                            src="/aga.png"
                            alt=""
                            className="rounded-circle w-25"
                          />
                          <span className="speciality-title ms-2">
                            Aga Khan University
                          </span>
                        </a>
                      </div>
                      <div className="col-3">
                        <a
                          href=""
                          className="dropdown-item dropdown-speciality border"
                        >
                          <img
                            src="/idc.jpg"
                            alt=""
                            className="rounded-circle w-25"
                          />
                          <span className="speciality-title ms-2">
                            Islamabad Diagnostic
                          </span>
                        </a>
                      </div>
                      <div className="col-3">
                        <a
                          href=""
                          className="dropdown-item dropdown-speciality border"
                        >
                          <img
                            src="/medical.png"
                            alt=""
                            className="rounded-circle w-25"
                          />
                          <span className="speciality-title ms-2">
                            Smart Medical
                          </span>
                        </a>
                      </div>
                    </div>
                    {/* Karachi */}
                    <div className="row">
                      <h5 className="ps-5">Karachi</h5>
                      <div className="col-3">
                        <a
                          href=""
                          className="dropdown-item dropdown-speciality border"
                        >
                          <img
                            src={CMCLOG}
                            alt=""
                            className="rounded-circle w-25"
                          />
                          <span className="speciality-title ms-2">
                            Chughtai Lab
                          </span>
                        </a>
                      </div>
                      <div className="col-3">
                        <a
                          href=""
                          className="dropdown-item dropdown-speciality border"
                        >
                          <img
                            src="/essa.jpg"
                            alt=""
                            className="rounded-circle w-25"
                          />
                          <span className="speciality-title ms-2">
                            Dr.Essa Lab
                          </span>
                        </a>
                      </div>
                      <div className="col-3">
                        <a
                          href=""
                          className="dropdown-item dropdown-speciality border"
                        >
                          <img
                            src="zaid.jpg"
                            alt=""
                            className="rounded-circle w-25"
                          />
                          <span className="speciality-title ms-2">
                            Dr. Zaiuddin
                          </span>
                        </a>
                      </div>
                      <div className="col-3">
                        <a
                          href=""
                          className="dropdown-item dropdown-speciality border"
                        >
                          <img
                            src="/omi.jpg"
                            alt=""
                            className="rounded-circle w-25"
                          />
                          <span className="speciality-title ms-2">
                            OMI Hospital Lab
                          </span>
                        </a>
                      </div>
                      <div className="col-3">
                        <a
                          href=""
                          className="dropdown-item dropdown-speciality border"
                        >
                          <img
                            src="/mph.jpg"
                            alt=""
                            className="rounded-circle w-25"
                          />
                          <span className="speciality-title ms-2">
                            Metropolis Health
                          </span>
                        </a>
                      </div>
                      <div className="col-3">
                        <a
                          href=""
                          className="dropdown-item dropdown-speciality border"
                        >
                          <img
                            src="/aga.png"
                            alt=""
                            className="rounded-circle w-25"
                          />
                          <span className="speciality-title ms-2">
                            Aga Khan University
                          </span>
                        </a>
                      </div>
                    </div>
                    {/*  */}
                  </div>
                </div>
              </li>

              {/*  */}
              {/* <li class="nav-item show">
                <a
                  class="btn btn-secondary dropdown-toggle"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown link
                </a>
                <div className="dropdown-menu">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-12">
                        <h4>Choose a Lab</h4>
                        <h4>
                          <a
                            href=""
                            className="dropdown-left-section view-all-btn"
                          >
                            View all Labs
                            <BsArrowRightShort />{" "}
                          </a>
                          <div className="row">
                            <div className="col-md-12">
                              <p className="hospital-city">Lahore</p>
                              <div className="row">
                                <div className="col-md-3">
                                  <a
                                    href=""
                                    className="dropdown-item dropdown-speciality border"
                                  >
                                    <img
                                      src={CMCLOG}
                                      alt=""
                                      className="rounded-circle w-25"
                                    />
                                    <span className="speciality-title ms-2">
                                      Chughtai Lab
                                    </span>
                                  </a>
                                </div>
                                <div className="col-md-3">
                                  <a
                                    href=""
                                    className="dropdown-item dropdown-speciality border"
                                  >
                                    <img
                                      src={CMCLOG}
                                      alt=""
                                      className="rounded-circle w-25"
                                    />
                                    <span className="speciality-title ms-2">
                                      Chughtai Lab
                                    </span>
                                  </a>
                                </div>
                                <div className="col-md-3">
                                  <a
                                    href=""
                                    className="dropdown-item dropdown-speciality border"
                                  >
                                    <img
                                      src={CMCLOG}
                                      alt=""
                                      className="rounded-circle w-25"
                                    />
                                    <span className="speciality-title ms-2">
                                      Chughtai Lab
                                    </span>
                                  </a>
                                </div>
                                <div className="col-md-3">
                                  <a
                                    href=""
                                    className="dropdown-item dropdown-speciality border"
                                  >
                                    <img
                                      src={CMCLOG}
                                      alt=""
                                      className="rounded-circle w-25"
                                    />
                                    <span className="speciality-title ms-2">
                                      Chughtai Lab
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-12"></div>
                            <div className="col-lg-12"></div>
                          </div>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </li> */}
              <li class="nav-item show  ">
                <Link to="/Blogs_main" className="nav-link">
                  Health Blogs
                </Link>
              </li>
            </ul>

            <button className="btn btn-login me-3" type="submit">
              Login/Signup
            </button>
            <button className="btn btn-doc me-3" type="submit">
              Join as Doctor
            </button>
            <button className="btn btn-call text-white" type="button">
              <BsTelephoneFill />
              <span className="ps-2"> 04238900939</span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
