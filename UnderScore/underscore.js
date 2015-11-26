/**
 * Created by techmaster on 2/18/15.
 */
var _ = require('underscore');
var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){
    'use strict';
    return num % 2 === 0;
});
console.log(evens);

_.each([1, 2, 3], function(num) {
    "use strict";
    console.log(num);
});

var sum = _.reduce([1, 2, 5], function(memo, num){ return memo + num; }, 0);
console.log('1 + 2 + 5 = ', sum);

var multiply = _.reduce([1, 2, 5], function(memo, num){ return memo * num; }, 1);
console.log('1 * 2 * 5 = ', multiply);