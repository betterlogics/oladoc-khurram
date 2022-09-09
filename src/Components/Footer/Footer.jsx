import React from "react";
import "./Footer.css";
import { BsCheckCircleFill } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { Routes, Route, Link } from "react-router-dom";
export default function Footer() {
  return (
    <div>
      <footer className="bg-dark">
        <div className="container">
          <div className="row py-4">
            <div className="col-12 col-sm-4 od-company-section">
              <span className="oladoc-footer-log">
                <img src="/footer-log.PNG" alt="" />
              </span>
              <p className="pt-2 text-secondary">
                <small>
                  Book appointments with the best Doctors and Specialists such
                  as Gynecologists, Skin Specialists, Child Specialists,
                  Surgeons, etc. Avail test services such as MRI, CT scan,
                  Ultrasound, X-Ray, etc. and Online Doctor Video Consultations
                  all across Pakistan conveniently.
                </small>
              </p>
              <div className="col-12 col-md-10 pt-md-3">
                <div className="row ps-1">
                  <div className="col-md-6">
                    <span className="title text-white d-block mb-3">
                      Company
                    </span>
                    <ul className="footer-list">
                      <li>
                        <a href="">About Us</a>
                      </li>
                      <li>
                        <a href="">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="">Delivery Policy</a>
                      </li>
                      <li>
                        <a href="">Refund Policy</a>
                      </li>
                      <li>
                        <a href="">Payment Terms</a>
                      </li>
                      <li>
                        <a href="">Contact Us</a>
                      </li>
                      <li>
                        <a href="">Term of Use</a>
                      </li>
                      <li>
                        <a href="">Cancelation Policy</a>
                      </li>
                      <li>
                        <a href="">FAQs</a>
                      </li>
                      <li>
                        <a href="">Process</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-8 pt-md-3 px-3 px-md-2">
              <div className="row pt-4">
                <div className="col-12 col-md-3">
                  <span className="title text-white d-block mb-3">
                    Major Cities
                  </span>
                  <ul className="footer-list">
                    <li>
                      <Link to="/Karachi_main">Karachi</Link>
                    </li>
                    <li>
                      <Link to="/Doctor_main">Lahore</Link>
                    </li>
                    <li>
                      <Link to="/Doctor_main">Islamabad</Link>
                    </li>
                    <li>
                      <Link to="/Doctor_main">Rawalpindi</Link>
                    </li>
                    <li>
                      <Link to="/Doctor_main">Multan</Link>
                    </li>
                    <li>
                      <Link to="/Doctor_main">Peshawar</Link>
                    </li>
                    <li>
                      <Link to="/Doctor_main">Gujranwala</Link>
                    </li>
                    <li>
                      <Link to="/Doctor_main">Faisalabad</Link>
                    </li>
                    <li>
                      <Link to="/Doctor_main">Sargodha</Link>
                    </li>
                    <li>
                      <Link to="/Doctor_main">Bahawalpur</Link>
                    </li>
                    <li>
                      <Link to="/Doctor_main">Quetta</Link>
                    </li>
                    <li>
                      <Link to="/Doctor_main">Wah Cantt</Link>
                    </li>
                    <li>
                      <Link to="/Doctor_main">Hyderabad</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-12 col-md-5">
                  <a
                    href=""
                    className="title text-white mb-3 d-block text-decoration-none"
                  >
                    Top Hospitals
                  </a>
                  <ul className="footer-list">
                    <li>
                      <Link to="/Doctorshospital_main">Doctors Hospital</Link>
                    </li>
                    <li>
                      <Link to="/Doctorshospital_main">
                        Hameed Latif Hospital
                      </Link>
                    </li>
                    <li>
                      <Link to="/Doctorshospital_main">National Hospital</Link>
                    </li>
                    <li>
                      <Link to="/Doctorshospital_main">
                        Fatima MemorialHospital
                      </Link>
                    </li>
                    <li>
                      <Link to="/Doctorshospital_main">
                        Omar Hospital and Cardic Center
                      </Link>
                    </li>
                    <li>
                      <Link to="/Doctorshospital_main">Ali Medical Center</Link>
                    </li>
                    <li>
                      <Link to="/Doctorshospital_main">
                        Shifa International Hospital
                      </Link>
                    </li>
                    <li>
                      <Link to="/Doctorshospital_main">
                        Quaid-e-Azam International Hospital
                      </Link>
                    </li>
                    <li>
                      <Link to="/Doctorshospital_main">
                        Advance Medical Center
                      </Link>
                    </li>
                    <li>
                      <Link to="/Doctorshospital_main">
                        Maroof International Hospital
                      </Link>
                    </li>
                    <li>
                      <Link to="/Doctorshospital_main">
                        South City Hospital
                      </Link>
                    </li>
                    <li>
                      <Link to="/Doctorshospital_main">
                        Dr.Zaiuddin Hospital (North Nazimabad)
                      </Link>
                    </li>
                    <li>
                      <Link to="/Doctorshospital_main">Park Lane Hospital</Link>
                    </li>
                    <li>
                      <Link to="/Doctorshospital_main">
                        National Medical Center
                      </Link>
                    </li>
                    <li>
                      <Link to="/Doctorshospital_main">
                        Liaquat National Hospital & Medical College
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-12 col-md-4">
                  <span className="title text-white d-block mb-3">
                    Lab Test
                  </span>
                  <ul className="footer-list">
                    <li>
                      <Link to="/Mri_main">Mri in Lahore</Link>
                    </li>
                    <li>
                      <Link to="/Mri_main">X-RAY in Lahore</Link>
                    </li>
                    <li>
                      <Link to="/Mri_main">CT Scan in Lahore</Link>
                    </li>
                    <li>
                      <Link to="/Mri_main">Mammography in Lahore</Link>
                    </li>
                    <li>
                      <Link to="/Mri_main">Ultrasound in Lahore</Link>
                    </li>
                  </ul>
                  <span className="title text-white d-block mb-3">More</span>
                  <ul className="footer-list">
                    <li>
                      <Link to="/Blogs_main">Health Blogs</Link>
                    </li>
                    <li>
                      <a href="">Forum</a>
                    </li>
                    <li>
                      <a href="">For Doctors</a>
                    </li>
                  </ul>
                  <span className="title text-white d-block mb-3">
                    Get the oladoc App
                  </span>
                  <div className="row">
                    <div className="col-12 col-sm-auto">
                      <a href="">
                        <img src="/footer-app-store.PNG" alt="" />
                      </a>
                    </div>
                    <div className="col-12 col-sm-auto">
                      <a href="">
                        <img src="/footer-playstore.PNG" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="d-block d-lg-none my-1 text-secondary" />
        <div className="container trust-factor-section">
          <div className="row py-0 pt-md-2 pb-md-5 ms-2 ms-lg-0 text-white">
            <div className="col-md-3 pb-4">
              <a href="" className="text-decoration-none text-white">
                <ul className="footer-list">
                  <li>
                    <img src="/pmc.png" alt="" className="me-2  d-inline" />
                    <p className="fw-bold mb-1 d-inline">
                      {" "}
                      PMC Verified Doctors
                    </p>
                  </li>
                  <li className="ms-5">Authentic & updated information</li>
                </ul>
              </a>
            </div>

            <div className="col-md-3 pb-4">
              <ul className="footer-list">
                <li>
                  <img src="/moneyback.png" alt="" className="me-2  d-inline" />
                  <p className="fw-bold mb-1 d-inline">Money Back Guarantee</p>
                </li>
                <li className="ms-5">We return money within few hours</li>
              </ul>
            </div>
            <div className="col-md-3 pb-4">
              <ul className="footer-list">
                <li>
                  <img src="/reliable.png" alt="" className="me-2  d-inline" />
                  <p className="fw-bold mb-1 d-inline">Customer Support</p>
                </li>
                <li className="ms-5">7 days a week</li>
              </ul>
            </div>
            <div className="col-md-3 pb-4">
              <ul className="footer-list">
                <li>
                  <img src="/secure.png" alt="" className="me-2  d-inline" />
                  <p className="fw-bold mb-1 d-inline">Secure Online Payment</p>
                </li>
                <li className="ms-5">Secure checkout using SSL Certificate</li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-1 text-secondary" />
        <div className="container">
          <div className="row py-3 justify-content-between">
            <div className="col-12 col-lg-auto text-lg-left">
              <p className="text-secondary m-0">
                Copyright @ 2015 - 2022
                <a href="" className="text-warning text-decoration-none">
                  {" "}
                  MediConnect Services, a subsidiary of MyDoctor Inc
                </a>
                - All Rights Reserved
              </p>
              <p className="text-secondary m-0">
                Reproduction of material from any oladoc.com pages without
                permission is strictly prohibited.
              </p>
            </div>
            <div className="col-12 col-lg-auto text-lg-right py-2">
              <span className="text-white d-md-inline fs-5">
                Connect with us
              </span>
              <ul className="nav text-white d-md-inline my-0 ms-4 social-media justify-content-around">
                <li className="d-md-inline">
                  <a href="" className="px-2 text-white">
                    <AiOutlineTwitter />
                  </a>
                </li>
                <li className="d-md-inline">
                  <a href="" className="px-2 text-white">
                    <FaFacebookF />
                  </a>
                </li>
                <li className="d-md-inline">
                  <a href="" className="px-2 text-white">
                    <AiOutlineInstagram />
                  </a>
                </li>
                <li className="d-md-inline">
                  <a href="" className="px-2 text-white">
                    <AiFillYoutube />
                  </a>
                </li>
                <li className="d-md-inline">
                  <a href="" className="px-2 text-white">
                    <AiOutlineMail />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
