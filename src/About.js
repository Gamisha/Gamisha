import React from "react";
import web from "./images/web.jpg"

import Common from "./Common";

const About =()=>{
  return(
<>
<Common 
name='welcome to About Page' 
imgsrc={web}
  Visit='/contacts' 
  btnname='Contacts Now' />

</>
  )

}
export default About;