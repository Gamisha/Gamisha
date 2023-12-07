import React from "react";
import web2 from "./images/web2.jpg"
import { NavLink } from "react-router-dom";
import Common from "./Common";
const Home =()=>{
  return(

<>
<Common
name='Grow Your Buisness With' 
imgsrc={web2}
  Visit='/service' 
  btnname='Get Started'
/>

</>  
)

}
export default Home;