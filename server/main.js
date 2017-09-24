import { Meteor } from 'meteor/meteor';
import { WebApp } from 'meteor/webapp';
import '../imports/startup/simple-schema-config';
import '../imports/api/users.js';

Meteor.startup(() => {
    WebApp.connectHandlers.use((req, resp, next) => {
        // if (req.url.toLocaleLowerCase().includes('google.com')) {
        // resp.statusCode = 302;
        // resp.setHeader('Location', 'http://www.google.com');
        // resp.end();
        // }
        next();
    });
    WebApp.connectHandlers.use((req, resp, next) => {
        // console.log("This is my custom middleware");
        // // console.log("Req Headers: ", req.headers);
        // // console.log("Req method: ", req.method);
        // // console.log("Req Query: ", req.query);
        // // console.log("Req Url: ", req.url);

        // // Set HTTP Status code
        // resp.statusCode = 404;
        // // Set HTTP Headers
        // resp.setHeader('this-is-a-http-header', "What a header");
        // // Set HTTP Body
        // resp.write("<h1>Hey, what happened to your web page?</h1>");
        // // End the HTTP request
        // resp.end();
        next();
    });
});
