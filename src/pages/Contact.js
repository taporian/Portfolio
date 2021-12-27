import React,{ useState} from 'react'
import { useInView } from 'react-intersection-observer';
import { scrollToTop } from '../components/ScrollToTop';
import  emailjs from "emailjs-com";
import { toast } from 'react-toastify';
import '../style/toast.css'
export default function Contact({handleContact}) {
  const { ref, inView,  } = useInView({
    /* Optional options */
    threshold: 0,
  });
  handleContact(inView);
  const [email,Setemail] = useState('');
  const [message,Setmessage] = useState('');
  const [name,Setname] = useState('');
  
   
    var data = {
      user_name:name,
      user_email:email,
      message:message

    };
 

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.send('service_pyajiam', 'template_u8qeo2n', data,'user_0Fyxk2y1J5LxElHemwTeq')
        .then((result) => {
           
            Setmessage('');Setemail('');Setname('');
            toast.success('Your Email has been successfully sent')
        }, (error) => {
          toast.error('Something went wrong')
            console.log(error.text);
        });
    };


    return (
      <>
            <section ref={ref} id="contact">
        <svg
          preserveAspectRatio="none"
          viewBox="0 0 100 102"
          height="75"
          width="100%"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          className="svgcolor-light"
        >
          <path d="M0 0 L50 100 L100 0 Z" fill="#F5F5F5" stroke="white"></path>
        </svg>
        <div className="container flex" >
          <div className="header waypoint" style={{'color':'white'}} data-animation="slide-in-left">
            CONTACT
          </div>
          <div
          
            className="header-bar waypoint"
            style={{'backgroundColor':'white'}}
            data-animation="slide-in-right"
            data-delay=".25s"
          ></div>
          <div
          
            className="highlight waypoint"
            data-animation="slide-in-right"
            data-delay=".5s"
          >
            Have a question or want to work together?
          </div>
          <form
            onSubmit={sendEmail}
            className="waypoint contact-form"
            data-animation="pop-in"
            data-delay=".5s"
            id="contact-form"
          >
            <input placeholder="Name"  
             value={name}
             onChange={(e)=>{Setname(e.target.value)}} 
             type="text" name="user_name" required />
            <input
               value={email}
              placeholder="Enter email"
              type="email"
              name="user_email"
              onChange={(e)=>{Setemail(e.target.value)}}
              required
            />
            <textarea
              value={message}
             onChange={(e)=>{Setmessage(e.target.value)}}
              placeholder="Your Message"
              type="text"
              name="message"
            ></textarea>
            
            <input className="button" type="submit" id="submit" value="SUBMIT" />
          </form>
       
        </div>
      
      </section>

      <footer>
        <i onClick={()=>{scrollToTop()}} className="mdi mdi-chevron-double-up" ></i>

        <div className="icon-wrap icon-contact" >
          <a className='a-contact' href="https://www.linkedin.com/in/christapor-harmandarian-665903149/">
            <div className="flex icon"  id="icon-2">
              <i className="mdi mdi-linkedin"></i>
            </div>
          </a>
          <a className='a-contact' href="https://www.facebook.com/christ.har/">
            <div className="flex icon" id="icon-3">
              <i className="mdi mdi-facebook"></i>
            </div>
          </a>
          <a className='a-contact' href="https://www.instagram.com/taporian/">
            <div className="flex icon" id="icon-4">
              <i className="mdi mdi-instagram"></i>
            </div>
          </a>
          <a className='a-contact' href="https://github.com/taporian">
            <div className="flex icon" id="icon-5">
              <i className="mdi mdi-github-box"></i>
            </div>
          </a>
        </div>
        <div className="info-box">
          <div className="footnote">
            Christaphor Harmandariian <span className="highlight">&copy;2021</span>
          </div>
        </div>
      </footer>
    
     </>
    )
}
