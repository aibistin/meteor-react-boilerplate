import Meteor from 'meteor/meteor';
import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';


/* Access the Browsers 'history' API */
const history = createBrowserHistory();

import Signup from './../ui/components/Signup';
import Login from './../ui/components/Login';
import NotFound404 from './../ui/components/NotFound404';
import App from './../ui/components/App';

const unAuthenticatedPages = ['/login', '/signup', '/'];
const authenticatedPages = ['/home'];


export const onAuthChange = (isAuthenticated) => {
    let currentPath = history.location.pathname;
    console.log("Is Authenticated = " + isAuthenticated + " at " + currentPath);

    let isAuthenticatedPage = authenticatedPages.includes(currentPath);
    let isUnAuthenticatedPage = unAuthenticatedPages.includes(currentPath);

    if (isUnAuthenticatedPage && isAuthenticated) {
        console.log("You are authenticaged go to /home");
        history.push('/home');
    }
    else if (!isAuthenticated && isAuthenticatedPage) {
        console.log("You need to be authenticated go to /!");
        history.push('/');
    }
};


/* React Router */
export const routes = (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/home" component={App}/>
        <Route render={NotFound404}/>
      </Switch>
      </Router>
);
