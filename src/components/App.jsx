import React from 'react'
import {Route,Switch} from 'react-router-dom';

import Home from './Home';
import Projects from './Projects';
import Resume from './Resume';
import Skill from './Skill';



 const App = () => {
    return (
        
        <div>
            <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/projects" exact component={Projects} />
            <Route path="/resume" exact component={Resume} />
            <Route path="/skill" exact component={Skill} />
            </Switch>
        </div>
        
    )
}

export default App;