import React from "react";
import Home from "./Home";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import About from "./About";
import Service from "./Service";
import Contacts from "./Contacts";
import { Routes,Route } from "react-router-dom";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";
const App =()=>{
  return(
<>
<Navbar/>
<Routes>
 
           <Route exact path="/" element={<Home />}></Route>
          <Route path="/contacts" element={<Contacts />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/service" element={<Service/>}></Route>
        </Routes>

<Footer/>
</>
  )

}
export default App;