import { scroller } from "react-scroll";

 
export const scrollToSection = (className) => {
   scroller.scrollTo(className, {   //enter CSS class here
     duration: 0,
     delay: 0,
     smooth: "easeInOutQuart",
   });
 };

