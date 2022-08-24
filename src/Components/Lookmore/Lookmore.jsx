import React from "react";
import "./Lookmore.css";
import {CgNotes} from "react-icons/cg"
import {GiTransparentTubes} from "react-icons/gi"
import {BsQuestionOctagon} from "react-icons/bs"
export default function Lookmore() {
  return (
    <div className="banner-bottom-area text-center py-4 py-md-5">
      <div className="container">
        <h2 className="h4 mb-4 pb-2">Looking for more?</h2>
        <div className="row m-0 pt-1">
          <a href="" className="col-4 text-body">
            <div className="img-holder mb-2 text-warning fs-4">
              <GiTransparentTubes  />
            </div>
            <span>Book Medical Tests</span>
          </a>

          <a href="" className="col-4 text-body">
            <div className="img-holder mb-2 text-warning fs-4">
            <CgNotes/>
            </div>
            <span>Read Health Articles</span>
          </a>

          <a href="" className="col-4 text-body">
            <div className="img-holder mb-2 text-warning fs-4">
              <BsQuestionOctagon />
            </div>
            <span>Ask a Question</span>
          </a>
        </div>
      </div>
    </div>
  );
}
