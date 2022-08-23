import React from "react";
import "./Lookmore.css";
export default function Lookmore() {
  return (
    <div className="banner-bottom-area text-center py-4 py-md-5">
      <div className="container">
        <h2 className="h4 mb-4 pb-2">Looking for more?</h2>
        <div className="row m-0 pt-1">
          <a href="" className="col-4 text-body">
            <div className="img-holder mb-2">
              <img src="/test.png" alt=""  />
            </div>
            <span>Book Medical Tests</span>
          </a>

          <a href="" className="col-4 text-body">
            <div className="img-holder mb-2">
            <img src="/article.png" alt=""  />
            </div>
            <span>Read Health Articles</span>
          </a>

          <a href="" className="col-4 text-body">
            <div className="img-holder mb-2">
              <img src="/question.png" alt="" />
            </div>
            <span>Ask a Question</span>
          </a>
        </div>
      </div>
    </div>
  );
}
