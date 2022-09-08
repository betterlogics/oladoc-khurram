import React from "react";
import { BsTelephoneFill } from "react-icons/bs";
import {SiGooglemaps} from "react-icons/si"
import "./Hospitalcard.css";
export default function Hospitalcard({imgsrc,title,para}) {
  return (
    <div>
      <div className="container ">
        <div class="card mb-3 od-hospital-card">
          <div class="row g-0">
            <div class="col-md-4 avatar m-3">
              <span className="css-avatar-img d-block overflow-hidden rounded-circle">
                <img
                  src={imgsrc}
                  className="img-fluid "
                  alt="..."
                />
              </span>
            </div>
            <div class="col-md-8">
              <div class="card-body text-start">
                <h5 class="card-title">{title}</h5>
                <p class="card-text">
               {para}
                </p>
                <ul className="list-unstyled d-flex">
                    <li>
                        <div className="hospital-card-btn d-flex">
                            <a href="" className="od-btn-helpline btn btn-primary px-4 "> <BsTelephoneFill className="me-2"/>Call Helpline</a>
                        </div>
                    </li>
                    <li>
                        <a href="" className="get-direction-link border  text-danger"><SiGooglemaps/></a>
                    </li>
                </ul>
          
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

