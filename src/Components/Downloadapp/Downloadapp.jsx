import React from "react";
import "./Downloadapp.css";
import { BiSelectMultiple } from "react-icons/bi";
export default function Downloadapp() {
  return (
    <div className="px-2">
      <div className="container download-app-section text-start">
        <div className="download-app-left-section pb-5">
          <h3 className="mb-4">Download the oladoc App</h3>
          <div className="verified-points mb-3">
            <BiSelectMultiple className="text-primary fs-4" />
            <span className="ps-3">Instant Video Consultation</span>
          </div>
          <div className="verified-points mb-3">
            {" "}
            <BiSelectMultiple className="text-primary fs-4" />
            <span className="ps-3">Exclusive Discounts on oladoc App</span>
          </div>
        <span className="get-app-text">Get the oladoc App</span>
        <a href=""><img src="/playstore.PNG" alt="" /></a>
        <a href=""><img src="/app-store.PNG" alt="" /></a>
        </div>
        <div className="city-listing-mobile-img d-none d-lg-block">
            <img src="/city-listing-mobile.png" className="img-fluid" alt="" />
        </div>
      </div>
    </div>
  );
}
