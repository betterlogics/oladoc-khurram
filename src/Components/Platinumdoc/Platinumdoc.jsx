import React from "react";
import { TbCrown } from "react-icons/tb";
export default function Platinumdoc() {
  return (
    <div className="platinumdoc py-5">
      <div className="container">
        <div className="row">
          <div className="section-title text-start ">
            <h4>
              {" "}
              <TbCrown /> Platinum doctors
            </h4>
            <p>Doctors with exceptional services & patient satisfaction</p>
          </div>
        </div>
        <div className="row">
          {/* <div class="card" style={{ width: "18rem" }}>
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div> */}
          <div className="card  pt-5 mx-2 " style={{ width: "18rem" }}>
            <span className=" pre rounded-circle border">
              <img src="/Col.(R).jpg" className="img-fluid" alt="" />
            </span>
            <div className="card-body">
              <p className="card-text mt-5 fs-5">
              Col. (R) Prof. Dr. M. Asghar Ali
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
