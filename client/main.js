import { Tracker } from 'meteor/tracker';
import ReactDom from 'react-dom';
import { onAuthChange, routes } from '../imports/routes/routes';
import '../imports/startup/simple-schema-config';
//
////// Subscriptions
///

Tracker.autorun(() => {
    let isAuthenticated = !!Meteor.userId();
    onAuthChange(isAuthenticated);
});

Meteor.startup(() => {
    ReactDom.render(routes, document.getElementById('app'));
});


Tracker.autorun(() => {
    /* Fetch some stuff from the Mongo Collection */
});
