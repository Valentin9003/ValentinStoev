import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter as Router, Link } from 'react-router-dom';
import AboutMe from './AboutMe/AboutMe'
import Contacts from './Contacts/Contacts'
import Home from './Home/Home'

ReactDOM.render(
  <React.StrictMode>
   
    <Router>
    <Route exact path="/" component={Home} />
    <Route exact path="/AboutMe" component={AboutMe} />
    <Route exact path="/Contacts" component={Contacts} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
