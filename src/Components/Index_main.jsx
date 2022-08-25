import React from 'react'
import Bookapp from './Bookapp/Bookapp';
import Consulting from './Consulting/Consulting';
import Doclocation from './Doclocation/Doclocation';
import Fivestardoc from './Fivestardoc/Fivestardoc';

import Landing from './Landing/Landing';
import Lookmore from './Lookmore/Lookmore';
import Oladoc from './Oladoc/Oladoc';
import Oladocapp from './Oladocapp/Oladocapp';
import Oladocnews from './Oladocnews/Oladocnews';
import Platinumdoc from './Platinumdoc/Platinumdoc';
import Userreview from './Userreview/Userreview';

function Homepage() {
  return (
    <div>
     <Landing/>
    <Consulting/>
    <Oladoc/>
    <Platinumdoc/>
    <Lookmore/>
    <Bookapp/>
    <Fivestardoc/>
    <Userreview/>
    <Oladocapp/>
    <Oladocnews/>
    <Doclocation/>
    </div>
  )
}

export default Homepage
