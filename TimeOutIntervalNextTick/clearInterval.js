/**
 * Created by techmaster on 2/18/15.
 */
console.log(__dirname);
console.log(__filename);
var count = 0;
var intervalObject = setInterval(function() {
    "use strict";
    count++;
    console.log(count,' second passed');
    if (count === 5){
        console.log('End loop');
        clearInterval(intervalObject);
    }
}, 1000);