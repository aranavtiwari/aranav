import React, {useState} from 'react'
import {Link} from 'react-router-dom'
function Nav() {

    const [select, setSelect] =useState(false);

    const click = () => {
        return setSelect(!select)
    }

    const show = () => {
        if(select){
            return "hide";
            console.log("hide")
        }
        console.log("show")
        return "show";
    }

    return (
        <div className="nav">

            <div className="check" onClick={() => click()}>
                <i className={select ? "fas fa-times" : "fas fa-bars"}></i>
            </div>

            <div className={select ? "nav-link" : "hide nav-link"}>
                <Link to="/" className="link">Home</Link>
                <Link to="/projects" className="link">Projects</Link>
                <Link to="/skill" className="link">Skills</Link>
                <Link to="/resume" className="link">Resume</Link>
            </div>
            
        </div>
    )
}


//select ? " show nav-link" : "hide nav-link"}

export default Nav
