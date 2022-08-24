import React from "react";
import "./Oladocapp.css";
export default function Oladocapp() {
  return (
    <div className="oladoc-app bg-lightgray py-3 py-sm-5 text-md-left text-center">
      <div className="container">
        <div className="row m-2 mx-md-row px-2 align-items-center justify-content-center">
          <div className="col-12 col-md-4 d-none d-md-block">
            <div className="mobileapp-img-holder easystepmobileapp-img-holder position-relative mx-auto mb-3 mb-md-2">
              <img
                src="/mobile-img-2.png"
                alt=""
                className="mobileapp-img img-fluid"
              />
              <img
                src="/iPhoneX-img.png"
                alt=""
                className="iphone-x inner-data"
              />
            </div>
          </div>
          <div className="col-12 col-md-5 py-2 py-md-5">
            <h2 className="h4 mb-3 mb-md-4">Download the oladoc app</h2>
            <p className="mb-4 text-start">
              Search for doctors, specialities, treatments, hospitals and
              services. Find doctor reviews and book appointment online, all
              using the oladoc app.
            </p>
            <div className="row pt-2">
                <div className="col-12 col-sm-auto ">
                    <a href=""><img src="/playstore.PNG" alt="" /></a>
                </div>
                <div className="col-12 col-sm-auto">
                <a href=""><img src="/app-store.PNG" alt="" /></a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
