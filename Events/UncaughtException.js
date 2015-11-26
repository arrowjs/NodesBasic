/**
 * Created by techmaster on 2/21/15.
 */
process.on('uncaughtException', function(err){
    "use strict";
    console.log('Caught exception: ', err);
    console.log('Stack: ', err.stack);
    process.exit(1);
});


nonexistentFunc();

console.log('This line will not run');