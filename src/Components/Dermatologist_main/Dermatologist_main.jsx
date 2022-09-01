import React from 'react'
import Doctorscard from '../Doctorscard/Doctorscard'

import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Labcards from '../Labcards/Labcards'
import Labsheader from '../Labsheader/Labsheader'
import Mobilenav from '../Mobilenav/Mobilenav'
import Scrollnav from '../Scrollnav/Scrollnav'

export default function Dermatologist_main() {
  return (
    <div>
      <Mobilenav/>
      <Header/>
      <Labsheader/>
      <Scrollnav/>
      <Doctorscard/>
    
      <Labcards/>
      <Doctorscard/>
      <Footer/>
    </div>
  )
}
