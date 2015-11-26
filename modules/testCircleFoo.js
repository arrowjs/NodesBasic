/**
 * Created by techmaster on 1/11/15.
 */
"use strict";
var circle = require('./circle');
var foo = require('./../demoExport');
circle(5, 5, 10);
console.log(circle);
console.log('Hello World');
foo.printA;
console.log(foo.pi);