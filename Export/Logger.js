/**
 * Created by cuong on 10/31/15.
 */
"use strict";
function Logger(name){
    this.name = name;
}

Logger.prototype.log = function(message) {
    console.log('[' + this.name + ']' + message);
};

Logger.prototype.info = function(message) {
    console.log('info: ' + message);
};

Logger.prototype.verbose = function(message) {
    console.log('verbose: ' + message);
};

module.exports = Logger;