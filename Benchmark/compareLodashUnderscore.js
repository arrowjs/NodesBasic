const nums =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
function timesThree(n) {
    return n * 3;
}

exports.compare = {
    "lodash" : function () {
        const _ = require('lodash');
        var result = _.map(nums, timesThree);
    },

    "underscore": function() {
        const __ = require("underscore");
        var result2 = __.map(nums, timesThree);

    },

    "for each": function() {
        var result3 = [];
        nums.forEach(function (element, index) {
            result3.push(timesThree(element));
        });
    }

};

require("bench").runMain();