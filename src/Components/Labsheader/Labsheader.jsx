import React from "react";
import { Routes, Route, Link } from "react-router-dom";
export default function Labsheader({ heading,li,li2,para }) {
  return (
    <div className="mt-5 pt-lg-5">
      <div className="container">
        <div className="row ps-2">
          {" "}
          <nav>
            {" "}
            <ol className="breadcrumb bg-transparent p-0 ">
              <li className="breadcrumb-item">
              <Link to="/">HOME</Link>
                
              </li>
              <li className="breadcrumb-item">
                <a href="">PAKISTAN</a>
              </li>
              <li className="breadcrumb-item">
              <Link to="/Doctor_main">
              LAHORE
              </Link>
             
              </li>
              {/* <li className="breadcrumb-item">
                <a href="">{li2}</a>
              </li> */}
              <li className="breadcrumb-item">
                <a href="">{li}</a>
              </li>
            </ol>
          </nav>{" "}
        </div>
        <div className="col my-1 ps-0 text-start">
          <h4 className="  pb-2">{heading}</h4>
          <p>{para}</p>
        </div>
      </div>
    </div>
  );
}
