/**
 * Created by techmaster on 2/22/15.
 */
setTimeout(function(){
    "use strict";
    console.log('5 seconds passed. Exiting');
}, 5000);

console.log('Started. Will exist in 5 seconds');

process.on('SIGINT', function(){
   "use strict";
   console.log('Got SIGINT. Ignoring');
});