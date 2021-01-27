import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import VanillaTilt from "vanilla-tilt";
import Nav from './Nav';
import img from '../img/logo1.svg'



function Tilt(props) {
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <div ref={tilt} {...rest} />;
}

function Home() {
  const options = {
    scale: 1.3,
    speed: 7000,
    max: 24,
    gyroscope: false, 

    
  };

  return (
    <>
        
        <Nav/>
            <div className="container">
                <div className="container-right">
                    <ul className="container-right-content">
                        <li className="container-right-text">
                            Hi, I am Aranavsheel Tiwari
                        </li>
                        <li className="container-right-text">
                            A Full Stack Web Developer
                        </li>
                        <li className="container-right-text">
                            I like to code, design,<br/> sometime writes
                        </li>
                        <li className="container-right-text">
                            I love music, games, book, art <br/> and nature
                        </li>
                        <li className="container-right-text">
                            I prefer to listen and think,<br/> watch and learn
                        </li>
                        <li className="container-right-text">

                            <div className="link-box">
                              <a href="https://github.com/aranavtiwari?tab=repositories"><i class="fab fa-github"></i></a>
                              <a href="https://www.linkedin.com/in/aranavsheel-tiwari-93bb96204/"><i class="fab fa-linkedin"></i></a>
                              <a href="mailto:aranavstiwari@gmail.com"><i class="far fa-envelope"></i></a>
                              <a href="#"><i class="fab fa-behance"></i></a>
                            </div>
                        </li>

                    </ul>
                    
                </div>
                <div className="container-left">
                    
                <Tilt className="box" options={options} >
                   <img src={img} alt="" className="img"/>
                </Tilt> 
                
                </div>    
            </div>   
    </>
  );
}

export default Home;
