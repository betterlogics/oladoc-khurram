import React from "react";
import Aboutsection from "../Aboutsection/Aboutsection";
import Accordion from "../Accordion/Accordion";
import Faqs from "../Doctorshospital_main/Faqs/Faqs";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Helpline from "../Helpline/Helpline";
import Labcards from "../Labcards/Labcards";
import Labsheader from "../Labsheader/Labsheader";
import Mobilenav from "../Mobilenav/Mobilenav";
import Scrollnav from "../Scrollnav/Scrollnav";
import Labbox from "./Labbox/Labbox";

export default function Labs_main() {
  return (
    <div className="hospital-section">
      <Mobilenav />
      <Header />
      <Labsheader
        heading="16 Best Radiology Labs in Lahore"
        li="RADIOLOGY LABS IN LAHORE"
      />
      <Scrollnav />
      <Labcards
        imgsrc="/(CMCLOG).jpg"
        title="Chughtai Lab, Lahore (20% DISCOUNT)"
        docspecialization=" Radiology Lab, Pathology Lab"
        // docdegree="M.B.B.S., M.C.P.S
        // "
        wait="Under 15 Min"
        time="Wait Time"
        years="35 Years"
        experience="Experience"
        patient="94% (6371)"
        satisfied="Satisfied Patients"
        discription="
      It was a good experience but we had to wait as the receptionist didn t know about the 10 percent discount from oladoc and he was completely evident about it. So next time just make sure that all chughtai staff members know about the policies. Thanx"
        title1="Chughtai Lab Head Office (All Radiology, Patho"
      />
      <Labbox
        imgsrc="/idc.jpg"
        title="Islamabad Diagnostic Centre, LHR (20% Discount)"
        docspecialization=" Radiology Lab, Pathology Lab"
        //  docdegree="M.B.B.S., PGDip. In Dermatology (UK)"
        wait="15 - 30 Min"
        time="Wait Time"
        years="15 Years"
        experience="Experience"
        patient="88% (460)"
        satisfied="Satisfied Patients"
        title1="Islamabad Diagnostic Centre, Jail Road (Jail Road)"   imgsrc="/idc.jpg"
        title="Islamabad Diagnostic Centre, LHR (20% Discount)"
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
      <Labbox
        imgsrc="/logob.png"
        title="Al Razi Healthcare Lab"
        docspecialization=" Radiology Lab"
        //  docdegree="M.B.B.S., PGDip. In Dermatology (UK)"
        wait="15 - 30 Min"
        time="Wait Time"
        years="15 Years"
        experience="Experience"
        patient="88% (460)"
        satisfied="Satisfied Patients"
        title1="Al Razi Healthcare Lab (Gulberg)"
      />
      <Labbox
        imgsrc="/aga.png"
        title="Al Razi Healthcare Lab"
        docspecialization=" Radiology Lab"
        //  docdegree="M.B.B.S., PGDip. In Dermatology (UK)"
        //  wait="15 - 30 Min"
        //  time="Wait Time"
        years="15 Years"
        experience="Experience"
        //  patient="88% (460)"
        //  satisfied="Satisfied Patients"
        title1="Al Razi Healthcare Lab (Gulberg)"
      />
      <Aboutsection />
      <Accordion />
      <Helpline />
      <Faqs
        accordiontitle="Related Treatments
        "
        // title='Top 10 doctors of September 2022 in Doctors Hospital are:'
        li1="Dental X-rays (OPG)e"
        li2=" DEXA Scan"
        li3="Screening
      "
        li4="Digital X-ray "
        li5="MRI"
        li6="
       
CT Scan"
        li7="X-Ray"
        li8="
        Mammography"
        li9="Transrectal Ultrasound"
      />
      <Faqs
        accordiontitle="Radiology Labs in areas near you
        "
        // title='Top 10 doctors of September 2022 in Doctors Hospital are:'
        li1="Jail Road"
        
      />
      
      <Footer />
    </div>
  );
}
