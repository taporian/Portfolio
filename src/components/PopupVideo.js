import React from 'react'
import '../style/Popup.css'

export default function PopupVideo(props) {
    return (props.trigger)  ? (    
        <div onClick={()=> props.setTrigger(false)}  >
            <div  className="popup">
                <div className="popup-inner"  >
                    <button  className="button-pop close-btn" onClick={()=> props.setTrigger(false)}>X</button>
                    {props.children}
                    
                </div>
            </div>
        </div>
    ) : ""; 
}



