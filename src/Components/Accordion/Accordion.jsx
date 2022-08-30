import React from "react";
import "./Accordion.css";
export default function Accordion() {
  return (
    <div className="bg-white overflow-hidden">
      <div className="container listing-brief-intro-section">
        <div className="row">
          <div className="col">
            <h4 className="fw-normal faq-heading">
              Frequently Asked Questions
            </h4>
          </div>
        </div>
        {/*  */}
        <div className="row m-0 mb-3 pb-4 align-items-start justify-content-between text-sm faq-accordion accordion">
          <div className="accordion" id="accordionExample">
            <div className="accordion-item ">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <h5>Who is the best Radiology Lab in Lahore?</h5>
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body text-start">
                  <h5>10 best Radiology Labs in Lahore are:</h5>
                  <ul>
                    <li>Alnoor Diagnostic Centre (Up To 30% DISCOUNT)</li>
                    <li>Chughtai Lab, Lahore (20% DISCOUNT)</li>
                    <li>Al Razi Healthcare Lab</li>
                    <li>Punjab Clinic of Radiology</li>
                    <li>Islamabad Diagnostic Centre (EverCare)</li>
                    <li>AL-Nasar Lab (Johar Town)</li>
                    <li>Lifeline Imaging Centre</li>
                    <li>Doctors Diagnostic Laboratory & Consultants</li>
                    <li>Islamabad Diagnostic Centre, LHR (20% Discount)</li>
                    <li>Bahria International Hospital Laboratory</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item text-start">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <h5>Who are the most experienced Radiology Lab in Lahore?</h5>
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse show"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <h5>6 most experienced Radiology Labs in Lahore are:</h5>
                  <ul>
                    <li>Alnoor Diagnostic Centre (Up To 30% DISCOUNT)</li>
                    <li>Chughtai Lab, Lahore (20% DISCOUNT)</li>
                    <li>Al Razi Healthcare Lab</li>
                    <li>Punjab Clinic of Radiology</li>
                    <li>Islamabad Diagnostic Centre (EverCare)</li>
                    <li>AL-Nasar Lab (Johar Town)</li>
                    <li>Lifeline Imaging Centre</li>
                    <li>Doctors Diagnostic Laboratory & Consultants</li>
                    <li>Islamabad Diagnostic Centre, LHR (20% Discount)</li>
                    <li>Bahria International Hospital Laboratory</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item text-start">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  <h5>
                    How can I book an appointment with a Radiology Lab in
                    Lahore?
                  </h5>
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse show"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Click here to book an appointment with a top Radiology Lab in
                  Lahore. Or, you can also call at 04238900939 from 9AM to 11PM
                  to book your appointment.
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
}
