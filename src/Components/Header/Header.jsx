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
              <img src="logo.png" alt="" />
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
                              className="dropdown-item"
                            >
                              Dermatologist
                              <BsArrowRightShort />
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/Gynecologist_main"
                              className="dropdown-item"
                            >
                              Gynecologist <BsArrowRightShort />
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/Dermatologist_main"
                              className="dropdown-item"
                            >
                              Psychiatrist <BsArrowRightShort />
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/Dermatologist_main"
                              className="dropdown-item"
                            >
                              Urologist <BsArrowRightShort />
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/Dermatologist_main"
                              className="dropdown-item"
                            >
                              Sexologist <BsArrowRightShort />
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/Dermatologist_main"
                              className="dropdown-item"
                            >
                              ENT Specialist <BsArrowRightShort />
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/Dermatologist_main"
                              className="dropdown-item"
                            >
                              Eye Specialist <BsArrowRightShort />
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/Dermatologist_main"
                              className="dropdown-item"
                            >
                              Neurologist <BsArrowRightShort />
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/Dermatologist_main"
                              className="dropdown-item"
                            >
                              Orthopedic Surgeon <BsArrowRightShort />
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/Dermatologist_main"
                              className="dropdown-item"
                            >
                              Child Specialist <BsArrowRightShort />
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col-3">
                        <h6>Find Doctor by Treatment</h6>
                        <ul>
                          <li>
                            <Link to="/Mri_main" className="dropdown-item">
                              MRI <BsArrowRightShort />
                            </Link>
                          </li>
                          <li>
                            <Link to="/Mri_main" className="dropdown-item">
                              CT Scan <BsArrowRightShort />
                            </Link>
                          </li>
                          <li>
                            <Link to="/Mri_main" className="dropdown-item">
                              Laser Hair Removal <BsArrowRightShort />
                            </Link>
                          </li>
                          <li>
                            <Link to="/Mri_main" className="dropdown-item">
                              Test Tube Baby <BsArrowRightShort />
                            </Link>
                          </li>
                          <li>
                            <Link to="/Mri_main" className="dropdown-item">
                              Penile Implant <BsArrowRightShort />
                            </Link>
                          </li>
                          <li>
                            <Link to="/Mri_main" className="dropdown-item">
                              Normal Delivery <BsArrowRightShort />
                            </Link>
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
                            <Link
                              to="/Dermatologist_main"
                              className="dropdown-item"
                            >
                              Piles <BsArrowRightShort />
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/Dermatologist_main"
                              className="dropdown-item"
                            >
                              Male Sexual Dysfunction <BsArrowRightShort />
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/Dermatologist_main"
                              className="dropdown-item"
                            >
                              Male Infertility <BsArrowRightShort />
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/Dermatologist_main"
                              className="dropdown-item"
                            >
                              {" "}
                              Hernia <BsArrowRightShort />
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/Dermatologist_main"
                              className="dropdown-item"
                            >
                              Erectile Dysfunction <BsArrowRightShort />
                            </Link>
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
                            <Link
                              to="/Dermatologist_main"
                              className="dropdown-item"
                            >
                              Online Dermatologist
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/Dermatologist_main"
                              className="dropdown-item"
                            >
                              Online Gynecologist
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/Dermatologist_main"
                              className="dropdown-item"
                            >
                              Online Psychiatrist
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/Dermatologist_main"
                              className="dropdown-item"
                            >
                              Online Urologist
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/Dermatologist_main"
                              className="dropdown-item"
                            >
                              Online Sexologist
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/Dermatologist_main"
                              className="dropdown-item"
                            >
                              Online ENT Specialist
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/Dermatologist_main"
                              className="dropdown-item"
                            >
                              Online Eye Specialist
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/Dermatologist_main"
                              className="dropdown-item"
                            >
                              Online Neurologist
                            </Link>
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

                        <Link to="/Hospital_main" className="nav-link">
                          View all Hospital <BsArrowRightShort />
                        </Link>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-3">
                        <h6 className="text-center">Lahore</h6>
                        <ul>
                          <li>
                            <Link
                              to="/Doctorshospital_main"
                              className="dropdown-item"
                            >
                              Doctors Hospital
                              <BsArrowRightShort />
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/Hameedhospital_main"
                              className="dropdown-item"
                            >
                              Hameed Latif Hospital
                              <BsArrowRightShort />
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/Doctorshospital_main"
                              className="dropdown-item"
                            >
                              Omar Hospital & Cardiac Center{" "}
                              <BsArrowRightShort />
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/Hameedhospital_main"
                              className="dropdown-item"
                            >
                              Mid City Hospital <BsArrowRightShort />
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/Hameedhospital_main"
                              className="dropdown-item"
                            >
                              Surgimed Hospital <BsArrowRightShort />
                            </Link>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              National Hospiatal <BsArrowRightShort />
                            </a>
                          </li>
                          <li>
                            <Link
                              to="/Hameedhospital_main"
                              className="dropdown-item"
                            >
                              Fatima Memorial Hospital <BsArrowRightShort />
                            </Link>
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
                            <Link to="/Hospital_main" className="dropdown-item">
                              All Hospitals in Lahore <BsArrowRightShort />
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col-3">
                        <h6 className="text-center">Karachi</h6>
                        <ul>
                          <li>
                            <Link
                              to="/Hameedhospital_main"
                              className="dropdown-item"
                            >
                              Hashminas Hospital
                              <BsArrowRightShort />
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/Hameedhospital_main"
                              className="dropdown-item"
                            >
                              South City Hospital <BsArrowRightShort />
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/Hameedhospital_main"
                              className="dropdown-item"
                            >
                              Altamash General Hospital <BsArrowRightShort />
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/Hameedhospital_main"
                              className="dropdown-item"
                            >
                              Medicare & General Hospital <BsArrowRightShort />
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/Hameedhospital_main"
                              className="dropdown-item"
                            >
                              Dr. Ziauddin Hospital <BsArrowRightShort />
                            </Link>
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
                            <Link to="/Hospital_main" className="dropdown-item">
                              All Hospitals in Karachi <BsArrowRightShort />
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col-3">
                        <h6 className="text-center">Islamabad</h6>
                        <ul>
                          <li>
                            {" "}
                            <Link
                              to="/Hameedhospital_main"
                              className="dropdown-item"
                            >
                              Advance Medical Center <BsArrowRightShort />
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/Hameedhospital_main"
                              className="dropdown-item"
                            >
                              Islamabad International Hospital{" "}
                              <BsArrowRightShort />
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/Hameedhospital_main"
                              className="dropdown-item"
                            >
                              Shifa International Hospital <BsArrowRightShort />
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/Hameedhospital_main"
                              className="dropdown-item"
                            >
                              Maroof International Hospital{" "}
                              <BsArrowRightShort />
                            </Link>
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
                            <Link to="/Hospital_main" className="dropdown-item">
                              All Hospitals in Islamabad <BsArrowRightShort />
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col-3">
                        <h6 className="text-center">Rawalpindi</h6>
                        <ul>
                          <li>
                            <Link
                              to="/Hameedhospital_main"
                              className="dropdown-item"
                            >
                              Relince Hospital
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/Hameedhospital_main"
                              className="dropdown-item"
                            >
                              Khatoon Hospital
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/Hameedhospital_main"
                              className="dropdown-item"
                            >
                              Shaafi International Hospital
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/Hameedhospital_main"
                              className="dropdown-item"
                            >
                              Fauji Foundation Hospital
                            </Link>
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
                            <Link to="/Hospital_main" className="dropdown-item">
                              All Hospitals in Rawalpindi
                            </Link>
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
                        <Link to="/Chughtai_main" className="nav-link">
                          <a className="dropdown-item dropdown-speciality border">
                            <img
                              src={CMCLOG}
                              alt=""
                              className="rounded-circle w-25"
                            />
                            <span className="speciality-title ms-2">
                              Chughtai Lab
                            </span>
                          </a>
                        </Link>
                      </div>
                      <div className="col-3">
                        <Link to="/Chughtai_main" className="nav-link">
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
                        </Link>
                      </div>
                      <div className="col-3">
                        <Link to="/Chughtai_main" className="nav-link">
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
                        </Link>
                      </div>
                      <div className="col-3">
                        <Link to="/Chughtai_main" className="nav-link">
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
                        </Link>
                      </div>
                      <div className="col-3">
                        <Link to="/Chughtai_main" className="nav-link">
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
                        </Link>
                      </div>
                      <div className="col-3">
                        <Link to="/Chughtai_main" className="nav-link">
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
                        </Link>
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
