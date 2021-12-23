import React from 'react'
import chris from '../img/me.png'
export default function About() {
    return (
        <section id="about">
        <div className="container flex">
          <div className="header waypoint" data-animation="slide-in-left">
            ABOUT
          </div>
          <div
            className="header-bar waypoint"
            className-animation="slide-in-left"
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
             <center> <img src={chris} className="me" /> </center>
            
              <div class="label bold">Who's this guy?</div>
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

            <div class="flex flex-50-gt-sm waypoint">
                <div className="skill">
        <div class="skills-bar">
          <div class="bar">
            <div class="info">
              <span>HTML</span>
            </div>
            <div class="progress-line" ><span class="html"></span></div>
          
          </div>
          <div class="bar">
              <div class="info">
                <span>CSS</span>
              </div>
              <div class="progress-line"><span class="css"></span></div>
             
            </div>
          <div class="bar">
                <div class="info">
                  <span>REACT</span>
                </div>
                <div class="progress-line"><span class="bootstrap"></span></div>
                
              </div>
          <div class="bar">
                  <div class="info">
                    <span>LARAVEL</span>
                  </div>
                  <div class="progress-line">
                    <span class="javascript"></span>
                  </div>
                  
                </div>
                <div class="bar">
                    <div class="info">
                      <span>NODE.JS</span>
                    </div>
                    <div className="progress-line"><span className="c"></span></div>
                  </div>
        </div>
        </div>
      </div>
            {/* <div
              className="flex flex-50-gt-sm waypoint bars-wrap"
              data-animation="slide-in-right"
            >
              <div className="bar flex">
                <div className="bar fill" style={{width:"90%"}}>
                  <div className="tag bold flex">CSS</div>
                </div>
                <span>90%</span>
              </div>

              <div className="bar flex">
                <div className="bar fill" style={{width:"90%"}}>
                  <div className="tag bold flex">HTML</div>
                </div>
                <span>90%</span>
              </div>

              <div className="bar flex">
                <div className="bar fill"  style={{width:"80%"}}>
                  <div className="tag bold flex">React</div>
                </div>
                <span>80%</span>
              </div>

              <div className="bar flex">
                <div className="bar fill" style={{width:"80%"}}>
                  <div className="tag bold flex">JavaScript</div>
                </div>
                <span>80%</span>
              </div>

              <div className="bar flex">
                <div className="bar fill" style={{width:"50%"}}>
                  <div className="tag bold flex">Angular</div>
                </div>
                <span>50%</span>
              </div>

              <div className="bar flex">
                <div className="bar fill" style={{width:"65%"}}>
                  <div className="tag bold flex">Node.js</div>
                </div>
                <span>65%</span>
              </div>

              <div className="bar flex">
                <div className="bar fill" style={{width:"50%"}}>
                  <div className="tag bold flex">Ruby/Rails</div>
                </div>
                <span>65%</span>
              </div>

              <div className="bar flex">
                <div className="bar fill" style={{width:"50%"}}>
                  <div className="tag bold flex">UI Design</div>
                </div>
                <span>50%</span>
              </div>

              <div className="bar flex">
                <div className="bar fill" style={{width:"60%"}}>
                  <div className="tag bold flex">Photoshop</div>
                </div>
                <span>60%</span>
              </div>

              <div className="bar flex">
                <div className="bar fill" style={{width:"50%"}}>
                  <div className="tag bold flex">Sketch</div>
                </div>
                <span>50%</span>
              </div>
            </div> */}
          </div>
        </div>
      </section>

    )
}
