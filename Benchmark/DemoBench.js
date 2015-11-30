/**
 * Created by cuong on 11/28/15.
 */
'use strict';
exports.compare = {
   /* "function wrapper" : function () {
        var x = (function (a) {
            return a;
        })("foo");
    },

    "no wrapper" : function () {
        let a = "foo";
        let x = a;
    },*/

    "var assignment" : function () {
        var x = "foo";
        var y = ['Foo', 'Bar', 'Bas', 'Heck'];
    },

    "let assignment" : function () {
        let x = "foo";
        let y = ['Foo', 'Bar', 'Bas', 'Heck'];
    },

    "const assignment" : function () {
        const x = "foo";
        const y = ['Foo', 'Bar', 'Bas', 'Heck'];
    }
};
require("bench").runMain();