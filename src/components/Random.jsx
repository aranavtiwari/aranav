import React, { useEffect, useRef } from "react";
import Nav from './Nav'
import imgone from '../img/snakelogo.svg';
import imgtwo from '../img/tttlogo.svg';
import imgthree from '../img/templogo.svg';


import VanillaTilt from "vanilla-tilt";

function Tilt(props) {
    const { options, ...rest } = props;
    const tilt = useRef(null);
  
    useEffect(() => {
      VanillaTilt.init(tilt.current, options);
    }, [options]);
  
    return <div ref={tilt} {...rest} />;
  }
  


const Random = () => {

    const options = {
        speed: 7000,
      scale: 2.4,
      max: 30,
      gyroscope: false, 

 }

 const projectName = [
    { weblink:"https://aranavtiwari.github.io/WA/", gitlink:"https://github.com/aranavtiwari/Multiplayer-Snake-game", link:"linkweb", iconweb:"fas fa-globe", nameweb:"Web App" ,icongit:"fab fa-github",gitname:"Github Org" , class:"float-right", img:imgone, heading:"MPSG", description:"MPSG is real time multiplayer snake game where two user can play against each other . I developed the frontend with HTML5/CSS and backend with Socket.io"},
    {iconweb:"fas fa-globe", nameweb:"Web App", weblink:"https://github.com/aranavtiwari/AI-tictactoe" ,icongit:"fab fa-github", gitname:"Github Org", gitlink:"https://github.com/aranavtiwari/ast-website",link:"linkweb", rolecss:"role",   role:"Minimax",  direction:"reverse", class:"float-left", img:imgtwo, heading:"AITT", description:"Created AI with Minimax Algorithm in Game Theory where a user can play against a AI.It can be implemented on various game like chess, Tic Tac Toe. I choose Tictactoe " },
    {iconweb:"fas fa-globe", nameweb:"Web App", weblink:"#" ,icongit:"fab fa-github", gitname:"Github Org", gitlink:"https://github.com/aranavtiwari?tab=repositories",link:"linkweb",   class:"float-right ",  img:imgthree, heading:"Templates", description:"Create various landing page templates, which can be used by various organization. All templated is pure HTML5 and SASS.The focus is on speed and minimalism"},
   
 ];


 const projectShow = () => {
  return projectName.map((data) => {
      console.log(data.img)
      return (
          <div className="project" id={data.direction}>
              <div className="project-left">
                 
                 <h1 className={data.class}>{data.heading}</h1>
                 <h2 className={data.rolecss}>{data.role}</h2>
                  
                  <p className={data.class}>{data.description}</p>

                  <div className="link">
                  
                  <a href={data.gitlink} className={data.link}><i class={data.icongit}/>{data.gitname}</a>
                  </div>
              </div>
              <div className="project-right">
                  <img src={data.img} className="img" />
              </div>
          </div>
      )
  })
}

return (
  <div>
      <Nav/>
      <div className="project-container">
          <div className="img-skill">
          <Tilt className="box" options={options} >
             <h1 className="logo">Random<span>{}</span> </h1>
             <p className="logo-des">Side Projects // experiments</p>
          </Tilt> 
          </div>
          <div className="project-outer">
              {projectShow()}
          </div>

      </div>
  </div>
)
    
}

export default Random;

