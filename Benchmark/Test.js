/**
 * Created by cuong on 11/28/15.
 */
const nums =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
function timesThree(n) {
    return n * 3;
}

const _ = require('lodash');
var result = _.map(nums, timesThree);

console.log(result);

const __ = require("underscore");
var result2 = __.map(nums, timesThree);
console.log(result2);

var result3 = [];
nums.forEach(function (element, index) {
    result3.push(timesThree(element));
});

console.log(result3);

var str1 = "Hello ";
var str2 = "world!";
var res = str1.concat(str2);

var res2 = str1 + str2;
console.log(res);
console.log(res2);