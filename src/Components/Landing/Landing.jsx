import React from "react";
import "./Landing.css";
import { BiCurrentLocation } from "react-icons/bi";
export default function Landing() {
  return (
    <div className="home-banner">
      <div className="container text-white">
        <div className="row py-md-5">
          <div className="col-12 px-3">
            <h1 className="mb-3 mb-md-5 mt-5">
              Find and book the{" "}
              <span className="text-warning"> best doctors </span>near you
            </h1>
          </div>
          <div className="col-12 d-lg-block mb-4 mb-md-5 text-left">
            <div className="input-group">
              <select
                class="form-select" 
                id="inputGroupSelect04"
                aria-label="Example select with button addon"
              >
                <option selected>Lahore</option>
                <option value="1">Rawalpindi</option>
                <option value="2">Karachi</option>
                <option value="3">Isalamabad</option>
              </select>
              <button className="btn btn-detect " type="button">
                <BiCurrentLocation />
                <span className="ps-2 fs-6">Detect</span>
              </button>
              <select
                className="form-select"
                id="inputGroupSelect04"
                aria-label="Example select with button addon"
              >
                <option >
                  Search for doctors, hospitals, specialties, services, diseases
                </option>
                <option value="1">Gynecologist</option>
                <option value="2">Skin Specialist</option>
                <option value="3">Child Specialist</option>
              </select>
              <button
                class="btn btn-outline-secondary"
                id="filter-search-button"
                type="Submit"
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="row justify-content">
          <div className="col-12">
            <div className="text-holder h3">
              <span>25,000+ doctors</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
