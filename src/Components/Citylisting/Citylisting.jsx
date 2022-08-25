import React from "react";
import "./Citylisting.css";
export default function Citylisting() {
  return (
    <div className="city-listing-page">
      <div className="container py-4">
        <div className="city-img-section">
          <img src="/lahore.jpg" alt="" className="city-specific-img" />
          <div className="after"></div>
          <div className="city-text-section text-start">
            <p className="find-text fs-3 fw-bold">Find and book best doctors in Lahore</p>
            <p className="city-discribtion">
              Lahore (لاہور‎) is the 2nd largest city of Pakistan with one of
              the richest and most diverse cultural heritage. Considered to be
              the heart of Pakistan, Lahore is famous for its beautiful tourist
              attractions, food, and architecture. …
              <a href="" className="see-more-btn btn text-warning">See More</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
