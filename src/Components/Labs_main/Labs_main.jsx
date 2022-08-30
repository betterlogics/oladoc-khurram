import React from "react";
import Aboutsection from "../Aboutsection/Aboutsection";
import Accordion from "../Accordion/Accordion";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Helpline from "../Helpline/Helpline";
import Labcards from "../Labcards/Labcards";
import Labsheader from "../Labsheader/Labsheader";
import Mobilenav from "../Mobilenav/Mobilenav";
import Scrollnav from "../Scrollnav/Scrollnav";

export default function Labs_main() {
  return (
    <div className="hospital-section">
      <Mobilenav />
      <Header />
      <Labsheader />
      <Scrollnav />
      <Labcards />
      <Labcards />
      <Labcards />
      <Aboutsection />
      <Accordion />
      <Helpline />
      <Footer />
    </div>
  );
}
