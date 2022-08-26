import React from "react";

export default function Labsheader() {
  return (
    <div className="mt-5 pt-lg-5">
      <div className="container">
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
                <a href="">RADIOLOGY LABS IN LAHORE</a>
              </li>
            </ol>
          </nav>{" "}
        </div>
        <div className="col my-1 ps-0 text-start">
          <h4 className="  pb-2">15 Best Radiology Labs in Lahore</h4>
        </div>
      </div>
    </div>
  );
}
