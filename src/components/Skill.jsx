import React, { useEffect, useRef } from "react";
import Nav from './Nav'
import VanillaTilt from "vanilla-tilt";
import img from '../img/skilllogo.png';
import pone from '../img/p1.png';
import ptwo from '../img/p2.png';
import pthree from '../img/p3.png';
import pfour from '../img/p4.png';


function Tilt(props) {
    const { options, ...rest } = props;
    const tilt = useRef(null);
  
    useEffect(() => {
      VanillaTilt.init(tilt.current, options);
    }, [options]);
  
    return <div ref={tilt} {...rest} />;
  }
  
  function Skill() {
    const options = {
        speed: 7000,
      scale:2.2,
      max: 30,
      gyroscope: false,
      
 };

 const skillName = [
     {class:"float-right", img:pone, heading:"UX/UI", description:"I design the user experience and then style the user interface myself for almost all of the projects I work on.I am flexible in medium and rigid in quality."},
     { direction:"reverse", class:"float-left", img:ptwo, heading:"Frontend", description:" Have experience in React, Next and HTML5/CSS/JS along with several templating systems.I prefer to write my own components, and styles that go with it. I want to have absolute control over all the pixels." },
     {class:"float-right",  img:pthree, heading:"Backend", description:"While I obsess over frontend, I also recognize that a lot of the functionality of an app is enabled by it's backend.I have worked with NodeJs,Exprss and MongoDB for backend, with databases, APIs, request handling, etc."},
     { direction:"reverse", class:"float-left", img:pfour, heading:"General Programming", description:"Given my curious mindset, I have tested the waters of various fields: Databases, Scripting, Web Scraping, DS, Micro-services, CLI tools to name a few.The core of it all is the basic principle of identifying the problem and testing multiple focused approaches till I figure out the optimum solution."}
 ];

 const skillShow = () => {
        return skillName.map((data) => {
            console.log(data.img)
            return (
                <div className="skill" id={data.direction}>
                    <div className="skill-left">
                        <h1 className={data.class}>{data.heading}</h1>
                        <p className={data.class}>{data.description}</p>
                    </div>
                    <div className="skill-right">
                        <img src={data.img} className="img" />
                    </div>
                </div>
            )
        })
 }

   


    return (
        <div>
            <Nav/>
            <div className="skill-container">
                <div className="img-skill">
                <Tilt className="box" options={options} >
                   <h1 className="logo">Skills</h1>
                   <p className="logo-des">The tool for trade!</p>
                </Tilt> 
                </div>
                <div className="skill-outer">
                    {skillShow()}
                </div>

            </div>
        </div>
    )
    }
export default Skill;

