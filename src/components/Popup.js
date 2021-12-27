import React from 'react'
import '../style/Popup.css'

export default function Popup(props) {
    return (props.trigger)  ? (    
        <div  >
            <div  className="popup">
                <div className="popup-inner"  >
                    <button  className="button-pop close-btn" onClick={()=> props.setTrigger(false)}>X</button>
                    {props.children}
                    
                </div>
            </div>
        </div>
    ) : ""; 
}



