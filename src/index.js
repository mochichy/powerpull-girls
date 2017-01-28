import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Auth from './Auth';
import SignUp from './SignUp';
import SignIn from './SignIn';
import HomePage from './HomePage';
import About from './About';
import { IndexRoute, Router, Route, hashHistory } from 'react-router';





ReactDOM.render(
	<HomePage/>,
        // <Router history={hashHistory}>
        //     <Route path="/" component={App}>
        //         <IndexRoute component={HomePage}/>
        //         <Route path="/HomePage" component={HomePage}/>
        //         <Route path="/course/:searchString" component={HomePage}/>
        //     </Route>
        // </Router>,
  document.getElementById('root')
);
