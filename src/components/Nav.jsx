import React from 'react'
import {Link} from 'react-router-dom'
function Nav() {
    return (
        <div className="nav">
            <Link to="/" className="link">Home</Link>
        <Link to="/projects" className="link">Projects</Link>
        <Link to="/skill" className="link">Skills</Link>
        <Link to="/resume" className="link">Resume</Link>
            
        </div>
    )
}

export default Nav
