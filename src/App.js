import "./App.css";
import Bookapp from "./Components/Bookapp/Bookapp";
import Consulting from "./Components/Consulting/Consulting";
import Doclocation from "./Components/Doclocation/Doclocation";
import Doctor_main from "./Components/Doctor_main/Doctor_main";
import Fivestardoc from "./Components/Fivestardoc/Fivestardoc";
// import Footer from "./Components/Footer/Footer";
// import Header from "./Components/Header/Header";
import Hospital_main from "./Components/Hospital_main/Hospital_main";
import Index_main from "./Components/Index_main";
import Labs_main from "./Components/Labs_main/Labs_main";
import Landing from "./Components/Landing/Landing";
import Lookmore from "./Components/Lookmore/Lookmore";
// import Mobilenav from "./Components/Mobilenav/Mobilenav";
import Oladoc from "./Components/Oladoc/Oladoc";
import Oladocapp from "./Components/Oladocapp/Oladocapp";
import Oladocnews from "./Components/Oladocnews/Oladocnews";
import Platinumdoc from "./Components/Platinumdoc/Platinumdoc";
import Userreview from "./Components/Userreview/Userreview";
import Blogs_main from "./Components/Blogs_main/Blogs_main";
import Dermatologist_main from "./Components/Dermatologist_main/Dermatologist_main";
import Doctorshospital_main from "./Components/Doctorshospital_main/Doctorshospital_main";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  BrowserRouter,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route exact path="/" element={<Index_main />} />
        <Route exact path="/Doctor_main" element={<Doctor_main />} />
        <Route exact path="/Hospital_main" element={<Hospital_main />} />
        <Route exact path="/Labs_main" element={<Labs_main />} />
        <Route exact path="/Blogs_main" element={<Blogs_main />} />
        <Route
          exact
          path="/Dermatologist_main"
          element={<Dermatologist_main />}
        />
        <Route exact path="/Doctorshospital_main" element={<Doctorshospital_main/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
