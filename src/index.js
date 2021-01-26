import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'


import App from './components/App';
import "./App.css";

ReactDOM.render(
   <BrowserRouter basename={process.env.PUBLIC_URL}>
        <App/>
     </BrowserRouter>     
    ,
    document.querySelector('#root')
)