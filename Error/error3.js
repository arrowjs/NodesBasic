/**
 * Created by techmaster on 2/16/15.
 */
setTimeout(function(){
    "use strict";
    try {
        console.log('About to throw an error');
        throw new Error('cannot connect to database');
    } catch (e) {
        console.log('Error caught ' + e.message);
    }

}, 1000);