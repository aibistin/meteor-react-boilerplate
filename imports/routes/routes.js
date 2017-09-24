import Meteor from 'meteor/meteor';
import React from 'react';
// BrowserRouter as Router,
import { Router as Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';


/* Access the Browsers 'history' API */
const browserHistory = createBrowserHistory();

import Signup from './../ui/components/Signup';
import Login from './../ui/components/Login';
import NotFound404 from './../ui/components/NotFound404';
import App from './../ui/components/App';

const unAuthenticatedPages = ['/login', '/signup', '/'];
const authenticatedPages = ['/home'];


export const onAuthChange = (isAuthenticated) => {
    let currentPath = browserHistory.location.pathname;
    console.log("Is Authenticated = " + isAuthenticated + " at " + currentPath);

    let isAuthenticatedPage = authenticatedPages.includes(currentPath);
    let isUnAuthenticatedPage = unAuthenticatedPages.includes(currentPath);

    if (isUnAuthenticatedPage && isAuthenticated) {
        console.log("Sending you to /home");
        browserHistory.push('/home');
    }
    else if (!isAuthenticated && isAuthenticatedPage) {
        console.log("You should not be here!");
        browserHistory.push('/');
    }
};


/* React Router */
export const routes = (
    <Router history={browserHistory}>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/home" component={App}/>
        <Route render={NotFound404}/>
      </Switch>
  </Router>
);
