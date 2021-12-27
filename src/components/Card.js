import React,{useState} from 'react'
import '../style/card.css'
import wordpress from '../img/Projects/word-press.png';
import syker from '../img/Projects/syker.png';
import lms from '../img/Projects/LMS.png'
import siverr from '../img/Projects/Siverr.png'
import Popup from './Popup';
import SliderLMS from './SliderLMS';
import ReactPlayer from 'react-player/youtube'
import PopupVideo from './PopupVideo';


export default function Card({isAllFilter,isNode,isNative,isWordpress,isLaravel}) {

    const [buttonPop,SetButtonPop] = useState(false);
    const [buttonPopSiverr,SetButtonPopSiverr] = useState(false);
    return (
        <>
  {isAllFilter && 
        <div className="wrapper">
         
    <div className="card"><img className="img_card" alt="Syker" src={syker} />
        <div className="info">
            <h1 className="h1_card">Syker</h1>
            <p className="p_card">Syker is a place to buy affordable high quality trendy fashion clothing lineup, sold in Lebanon . Built with MERN Stack.</p><button className="button_card"  onClick={() =>  window.location.href='https://syker-codi.herokuapp.com'}>Read More</button>
        </div>
    </div>
    <div className="card"><img className="img_card" alt="node" src="https://images.unsplash.com/photo-1425342605259-25d80e320565?auto=format&amp;fit=crop&amp;w=750&amp;q=80&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" />
        <div className="info">
            <h1 className="h1_card">Node</h1>
            <p className="p_card">Lorem Ipsum is simply dummy text from the printing and typeseting industry</p><button className="button_card">Read More</button>
        </div>
    </div>
    <div className="card"><img className="img_card" alt="LMS" src={lms} />
        <div className="info">
            <h1 className="h1_card">LMS</h1>
            <p className="p_card">This platform provides teachers to add classes and sections for their students</p><button onClick={()=>{SetButtonPop(true)}} className="button_card">Read More</button>
            
        </div>
        
    </div>
    <div className="card"><img className="img_card" alt="Siverr" src={siverr} />
        <div className="info">
            <h1 className="h1_card">Siverr</h1>
            <p className="p_card">Siverr is a freelance marketplace. You create a client or sellers account and create a listing for your services or vice versa.You can additionally create your own category and subcategory.Siverr is built with React/Laravel/Pusher/MYSQL</p><button onClick={()=>{SetButtonPopSiverr(true)}} className="button_card">Read More</button>
        </div>
        
    </div>


    <div className="card"><img className="img_card" alt="node" src="https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?auto=format&amp;fit=crop&amp;w=311&amp;q=80&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" />
        <div className="info">
            <h1 className="h1_card">Native</h1>
            <p className="p_card">Lorem Ipsum is simply dummy text from the printing and typeseting industry</p><button className="button_card">Read More</button>
        </div>
        
    </div>
    <div className="card"><img className="img_card" alt="Sarelle-jewelry" src={wordpress} />
        <div className="info">
            <h1 className="h1_card">Sarelle Jewelry</h1>
            <p className="p_card">Sarelle jewelry is a platform to buy custom Lebanese Handmade gold in Sweden </p><button className="button_card" onClick={() =>  window.location.href='http://sarelle-jewelry.infinityfreeapp.com/?i=1#1634029604611-0c3d59e1-b80c'}>Read More</button>
        </div>
        
    </div>
    
    
</div>
  }
    {isNode && 
        <div className="wrapper">
         
         <div className="card"><img className="img_card" alt="Syker" src={syker} />
        <div className="info">
            <h1 className="h1_card">Syker</h1>
            <p className="p_card">Syker is a place to buy affordable high quality trendy fashion clothing lineup, sold in Lebanon . Built with MERN Stack.</p><button className="button_card"  onClick={() =>  window.location.href='https://syker-codi.herokuapp.com'}>Read More</button>
        </div>
    </div>
    <div className="card"><img className="img_card" alt="node" src="https://images.unsplash.com/photo-1425342605259-25d80e320565?auto=format&amp;fit=crop&amp;w=750&amp;q=80&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" />
        <div className="info">
            <h1 className="h1_card">Node</h1>
            <p className="p_card">Lorem Ipsum is simply dummy text from the printing and typeseting industry</p><button className="button_card">Read More</button>
        </div>
    </div>    
</div>
  }
    {isLaravel && 
        <div className="wrapper">
         
    <div className="card"><img className="img_card" alt="LMS" src={lms} />
        <div className="info">
            <h1 className="h1_card">LMS</h1>
            <p className="p_card">This platform provides teachers to add classes and sections for their students</p><button className="button_card">Read More</button>
            
        </div>
        
    </div>
    <div className="card"><img className="img_card" alt="Siverr" src={siverr} />
        <div className="info">
            <h1 className="h1_card">Siverr</h1>
            <p className="p_card">Siverr is a freelance marketplace. You create a client or sellers account and create a listing for your services or vice versa.You can additionally create your own category and subcategory.Siverr is built with React/Laravel/Pusher/MYSQL</p><button onClick={()=>{SetButtonPopSiverr(true)}} className="button_card">Read More</button>
        </div>
        
    </div>
    
</div>
  }
    {isNative && 
        <div className="wrapper">
         
   
    <div className="card"><img className="img_card" alt="node" src="https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?auto=format&amp;fit=crop&amp;w=311&amp;q=80&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" />
        <div className="info">
            <h1 className="h1_card">Native</h1>
            <p className="p_card">Lorem Ipsum is simply dummy text from the printing and typeseting industry</p><button className="button_card">Read More</button>
        </div>  
        </div> 
</div>
  }
   {isWordpress && 
        <div className="wrapper">
         
   
    <div className="card"><img className="img_card" alt="Sarelle-jewelry" src={wordpress} />
        <div className="info">
            <h1 className="h1_card">Sarelle Jewelry</h1>
            <p className="p_card">Sarelle jewelry is a platform to buy custom Lebanese Handmade gold in Sweden </p><button  onClick={() =>  window.location.href='http://sarelle-jewelry.infinityfreeapp.com/?i=1#1634029604611-0c3d59e1-b80c'} className="button_card">Read More</button>
        </div>  
        </div> 
</div>
  }

<Popup  trigger={buttonPop} setTrigger={SetButtonPop}  >
           
          <SliderLMS/>
            </Popup> 
            
            <PopupVideo  trigger={buttonPopSiverr} setTrigger={SetButtonPopSiverr}  >
           
            <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=EH0g8y879mA'
          width='100%'
          height='100%'
          controls={true}
        />
      </div>
             </PopupVideo> 
  
  </>
    )
}
