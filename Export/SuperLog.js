/**
 * Created by cuong on 10/31/15.
 */
'use strict';
class SuperLog {
    constructor (name) {
        this.name = name;
    }
    info(message) {
        console.log('info: ' + message);
    }

    verbose(message) {
        console.log('verbose: ' + message);
    }
}

module.exports = SuperLog;