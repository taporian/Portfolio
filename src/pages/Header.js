import React from 'react'
import Navbar from '../components/Navbar'
import { scrollToSection } from '../components/ScrollerToSection'
export default function Header() {
  

    return (

     
        <section id="home" className="flex height-fix" >
           
        <div id="pt" className="canvas"></div>    
        <div className="flex">
          <div className="text">
            Hello, I'm <span className="highlight">Christaphor Harmandarian</span>.
            <br />
            I'm a full-stack web developer.
          </div>

          <div className="button page-link" onClick={()=>{
              scrollToSection("about")}} >
            View my work <i onClick={()=>{
              scrollToSection("about");
            }} className="mdi mdi-arrow-right"></i>
          </div>

     
        
        </div>
        <Navbar/>
      </section>
     
     
    )
}
