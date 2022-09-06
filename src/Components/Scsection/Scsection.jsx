import React from "react";
import {AiOutlineArrowRight} from "react-icons/ai"
export default function Scsection({
  cardtitle,
  li1,
  li2,
  li3,
  li4,
  li5,
  li6,
  li7,
  li8,
  li9,
  li10,
  li11,
  li12,
}) {
  return (
    <div>
      <div className="container my-4">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body text-start">
                <div className="title-holder">
                  <h5 className="card-title ">{cardtitle}</h5>
                </div>
                <div className="service-list p-2 p-lg-3">
                  <ul className="orgdisc-list m-0 row">
                    <li className="col-12 col-md-6  ps-0">{li1}</li>
                    <li className="col-12 col-md-6  ps-0">{li2}</li>
                    <li className="col-12 col-md-6  ps-0">{li3}</li>
                    <li className="col-12 col-md-6  ps-0">{li4}</li>
                    <li className="col-12 col-md-6  ps-0">{li5}</li>
                    <li className="col-12 col-md-6  ps-0">{li6}</li>
                    <li className="col-12 col-md-6  ps-0">{li7}</li>
                    <li className="col-12 col-md-6  ps-0">{li8}</li>
                    <li className="col-12 col-md-6  ps-0">{li9}</li>
                    <li className="col-12 col-md-6  ps-0">{li10}</li>
                    <li className="col-12 col-md-6  ps-0">{li11}</li>
                    { li12 != undefined ? 
                    <li className="col-12 col-md-6  ps-0 list-unstyled btn">
                    {li12}<AiOutlineArrowRight/>
                  </li>
                  :
                  <></>}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
