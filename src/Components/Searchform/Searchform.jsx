import React from 'react'
import { BiCurrentLocation } from "react-icons/bi";
import { GrLocation } from "react-icons/gr";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BsSearch } from "react-icons/bs";
export default function Searchform() {
  return (
    <div>
      <div className="container mt-md-5 mt-0">
        <div className="row pt-md-5">
        <div className="col-12 d-none d-lg-block mb-4 mb-md-5 text-left">
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
                <option>
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
          <div className="col-12 d-lg-none">
            <div className="row m-0 mobile-search-holder">
              <div className="col-12">
                <div className="rounded mb-2 overflow-hidden">
                  {/* <a
                    href=""
                    className="search-opener text-decoration-none text-white fs-4 "
                  >
                    <GrLocation className=" loc-icon" />
                    <span className="ps-3">
                      Lahore <RiArrowDropDownLine />
                    </span>
                  </a> */}
                  <div className="search-btn-holder my-2">
                    <div class="input-group flex-nowrap">
                      <span className="input-group-text" id="addon-wrapping">
                        <BsSearch />
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="  Search for doctors, hospitals, specialties, services, diseases"
                        aria-label="Username"
                        aria-describedby="addon-wrapping"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
  )
}
