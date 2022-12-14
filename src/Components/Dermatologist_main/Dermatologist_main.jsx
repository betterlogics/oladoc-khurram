import React from 'react'
import Doctorscard from '../Doctorscard/Doctorscard'
import Doctorscroll from '../Doctorscroll/Doctorscroll'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Labcards from '../Labcards/Labcards'
import Labsheader from '../Labsheader/Labsheader'
import Mobilenav from '../Mobilenav/Mobilenav'
import Scrollnav from '../Scrollnav/Scrollnav'
import Dermatologistcard from './Dermatologistcard/Dermatologistcard'

export default function Dermatologist_main() {
  return (
    <div>
      <Mobilenav/>
      <Header/>
      <Labsheader
       heading="231 Best Dermatologists/Skin Specialists in Lahore"
       li="DERMATOLOGISTS IN LAHORE"
       para='Also known as Skin Specialist ,ماہرامراض جلد ,Skin Doctor and Mahir-e-imraz-e-jild'/>
      <Scrollnav/>
      <Doctorscard
       imgsrc="/dr-sana.jpg"
       title="Dr. Sana Sheraz Javaid"
       docspecialization=" Dermatologist, Cosmetologist"
       docdegree="M.B.B.S., PGDip. In Dermatology (UK)"
       wait="Under 15 Min"
       time="Wait Time"
       years="15 Years"
       experience="Experience"
       patient="80% (326)"
       satisfied="Satisfied Patients"
       />
    <div className="container ">
      <div className="row">
<Doctorscroll/>
      </div>
    </div>
      
      <Doctorscard
       imgsrc="/dr-humaira.png"
       title="Dr. Sana Sheraz Javaid"
       docspecialization=" Dermatologist, Cosmetologist"
       docdegree="M.B.B.S., PGDip. In Dermatology (UK)"
       wait="Under 15 Min"
       time="Wait Time"
       years="12 Years"
       experience="Experience"
       patient="98% (165)"
       satisfied="Satisfied Patients"
       />
     <Dermatologistcard
      imgsrc="/Farhana-Nazir.jpg"
      title="Dr. Sana Sheraz Javaid"
      docspecialization=" Dermatologist, Laser Specialist,  Cosmetologist"
      docdegree="M.B.B.S., M.C.P.S
      "
      wait="Under 15 Min"
      time="Wait Time"
      years="10 Years"
      experience="Experience"
      patient="98% (84)"
      satisfied="Satisfied Patients"
      title1='Smile Care Dental & Skin Clinic (PIA Society)'
      price='Rs. 1,500'/>
      <Footer/>
    </div>
  )
}
