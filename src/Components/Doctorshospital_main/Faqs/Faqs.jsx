import React from "react";
import "./Faqs.css"
export default function Faqs({accordiontitle,title,li1,li2,li3,li4,li5,li6,li7,li8,li9,li10,li11,li12,li13,li14,li15,li16}) {
  return (
    <div className="bg-white overflow-hidden">
      <div className="container listing-brief-intro-section">
      
        <div className="row m-0 mb-3 pb-4 align-items-start justify-content-between text-sm faq-accordion accordion">
          <div className="accordion" id="accordionExample">
          <div className="accordion-item ">
              <h2 className="accordion-header" id="heading1">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq1"
                  aria-expanded="true"
                  aria-controls="faq1"
                >
                  <h5>{accordiontitle}</h5>
                </button>
              </h2>
              <div
                id="faq1"
                className="accordion-collapse collapse show"
                aria-labelledby="heading1"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body text-start">
                <div className="service-list  p-2 p-lg-3">
                  <ul className="specialdoc-list m-0 row">
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
                    <li className="col-12 col-md-6  ps-0">{li12}</li>
                    <li className="col-12 col-md-6  ps-0">{li13}</li>
                    <li className="col-12 col-md-6  ps-0">{li14}</li>
                    <li className="col-12 col-md-6  ps-0">{li15}</li>
                    <li className="col-12 col-md-6  ps-0">{li16}</li>
                    
                 
                  </ul>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
