import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

import { AiOutlineMail } from "react-icons/ai";
export default function Blogsfooter() {
  return (
    <div>
      <footer className="bg-dark">
        <div className="container">
          <div className="row py-4">
            <div className="col-12 col-sm-4 col-md-6 od-company-section">
              <span className="oladoc-footer-log">
                <img src="/footer-log.PNG" alt="" />
              </span>
              <p className="pt-2 text-secondary text-start">
                <small>
                  Book appointments with the best Doctors and Specialists such
                  as Gynecologists, Skin Specialists, Child Specialists,
                  Surgeons, etc. in Pakistan conveniently.
                </small>
              </p>
              <span className="title text-white d-block mb-3">
              Download App


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
            <div className="col-12 col-md-6 col-sm-8 pt-md-3 px-3 px-md-2">
              <div className="row pt-4">
                <div className="col-12 col-md-6">
                  <span className="title text-white d-block mb-3">
                     Cities
                  </span>
                  <ul className="footer-list">
                    <li>
                      <a href="">Karachi</a>
                    </li>
                    <li>
                      <a href="">Lahore</a>
                    </li>
                    <li>
                      <a href="">Islamabad</a>
                    </li>
                    <li>
                      <a href="">Rawalpindi</a>
                    </li>
                    <li>
                      <a href="">Multan</a>
                    </li>
                    <li>
                      <a href="">Peshawar</a>
                    </li>
                    <li>
                      <a href="">Gujranwala</a>
                    </li>
                  
                  </ul>
                </div>
                
                <div className="col-12 col-md-6">
                  <span className="title text-white d-block mb-3">
                  Specialities
                  </span>
                  <ul className="footer-list">
                    <li>
                      <a href="">Child specialist</a>
                    </li>
                    <li>
                      <a href="">ENT specialist</a>
                    </li>
                    <li>
                      <a href="">Gynecologists</a>
                    </li>
                    <li>
                      <a href="">Dentists</a>
                    </li>
                    <li>
                      <a href="">Dermatologists</a>
                    </li>
                    <li><a href="">Eye Specialist</a>
                    </li>
                    <li><a href="">Dietitian/Nutrition</a></li>
                  </ul>
                
               {/*  */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <hr className="d-block d-lg-none my-1 text-secondary" /> */}

        <hr className="my-1 text-secondary" />
        <div className="container">
          <div className="row py-3 justify-content-between">
            <div className="col-12 col-lg-auto text-lg-left">
              <p className="text-secondary m-0">
                © 2015 - 2020
                <a href="" className="text-warning text-decoration-none">
                  {" "}
                  MediConnect Services
                </a>
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
