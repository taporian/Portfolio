import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import jest from '../img/slider/jest.png';
import redux from '../img/slider/redux.png';
import react from '../img/slider/React.png';
import html from '../img/slider/HTML5.png';
import styled from '../img/slider/Styled_components.png';
import js from '../img/slider/JS.png';
import css from '../img/slider/CSS.png';
import git from '../img/slider/Git.png';
import hookForm from '../img/slider/React_hook_form.png';
import '../style/slider.css'

const responsive = {
    200: { items: 1 },
    300: { items: 2 },
    1300: { items: 3 },
};

const items = [
    <>
    <img src={react} className="slider-img" alt="jest"/>
    <div className='label light'>
        React
    </div>
    </>,
    <>
    <img src={redux} className="slider-img" alt="redux"/>
    <div className='label light'>
        Redux
    </div>
    </>,
      <>
      <img src={js}  className="slider-img" alt="jest"/>
      <div className='label light'>
          JavaScript
      </div>
      </>,
      <>
      <img src={html}  className="slider-img" alt="jest"/>
      <div className='label light'>
          HTML5
      </div>
      </>,
        <>
        <img src={css}  className="slider-img" alt="jest"/>
        <div className='label light'>
            CSS
        </div>
        </>,   
          <>
          <img src={jest} className="slider-img" alt="jest"/>
          <div className='label light'>
              jest
          </div>
          </>,  
    <>
    <img src={styled} className="slider-img" alt="jest"/>
    <div className='label light'>
        Styled components
    </div>
    </>,
       <>
       <img src={git} className="slider-img" alt="jest"/>
       <div className='label light'>
           Git
       </div>
       </>,
        <>
        <img src={hookForm} className="slider-img" alt="jest"/>
        <div className='label light'>
            Hook Form
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

export default function SliderFront() {
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
