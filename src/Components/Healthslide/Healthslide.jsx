import React from "react";
import "./Healthslide.css";
export default function Healthslide() {
  return (
    <div className="my-4">
      <div className="container">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="common-winter-health-problems.jpg"
                className="d-flex w-100 "
                alt="..."
              />
            </div>
            <div className="carousel-item ">
              <img
                src="/home-remedies-for-heartburn.jpg"
                className="d-flex w-100 "
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img src="desi-ghee.jpg" className="d-flex w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img
                src="COVID-19-Booster-Shots-and-Third-Doses.jpg"
                className="d-flex w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img src="Loprin.jpeg" className="d-flex w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img
                src="Dhamasa-Booti-Benefits.jpg"
                className="d-flex w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="galay-ki-sozish.jpg"
                className="d-flex w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img src="kinoo.jpeg" className="d-flex w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img
                src="Khashkhash-768x402.jpg"
                className="d-flex w-100 "
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}
