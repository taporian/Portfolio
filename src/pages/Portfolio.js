import React from 'react'
// import '../style/protfolio.css';
import Card from '../components/Card'


export default function Portfolio() {
    return (
        <section className="flex" id="portfolio">
        <div className="header waypoint" data-animation="slide-in-right">
          PROJECTS
        </div>
        <div
          className="header-bar waypoint"
          data-animation="slide-in-right"
          data-delay=".3s"
        ></div>
        <div className="flex container w-60">
         <div className="flex row">
            <div className="filter" data-filter="all">ALL</div>
            <div className="filter" data-filter=".rails">RUBY/RAILS</div>
            <div className="filter" data-filter=".react">REACT-JS</div>
            <div className="filter" data-filter=".js">JAVASCRIPT</div>         
          </div>
          <br/>
<Card/>

          {/* <div className="d-flex flex-wrap justify-content-between position-relative">
          <div className="card transition">
  <h2 className="transition h2_card">Awesome Headline</h2>
  <p className="p_card">Aenean lacinia bibendum nulla sed consectetur. Donec ullamcorper nulla non metus auctor fringilla.</p>
  <div className="cta-container transition"><a href="#" class="cta">Call to action</a></div>
  <div className="card_circle transition"></div>
</div>
<div className="card transition">
  <h2 className="transition h2_card">Awesome Headline</h2>
  <p className="p_card">Aenean lacinia bibendum nulla sed consectetur. Donec ullamcorper nulla non metus auctor fringilla.</p>
  <div className="cta-container transition"><a href="#" class="cta">Call to action</a></div>
  <div className="card_circle transition"></div>
</div>
<div className="card transition">
  <h2 className="transition h2_card">Awesome Headline</h2>
  <p className="p_card">Aenean lacinia bibendum nulla sed consectetur. Donec ullamcorper nulla non metus auctor fringilla.</p>
  <div className="cta-container transition"><a href="#" class="cta">Call to action</a></div>
  <div className="card_circle transition"></div>
</div>
<div className="card transition">
  <h2 className="transition h2_card">Awesome Headline</h2>
  <p className="p_card">Aenean lacinia bibendum nulla sed consectetur. Donec ullamcorper nulla non metus auctor fringilla.</p>
  <div className="cta-container transition"><a href="#" class="cta">Call to action</a></div>
  <div className="card_circle transition"></div>
</div>
</div> */}
</div>
      </section>
    )
}
