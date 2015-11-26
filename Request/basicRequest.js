/**
 * Created by techmaster on 2/25/15.
 */
var request = require('request');
request('http://www.google.com', function (error, response, body) {
    if (!error && response.statusCode === 200) {
        console.log(body); // Show the HTML for the Google homepage.
    }
});