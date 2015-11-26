/**
 * Created by techmaster on 2/18/15.
 */
var fs = require('fs');
fs.unlink('./test.txt', function(err){
    "use strict";
    if (err) {
        console.log('Error: ', err);
    } else {
        console.log('test.txt is successfully deleted');
    }
});