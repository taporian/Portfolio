import React,{useEffect} from 'react'
import useWindowDimensions from '../hooks/useWindowDimensions';
import { scrollToSection } from './ScrollerToSection';
export default function Navbar() {


    const {width,height}= useWindowDimensions();
    const [scrolled,setScrolled]=React.useState(false);
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
  let navbarClasses=['nav'];
    if(scrolled){
      navbarClasses.push('scrolled');
    }
         
    return (
            <nav className={`flex ${navbarClasses.join(" ")}`}>
            
            <div className="link-wrap">
              <div onClick={()=>{scrollToSection("home")}} className="active page-link" >home</div>
              <div onClick={()=>{scrollToSection("about")}} className="page-link" >about</div>
              <div onClick={()=>{scrollToSection("portfolio")}} className="page-link" >portfolio</div>
              <div className="page-link" >blog</div>
              <div className="page-link" >contact</div>
            </div>
            <i className="mdi mdi-menu"></i>
         
          </nav>
        
   
       
    )
}
