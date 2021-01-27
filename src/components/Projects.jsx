import React, { useEffect, useRef } from "react";
import Nav from './Nav'
import img from "../img/projectlogo.png";
import VanillaTilt from "vanilla-tilt";

function Tilt(props) {
    const { options, ...rest } = props;
    const tilt = useRef(null);
  
    useEffect(() => {
      VanillaTilt.init(tilt.current, options);
    }, [options]);
  
    return <div ref={tilt} {...rest} />;
  }
  





const Projects = () => {

    const options = {
        speed: 7000,
      scale: 1.2,
      max: 30,  
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
            <div className="project">
                <div className="project-img">
                <Tilt className="box" options={options} >
                <h1 className="logo">Projects</h1>
                   <p className="logo-des">The work stuff!</p>
                </Tilt> 
                </div>
                <di>
                    hello 
                </di>
                

            </div>
        </div>
    )
}

export default Projects;




