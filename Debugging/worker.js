/**
 * Created by techmaster on 3/9/15.
 */
var debug = require('debug')('worker');

setInterval(function(){
    debug('doing some work');
}, 1000);