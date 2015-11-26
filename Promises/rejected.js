/**
 * Created by techmaster on 2/24/15.
 */
var Q = require('q');
Q.reject(new Error('denied')).catch(function(err){
    "use strict";
   console.log(err.message);
});