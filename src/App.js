
import './App.css'
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import About from './pages/About';
import Header from './pages/Header';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './fonts/mdi/css/materialdesignicons.css'
import ScrollToTop from './components/ScrollToTop';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import { useState } from 'react';




function App() {
  const [isContact, SetisContact] = useState(false)
  const [isAbout, SetisAbout] = useState(false)
  const [isPortfolio, SetisPortfolio] = useState(false)
  const handleContact = (value)=>{
    SetisContact(value)
  }
  const handleAbout = (value)=>{
    SetisAbout(value)
  }
   const handlePortfolio = (value)=>{
    SetisPortfolio(value)
  }
  
  return (
    <div className="overflow-wrap">
          
             <Header isPortfolio={isPortfolio} isAbout={isAbout} isContact={isContact} />       
             <About  handleAbout={handleAbout} />
             <Portfolio handlePortfolio={handlePortfolio}/>
             <Contact handleContact={handleContact}/>
             <ScrollToTop/>
             <ToastContainer />
         
        
    
           
    </div>
  );
}

export default App;
