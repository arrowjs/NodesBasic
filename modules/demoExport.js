/**
 * Created by techmaster on 1/11/15.
 */
"use strict";
function printA() {
    console.log('A');
}

function printB() {
    console.log('B');
}

function printC() {
    console.log('C');
}

module.exports.printA = printA;
module.exports.hackB = printB;
module.exports.pi = Math.PI;