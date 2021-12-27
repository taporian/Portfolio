
import React,{useState} from 'react'
import { useInView } from 'react-intersection-observer';

import Card from '../components/Card'



export default function Portfolio({handlePortfolio}) {

  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });
  handlePortfolio(inView);

  const [isAllFilter, setisAllFilter] = useState(true);
  const [isNode, setIsNode] = useState(false);
  const [isLaravel, setIsLaravel] = useState(false);
  const [isNative, setIsNative] = useState(false);
  const [isWordpress, setIsWordpress] = useState(false);

  const ToggleClass = (e) => {

    if(e.currentTarget.id ==='filter-all'){
      setisAllFilter(true);
      setIsLaravel(false);
      setIsNode(false);
      setIsNative(false);
      setIsWordpress(false)
    }
  else  if (e.currentTarget.id  ==='filter-rail') {
    setisAllFilter(false);
    setIsLaravel(false);
    setIsNode(false);
    setIsNative(false);
    setIsWordpress(false)
    }
    else if (e.currentTarget.id  ==='filter-laravel') {
 
      setisAllFilter(false);
      setIsLaravel(true);
      setIsNode(false);
      setIsNative(false);
      setIsWordpress(false)
    }
    else if (e.currentTarget.id  ==='filter-node') {
 
      setisAllFilter(false);
      setIsLaravel(false);
      setIsNode(true);
      setIsNative(false);
      setIsWordpress(false)
    }
    else if (e.currentTarget.id  ==='filter-native') {
 
      setisAllFilter(false);
      setIsLaravel(false);
      setIsNode(false);
      setIsNative(true);
      setIsWordpress(false)
    }
    else if (e.currentTarget.id  ==='filter-wordpress') {
 
      setisAllFilter(false);
      setIsLaravel(false);
      setIsNode(false);
      setIsNative(false);
      setIsWordpress(true) 
  }
  else{
    setisAllFilter(false);
    setIsLaravel(false);
    setIsNode(false);
    setIsNative(false);
    setIsWordpress(false)
  }
}




  


    return (
  <>
  
        <section className="flex" ref={ref}  id="portfolio">
        
        <div  className="header waypoint" data-animation="slide-in-right">
          PROJECTS
        </div>
        {console.log('ref',ref)}
        <div
          className="header-bar waypoint"
          data-animation="slide-in-right"
          data-delay=".3s"
        ></div>
        <div className="flex container w-60">
         <div className="flex row">
            <div onClick={ToggleClass} id="filter-all" className={isAllFilter ? "filter-toggle":"filter"} data-filter="all">ALL</div>
            <div data-filter=".rails" onClick={ToggleClass}  id="filter-node" className={isNode ? "filter-toggle":"filter"} >REACT-JS/NODE</div>
            <div onClick={ToggleClass}  id="filter-laravel"  className={isLaravel ? "filter-toggle":"filter"}  data-filter=".react">REACT-JS/LARAVEL</div>
            <div onClick={ToggleClass}  id="filter-native" className={isNative ? "filter-toggle":"filter"}  data-filter=".js">REACT-NATIVE</div>
            <div onClick={ToggleClass}  id="filter-wordpress" className={isWordpress ? "filter-toggle":"filter"}  data-filter=".js">WORDPRESS</div>   
                      
          </div>
          <br/>
<Card isAllFilter={isAllFilter} isNode={isNode}  isLaravel={isLaravel} isNative={isNative} isWordpress={isWordpress} />

</div>

      </section>
    </>
  
     
    )
}
