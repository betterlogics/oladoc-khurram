import React from 'react'
import Doctorsbyspeciality from '../Doctorsbyspeciality/Doctorsbyspeciality'
import Experiencedoc from '../Experiencedoc/Experiencedoc'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Hospitalcard from '../Hospitalcard/Hospitalcard'
import Hospitalnav from '../Hospitalnav/Hospitalnav'
import Mobilenav from '../Mobilenav/Mobilenav'

export default function Doctorshospital_main() {
  return (
    <div className='bg-light'>
        <Header/>
        <Mobilenav/>
      <Hospitalnav/>
      <Hospitalcard/>
      <Doctorsbyspeciality/>
      <Experiencedoc/>
      <Footer/>
    </div>
  )
}
