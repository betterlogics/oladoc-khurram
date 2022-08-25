import React from "react";
import Aboutdoc from "../Aboutdoc/Aboutdoc";
import Citylisting from "../Citylisting/Citylisting";
import Downloadapp from "../Downloadapp/Downloadapp";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Mobilenav from "../Mobilenav/Mobilenav";
import Odcitylisting from "../Odcitylisting/Odcitylisting";
import Searchform from "../Searchform/Searchform";

export default function Doctor() {
  return (
    <div>
      <Mobilenav />
      <Header />
      <Searchform />
      <Citylisting/>
      <Odcitylisting/>
      <Aboutdoc/>
      <Downloadapp/>
      <Footer />
    </div>
  );
}
