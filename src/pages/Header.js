import React from 'react'
import Navbar from '../components/Navbar'
import { scrollToSection } from '../components/ScrollerToSection'
import { useInView } from 'react-intersection-observer';
import resume from '../assets/Christaphor-Harmandarian-resume.pdf';
export default function Header({isContact,isAbout,isPortfolio}) {
  
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });
 
    return (

     
        <section id="home" ref={ref} className="flex height-fix" >
        
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
           <a className="button page-link" style={{'padding':'0.9rem'}} rel="noreferrer" target="_blank" href={resume}>
              Download my resume 
          </a>

     
  
        </div>
        <Navbar isAbout={isAbout} isContact={isContact} inHome={inView} isPortfolio={isPortfolio}/>
      </section>
     
     
    )
}
