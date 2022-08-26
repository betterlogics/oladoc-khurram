import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Hospital from "../Hospital/Hospital";
import Mobilenav from "../Mobilenav/Mobilenav";
import Searchform from "../Searchform/Searchform";

export default function Hospital_main() {
  return (
    <div>
      <Mobilenav />
      <Header />
      <Searchform />
      <Hospital />
      <Footer />
    </div>
  );
}
