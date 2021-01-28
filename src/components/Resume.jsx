import React, { useEffect, useRef } from "react";
import Nav from './Nav'
import img from "../img/resumelogo.png";
import VanillaTilt from "vanilla-tilt";

function Tilt(props) {
    const { options, ...rest } = props;
    const tilt = useRef(null);
  
    useEffect(() => {
      VanillaTilt.init(tilt.current, options);
    }, [options]);
  
    return <div ref={tilt} {...rest} />;
  }
  





const Resume = () => {

    const options = {
        speed: 7000,
      scale: 1.5,
      max: 30, 
      gyroscope: false, 
 }

 //const projectName = [
   // {class:"float-right", img:pone, heading:"World Affair", description:"I design the user experience and then style the user interface myself for almost all of the projects I work on.I am flexible in medium and rigid in quality."},
    //{ direction:"reverse", class:"float-left", img:ptwo, heading:"Web Panda", description:" Have experience in React, Next and HTML5/CSS/JS along with several templating systems.I prefer to write my own components, and styles that go with it. I want to have absolute control over all the pixels." },
   // {class:"float-right",  img:pthree, heading:"MinmaxTT", description:"While I obsess over frontend, I also recognize that a lot of the functionality of an app is enabled by it's backend.I have worked with NodeJs,Exprss and MongoDB for backend, with databases, APIs, request handling, etc."},
   // { direction:"reverse", class:"float-left", img:pfour, heading:"General Programming", description:"Given my curious mindset, I have tested the waters of various fields: Databases, Scripting, Web Scraping, DS, Micro-services, CLI tools to name a few.The core of it all is the basic principle of identifying the problem and testing multiple focused approaches till I figure out the optimum solution."}
 //]


    return (
        <div>
            <Nav/>
            <div className="project-container">
              <div className="img-skill">
                <Tilt className="box" options={options} >
                  <h1 className="logo">Resume <span>{}</span> </h1>
                  <p className="logo-des">The 1 document that (apparently) matters</p>
                </Tilt> 
               </div>
            <div className="resume-botton">
              <div className="resume-link">
              <a href="https://doc-0o-cc-docs.googleusercontent.com/docs/securesc/8q6ctuhsjnra7otg3a9dg2p3dmma393l/mi6jjm5q917gnfj6baqdgm2pqho3q44n/1611797475000/07272075861372913766/07272075861372913766/18lQRjWqI6F4_-BhA2m3-ZnFGl_lofUlG?e=download&authuser=1&nonce=1jiuhvbt2etki&user=07272075861372913766&hash=kkfbugjkm9nish7i88ltl5hkjjmr1gvt"><i class="fas fa-download"></i>Download Resume</a>
              </div>
             
            </div>
          </div>
        </div>
    )
}

export default Resume;
