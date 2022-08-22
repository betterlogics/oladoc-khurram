import './App.css';
import Consulting from './Components/Consulting/Consulting';
import Header from './Components/Header/Header';
import Landing from './Components/Landing/Landing';
import Mobilenav from './Components/Mobilenav/Mobilenav';
import Oladoc from './Components/Oladoc/Oladoc';
import Platinumdoc from './Components/Platinumdoc/Platinumdoc';

function App() {
  return (
    <div className="App">
    <Mobilenav/>
    <Header/>
    <Landing/>
    <Consulting/>
    <Oladoc/>
    <Platinumdoc/>
    </div>
  );
}

export default App;
