import "./App.css";
import Bookapp from "./Components/Bookapp/Bookapp";
import Consulting from "./Components/Consulting/Consulting";
import Doclocation from "./Components/Doclocation/Doclocation";
import Doctor_main from "./Components/Doctor_main/Doctor_main";
import Fivestardoc from "./Components/Fivestardoc/Fivestardoc";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Index_main from "./Components/Index_main";
import Landing from "./Components/Landing/Landing";
import Lookmore from "./Components/Lookmore/Lookmore";
import Mobilenav from "./Components/Mobilenav/Mobilenav";
import Oladoc from "./Components/Oladoc/Oladoc";
import Oladocapp from "./Components/Oladocapp/Oladocapp";
import Oladocnews from "./Components/Oladocnews/Oladocnews";
import Platinumdoc from "./Components/Platinumdoc/Platinumdoc";
import Userreview from "./Components/Userreview/Userreview";

// import{
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
//   BrowserRouter,
// } from "react-router-dom";
function App() {
  return (
    <div className="App">
{/* <BrowserRouter>
      <Mobilenav />
      <Header />
      <Routes>
        <Route exact path="/" element={<Index_main.jsx/>}/>
        <Route exact path="/Doctor_main" element={<Doctor_main.jsx/>}/>
      </Routes>
<Footer/>
</BrowserRouter> */}
      <Doctor_main/>
      
    </div>
  );
}

export default App;
