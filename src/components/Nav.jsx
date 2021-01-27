import React, {useState} from 'react'
import {Link} from 'react-router-dom'
function Nav() {

    const [select, setSelect] =useState(false);

    const click = () => {
        return setSelect(!select)
    }

    return (
        < >
            <div className="name" onClick={() => click()}>
                <div className="name-a">
                    <i className="fa fa-bars"/> S<span className="y">Y</span>NOX
                </div>
            </div>
        <div className="nav">
            <div className={select ? "nav-link" : "hide nav-link"}>
                <Link to="/" className="link">Home</Link>
                <Link to="/projects" className="link">Projects</Link>
                <Link to="/skill" className="link">Skills</Link>
                <Link to="/resume" className="link">Resume</Link>
                <Link to="/random" className="link">Random</Link>
            </div>
            
        </div>
        </>
    )
}


//select ? " show nav-link" : "hide nav-link"}

export default Nav

//<div className="check">
//<i className={select ? "fas fa-times" : "fa fa-bars"}></i>
//</div>

//<div className={select ? "nav-link" : "hide nav-link"}>