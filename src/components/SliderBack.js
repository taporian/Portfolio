import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import node from '../img/slider/Node.png';
import pusher from '../img/slider/Pusher.png';
import laravel from '../img/slider/Laravel.png';
import mysql from '../img/slider/MySQL.png';
import mongodb from '../img/slider/Mongodb.png';
import postman from '../img/slider/Postman.png';
import '../style/slider.css'

const responsive = {
    200: { items: 1 },
    300: { items: 2 },
    1300: { items: 3 },
};

const items = [
    <>
    <img src={node} className="slider-img" alt="node"/>
    <div className='label light'>
            Node.js
    </div>
    </>,
    <>
    <img src={laravel} className="slider-img" alt="laravel"/>
    <div className='label light'>
        Laravel
    </div>
    </>,
      <>
      <img src={pusher}  className="slider-img" alt="pusher"/>
      <div className='label light'>
          Pusher
      </div>
      </>,
      <>
      <img src={mongodb}  className="slider-img" alt="MongoDb"/>
      <div className='label light'>
          MongoDB
      </div>
      </>,
        <>
        <img src={mysql}  className="slider-img" alt="MySQL"/>
        <div className='label light'>
            MySQL
        </div>
        </>,   
          <>
          <img src={postman} className="slider-img" alt="postman"/>
          <div className='label light'>
          Postman
          </div>
          </>,  
    
   
        
    
   
];
const onInitialized = (e) => {
    console.debug(`Start position(activeIndex) on init: ${e.item}. Event:`, e);
};

const onSlideChange = (e) => {
    console.debug(`Item's position before a change: ${e.item}. Event:`, e);
};

const onSlideChanged = (e) => {
    console.debug(`Item's position after changes: ${e.item}. Event:`, e);
};

const onResized = (e) => {
    console.debug(`Item's position after resize: ${e.item}. Event:`, e);
};

export default function SliderBack() {
    return (
        <AliceCarousel
        mouseTracking
        keyboardNavigation
        items={items}
        responsive={responsive}
        onInitialized={onInitialized}
        onSlideChange={onSlideChange}
        onSlideChanged={onSlideChanged}
        onResized={onResized}
    />
    )
}
