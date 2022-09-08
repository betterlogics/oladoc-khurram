import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Labsheader from "../Labsheader/Labsheader";
import Mobilenav from "../Mobilenav/Mobilenav";
import Chughtaicard from "./Chughtaicard/Chughtaicard";
import Clinics from "./Clinics/Clinics";

export default function Chughtai_main() {
  return (
    <div>
      <Header />
      <Mobilenav />
      <Labsheader
        li="
CHUGHTAI LAB, LAHORE (20% DISCOUNT)"
      />

      <Chughtaicard
        imgsrc="/(CMCLOG).jpg"
        title="Chughtai Lab, Lahore (20% DISCOUNT)"
        docspecialization=" Radiology Lab, Pathology Lab"
        //  docdegree="M.B.B.S., PGDip. In Dermatology (UK)"
        wait="15 - 30 Min"
        time="Wait Time"
        years="15 Years"
        experience="Experience"
        patient="88% (460)"
        satisfied="Satisfied Patients"
        title1="Islamabad Diagnostic Centre, Jail Road (Jail Road)"
      />

      <div className="container">
        <hr />
        <div className="row justify-content-around">
          <div className="title-holder text-start ms-4 mb-4">
            <h4>Other Clinics</h4>
          </div>
          <div className="col-12 col-lg-10 my-3">
            <Clinics />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
