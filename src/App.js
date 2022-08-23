import './App.css';
import Bookapp from './Components/Bookapp/Bookapp';
import Consulting from './Components/Consulting/Consulting';
import Doclocation from './Components/Doclocation/Doclocation';
import Fivestardoc from './Components/Fivestardoc/Fivestardoc';
import Header from './Components/Header/Header';
import Landing from './Components/Landing/Landing';
import Lookmore from './Components/Lookmore/Lookmore';
import Mobilenav from './Components/Mobilenav/Mobilenav';
import Oladoc from './Components/Oladoc/Oladoc';
import Oladocapp from './Components/Oladocapp/Oladocapp';
import Platinumdoc from './Components/Platinumdoc/Platinumdoc';
import Userreview from './Components/Userreview/Userreview';

function App() {
  return (
    <div className="App">
    <Mobilenav/>
    <Header/>
    <Landing/>
    <Consulting/>
    <Oladoc/>
    <Platinumdoc/>
    <Lookmore/>
    <Bookapp/>
    <Fivestardoc/>
    <Userreview/>
    <Oladocapp/>
    <Doclocation/>
    </div>
  );
}

export default App;
