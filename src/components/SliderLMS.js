import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import lms2 from '../img/Projects/LMS2.png';
import lms3 from '../img/Projects/LMS3.png';
import lms4 from '../img/Projects/LMS4.png';
import '../style/slider.css'

const responsive = {
    200: { items: 1 },
    1500: { items: 2 },
    3000: { items: 3 },
};

const items = [
    <>
    <img src={lms2} id="lms" className="slider-img-lms" alt="lms2"/>
    </>,
    <>
    <img src={lms3} className="slider-img-lms" alt="lms3"/>

    </>,
      <>
      <img src={lms4}  className="slider-img-lms" alt="lms4"/>

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

export default function SliderLMS() {
    return (
        <div className='Lms'>
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

</div>
   
    )
}
