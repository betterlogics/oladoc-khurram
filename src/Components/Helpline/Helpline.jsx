import React from "react";
import "./Helpline.css"
import {BsFillTelephoneFill} from "react-icons/bs"
export default function Helpline() {
  return (
    <div className="bg-white ">
      <div className="container listing-brief-intro-section call-helpline-banner">
        <div className="call-helpline-section">
          <p className="still-qus">Still have Questions?</p>
          <p>Call our Healthcare Agent</p>
          <a href="" className="btn call-helpline btn btn-warning text-white">
           <BsFillTelephoneFill className="me-2"/> Call Helpline
          </a>
        </div>
      </div>
    </div>
  );
}
