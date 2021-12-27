import React,{useEffect,useState} from 'react'
import useWindowDimensions from '../hooks/useWindowDimensions';
import { scrollToSection } from './ScrollerToSection';
export default function Navbar({isAbout,inHome,isContact,isPortfolio}) {

  
    const {width,height}= useWindowDimensions();
    const [scrolled,setScrolled]=useState(false);
    const [visible,setVisible]=useState(false);
  const handleScroll=() => {
      const offset=window.scrollY;
      if(offset > height ){
        setScrolled(true);
      }
      else{
        setScrolled(false);
      }
    } 
 
  
    useEffect(() => {
      window.addEventListener('scroll',handleScroll)
   
      return ()=>{
          window.removeEventListener('scroll',handleScroll)
        
        }
    })

    useEffect(() => {
     if(visible && width <600){
      setVisible(true);
     }
     if(width > 600)
     {
      setVisible(false);
     }

    },[visible,width])

  let navbarClasses=['nav'];
    if(scrolled){
      navbarClasses.push('scrolled');
    }
         
    return (
            <nav className={`flex ${navbarClasses.join(" ")}`}>
        {console.log('width',width)}
         
            <div className="link-wrap">
              <div onClick={()=>{scrollToSection("home")}} className={inHome ? "underline-navbar": "nav-submenu" } >home</div>
              <div onClick={()=>{scrollToSection("about")}} className={!inHome && isAbout ?"underline-navbar": "page-link" } >about</div>
              <div onClick={()=>{scrollToSection("portfolio")}} className={!inHome && !isAbout && isPortfolio ?"underline-navbar": "page-link" } >portfolio</div>
              <div onClick={()=>{scrollToSection("contact")}} className={!inHome && !isAbout && !isPortfolio && isContact ? "underline-navbar" :"page-link"  } >contact</div>
            </div>
         
        
          
            <i onClick={()=>setVisible( prevState =>!prevState )} style={visible ?{'color':'white','transition':'0.3s ease-out 0s'} : {'color':'#e31b6d','transition':'0.3s ease-out 0s'}} className={visible ?  "mdi mdi-menu":"mdi mdi-menu"}></i>
         {visible && 
          <>
          <div className="link-wrap2">
          <div onClick={()=>{scrollToSection("home")}} className={inHome ? "underline-navbar2": "page-link2" } >home</div>
              <div onClick={()=>{scrollToSection("about")}} className={!inHome && isAbout ?"underline-navbar2": "page-link2" } >about</div>
              <div onClick={()=>{scrollToSection("portfolio")}} className={!inHome && !isAbout && isPortfolio ?"underline-navbar2": "page-link2" } >portfolio</div>
              <div onClick={()=>{scrollToSection("contact")}} className={!inHome && !isAbout && !isPortfolio && isContact ? "underline-navbar2" :"page-link2"  } >contact</div>
             </div>
             </>
            }
          </nav>
        
   
       
    )
}
