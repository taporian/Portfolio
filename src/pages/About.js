import React from 'react'
import chris from '../img/me.png'
import { useInView } from 'react-intersection-observer'
import SliderFront from '../components/SliderFront';
import SliderBack from '../components/SliderBack';


export default function About({handleAbout}) {
  const { ref, inView,  } = useInView({

    threshold: 0,
  });
  handleAbout(inView);
    return (
    
 
        <section  ref={ref}   id="about">
   
        <div className="container flex">
          <div className="header waypoint" data-animation="slide-in-left">
            ABOUT
          </div>
          <div
            className="header-bar waypoint"
            animation="slide-in-left"
            data-delay=".5s"
          ></div>

          <div className="flex row label-wrap">
            <div className="flex row-gt-sm">
              <div className="flex bullet-wrap ">
                <div className="hex-wrap waypoint" data-animation="flip-in-x">
                  <div className="hexagon">
                    <i className="mdi mdi-speedometer"></i>
                  </div>
                </div>
                <div className="waypoint" data-animation="fade-in">
                  <div className="label bold">Fast</div>
                  <div className="text">
                    Fast load times and lag-free interaction, my highest
                    priority.
                  </div>
                </div>
              </div>

              <div className="flex bullet-wrap ">
                <div
                  className="hex-wrap waypoint"
                  data-animation="flip-in-x"
                  data-delay=".2s"
                >
                  <div className="hexagon">
                    <i className="mdi mdi-cellphone-link"></i>
                  </div>
                </div>
                <div className="waypoint" data-animation="fade-in" data-delay=".2s">
                  <div className="label bold">Responsive</div>
                  <div className="text">My layouts will work on any device, big or small.</div>
                </div>
              </div>
            </div>
            <div className="flex row-gt-sm">
              <div className="flex bullet-wrap ">
                <div
                  className="hex-wrap waypoint"
                  data-animation="flip-in-x"
                  data-delay=".4s"
                >
                  <div className="hexagon">
                    <i className="mdi mdi-lightbulb-outline"></i>
                  </div>
                </div>
                <div className="waypoint" data-animation="fade-in" data-delay=".4s">
                  <div className="label bold">Intuitive</div>
                  <div className="text">Strong preference for-easy-to use interfaces</div>
                </div>
              </div>

              <div className="flex bullet-wrap ">
                <div
                  className="hex-wrap waypoint"
                  data-animation="flip-in-x"
                  data-delay=".6s"
                >
                  <div className="hexagon">
                    <i className="mdi mdi-rocket"></i>
                  </div>
                </div>
                <div className="waypoint" data-animation="fade-in" data-delay=".6s">
                  <div className="label bold">Dynamic</div>
                  <div className="text">
                    Websites don't have to be static, I love making pages come
                    to life.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="skills-wrapper flex row-gt-sm">
            <div
              className="flex flex-50-gt-sm waypoint"
              data-animation="slide-in-left"
            >
             <center> <img src={chris} alt='me' className="me" /> </center>
            
              <div class="label bold">BIO</div>
              <div className="text">
                I'm a full-stack Developer 
                in Beirut, Lebanon.
                <br />
                I'm very passionate and dedicated to my work and always open to learning new technologies and frameworks. 
                This is my personal website, where I keep track of 
                my projects.
                <br />
                {/* <span className="page-link highlight" 
                  >Let's make something special.</span
                > */}
              </div>
            </div>
           
{/* ////////////// */}

            <div class="flex flex-50-gt-sm waypoint">
            <div class="label bold">
              Front-end
              </div>
            <SliderFront/>
            <div class="label bold">
              Back-end
              </div>
            <SliderBack/>
      </div>
    {/* //////////////     */}
   
          </div>
        
        </div>
   
      </section>
     


    )
   
}
