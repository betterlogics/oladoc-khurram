import React from 'react'
import Dermatologistcard from '../Dermatologist_main/Dermatologistcard/Dermatologistcard'
import Doctorscard from '../Doctorscard/Doctorscard'
import Doctorscroll from '../Doctorscroll/Doctorscroll'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Labcards from '../Labcards/Labcards'
import Labsheader from '../Labsheader/Labsheader'
import Mobilenav from '../Mobilenav/Mobilenav'
import Scrollnav from '../Scrollnav/Scrollnav'

export default function Gynecologist_main() {
  return (
    <div>
         <Mobilenav/>
      <Header/>
      <Labsheader
       heading="584 Best Gynecologists in Lahore"
       li="GYNECOLOGISTS IN LAHORE"
       para='Also known as Female Health Specialist ,ماہرِ اَمراضِ نِسواں ,OB-GYN, Women Health Specialist and Mahir-e-imraz-e-niswan'/>
      <Scrollnav/>
      <Dermatologistcard
         imgsrc="/nazil-hameed.png"
         title="Prof. Col. Dr. Nazli Hameed"
         docspecialization=" Gynecologist, Obstetrician"
         docdegree="MBBS, FCPS (Gynecology & Obstetrics), MRCOG (UK), Diploma in Minimal Access Surgery ( France) , FRC
         "
         wait="Under 15 Min"
         time="Wait Time"
         years="10 Years"
         experience="Experience"
         patient="98% (84)"
         satisfied="Satisfied Patients"
         title1='National Hospital & Medical Centre (DHA)'
         price='Rs. 3,000'/>
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
       
      <Footer/>
    </div>
  )
}
