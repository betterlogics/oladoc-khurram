import React from "react";
import Aboutsection from "../Aboutsection/Aboutsection";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Labcards from "../Labcards/Labcards";
import Labsheader from "../Labsheader/Labsheader";
import Mobilenav from "../Mobilenav/Mobilenav";
import Scrollnav from "../Scrollnav/Scrollnav";

export default function Labs_main() {
  return (
    <div className="hospital-section">
      <Header />
      {/* <Mobilenav /> */}
      <Labsheader />
      <Scrollnav />
      <Labcards />
      <Labcards />
      <Labcards />
      <Aboutsection/>
      <Footer />
    </div>
  );
}
