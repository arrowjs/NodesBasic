/**
 * Created by cuong on 10/30/15.
 */

var stack = require('./ArrStack'),
    path = require('path');

foo();

function foo() {
    bar();
}

function bar() {
    baz();
}

function baz() {
    console.log();
    stack().forEach(function(site){
        console.log('  \033[36m%s\033[90m in %s:%d\033[0m'
            , site.getFunctionName() || 'anonymous'
            , site.getFileName()
            , site.getLineNumber());
    });
    console.log();
}