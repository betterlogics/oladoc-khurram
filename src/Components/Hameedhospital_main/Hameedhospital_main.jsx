import React from 'react'
import Aboutdochospital from "../Aboutdochospital/Aboutdochospital";
import Accordion from "../Accordion/Accordion";
import Contactloc from "../Contactloc/Contactloc";
import Doctorsbyspeciality from "../Doctorsbyspeciality/Doctorsbyspeciality";
import Experiencedoc from "../Experiencedoc/Experiencedoc";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Helpline from "../Helpline/Helpline";
import Hospitalcard from "../Hospitalcard/Hospitalcard";
import Hospitalnav from "../Hospitalnav/Hospitalnav";
import Mobilenav from "../Mobilenav/Mobilenav";
import Scsection from "../Scsection/Scsection";
import Slider from "../Slider/Slider";

export default function Hameedhospital_main() {
  return (
    <div>
        <Header />
      <Mobilenav />
  
      <Hospitalnav/>
      
      <Hospitalcard
        imgsrc="/hameed-latif-hospital.webp"
        title="Hameed Latif Hospital"
        para="14 - Abu Bakar Block, New Garden Town, Lahore"
      />
      <Doctorsbyspeciality />
      <div className="container">
        <div className="title-holder text-md-start showing-exp-doc-hospital fs-4 py-4 ps-3">
          Most Experienced Doctors in Doctors Hospital
        </div>
      </div>
      <Experiencedoc
        imgsrc="/Dr-iftkhar-ali-shah.jpg"
        title="Dr. Iftikhar Ali Shah "
        docspecialization=" Hand Surgeon, Cosmetic Surgeon, Reconstructive Surgeon, Plastic Surgeon"
        docdegree="  MBBS, FRCS (Edin), FRCS(Glasgow),
        Diplomate in Plastic Surgery"
        wait="Under 15 Min"
        time="Wait Time"
        years="37 Years"
        experience="Experience"
        patient="92% (59)"
        satisfied="Satisfied Patients"
        price="Rs.4,000"
      />
      <Experiencedoc
        imgsrc="/Dr-tariq-rafique-khan.jpg"
        title="Dr. Tariq Rafiq Khan "
        docspecialization=" Hand Surgeon, Cosmetic Surgeon, Reconstructive Surgeon, Plastic Surgeon"
        docdegree="  MBBS, FRCS (Edin), FRCS(Glasgow),
        Diplomate in Plastic Surgery"
        wait="Under 15-30 Min"
        time="Wait Time"
        years="35 Years"
        experience="Experience"
        patient="99% (235)"
        satisfied="Satisfied Patients"
        price="Rs.2,500"
      />
      <Experiencedoc
        imgsrc="/DrMahmoodulHassan4.jpg"
        title="Dr. Mahmood Ul Hassan "
        docspecialization=" 
        Urologist, Andrologist"
        docdegree=" M.B.B.S., F.R.C.S"
        wait="Under 15 Min"
        time="Wait Time"
        years="34 Years"
        experience="Experience"
        patient="97% (65)"
        satisfied="Satisfied Patients"
        price="Rs.3,000"
      />
      <Experiencedoc
        imgsrc="/qurat-ul-ain-sajjida.jpg"
        title="Dr. Quratul Ain Sajida "
        docspecialization="  
Dermatologist, Cosmetologist"
        docdegree=" M.B.B.S., M.C.P.S (Dermatologist)"
        wait="Under 15 Min"
        time="Wait Time"
        years="32 Years"
        experience="Experience"
        patient="97% (1011)"
        satisfied="Satisfied Patients"
        price="Rs.3,000"
      />
      <Scsection
        cardtitle="Services provided by Doctors Hospital"
        li1="Emergency Care"
        li2="Banking Services"
        li3="Heart, Brain, & Body Scan Center"
        li4="Nuclear Medicine"
        li5="
      Clinical Psychology"
        li6="
      Dermatology"
        li7="Pain Relief Center"
        li8="
      Nutrition/Dietitian"
        li9="
      Nephrology"
        li10="Psychiatry"
        li11="
      Speech Therapist"
      />
      <Scsection
        cardtitle="Facilities at Doctors Hospital"
        li1="Cancer Center"
        li2="Cardiology"
        li3="
      Dermatology"
        li4="Diabetes & Endocrinology"
        li5="
      General Medicince"
        li6="
     
Gasternology"
        li7="Gynecology & Obstetrics"
        li8="
    
General Surgery"
        li9="
      
Hematology & Oncology"
        li10="Internal Medicine"
        li11="
    
ENT"
        li12="View 19 More "
      />
      <Contactloc />
      <Aboutdochospital />
      <Slider />
      <Accordion />

      <Helpline />
   
    
      <Footer />
    </div>
  )
}
