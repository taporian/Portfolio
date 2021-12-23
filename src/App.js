
import './App.css'

import About from './pages/About';
import Header from './pages/Header';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './fonts/mdi/css/materialdesignicons.css'
import ScrollToTop from './components/ScrollToTop';
import Portfolio from './pages/Portfolio';



function App() {
  return (
    <div className="overflow-wrap">
            
             <Header />       
             <About/>
             <Portfolio/>
             <ScrollToTop/>
    
           
    </div>
  );
}

export default App;
