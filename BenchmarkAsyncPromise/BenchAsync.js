/**
 * Created by techmaster on 3/4/15.
 */
/**
 * Created by techmaster on 3/4/15.
 */

var arr = [{
    "id": 0,
    "balance": 6307
}, {
    "id": 1,
    "balance": 9652
}, {
    "id": 2,
    "balance": 5439
}, {
    "id": 3,
    "balance": 1424
}, {
    "id": 4,
    "balance": 4844
}, {
    "id": 5,
    "balance": 9832
}, {
    "id": 6,
    "balance": 3302
}, {
    "id": 7,
    "balance": 1664
}, {
    "id": 8,
    "balance": 1541
}, {
    "id": 9,
    "balance": 7249
}, {
    "id": 10,
    "balance": 7430
}, {
    "id": 11,
    "balance": 296
}, {
    "id": 12,
    "balance": 5437
}, {
    "id": 13,
    "balance": 2810
}, {
    "id": 14,
    "balance": 6063
}, {
    "id": 15,
    "balance": 6200
}, {
    "id": 16,
    "balance": 7701
}, {
    "id": 17,
    "balance": 112
}, {
    "id": 18,
    "balance": 3593
}, {
    "id": 19,
    "balance": 7519
}, {
    "id": 20,
    "balance": 926
}, {
    "id": 21,
    "balance": 430
}, {
    "id": 22,
    "balance": 2850
}, {
    "id": 23,
    "balance": 9368
}, {
    "id": 24,
    "balance": 6957
}, {
    "id": 25,
    "balance": 2227
}, {
    "id": 26,
    "balance": 7675
}, {
    "id": 27,
    "balance": 4307
}, {
    "id": 28,
    "balance": 461
}, {
    "id": 29,
    "balance": 8196
}, {
    "id": 30,
    "balance": 7284
}, {
    "id": 31,
    "balance": 2216
}, {
    "id": 32,
    "balance": 2133
}, {
    "id": 33,
    "balance": 2042
}, {
    "id": 34,
    "balance": 1865
}, {
    "id": 35,
    "balance": 3541
}, {
    "id": 36,
    "balance": 8157
}, {
    "id": 37,
    "balance": 9475
}, {
    "id": 38,
    "balance": 6263
}, {
    "id": 39,
    "balance": 1589
}, {
    "id": 40,
    "balance": 8462
}, {
    "id": 41,
    "balance": 4469
}, {
    "id": 42,
    "balance": 5972
}, {
    "id": 43,
    "balance": 7446
}, {
    "id": 44,
    "balance": 8522
}, {
    "id": 45,
    "balance": 8850
}, {
    "id": 46,
    "balance": 2470
}, {
    "id": 47,
    "balance": 8017
}, {
    "id": 48,
    "balance": 29
}, {
    "id": 49,
    "balance": 9212
}, {
    "id": 50,
    "balance": 1711
}, {
    "id": 51,
    "balance": 3119
}, {
    "id": 52,
    "balance": 2120
}, {
    "id": 53,
    "balance": 6473
}, {
    "id": 54,
    "balance": 5913
}, {
    "id": 55,
    "balance": 1504
}, {
    "id": 56,
    "balance": 7648
}, {
    "id": 57,
    "balance": 9890
}, {
    "id": 58,
    "balance": 3615
}, {
    "id": 59,
    "balance": 3387
}, {
    "id": 60,
    "balance": 9736
}, {
    "id": 61,
    "balance": 2821
}, {
    "id": 62,
    "balance": 8471
}, {
    "id": 63,
    "balance": 9319
}, {
    "id": 64,
    "balance": 7468
}, {
    "id": 65,
    "balance": 962
}, {
    "id": 66,
    "balance": 5411
}, {
    "id": 67,
    "balance": 9450
}, {
    "id": 68,
    "balance": 2864
}, {
    "id": 69,
    "balance": 7222
}, {
    "id": 70,
    "balance": 5916
}, {
    "id": 71,
    "balance": 6083
}, {
    "id": 72,
    "balance": 1869
}, {
    "id": 73,
    "balance": 3891
}, {
    "id": 74,
    "balance": 8559
}, {
    "id": 75,
    "balance": 1916
}, {
    "id": 76,
    "balance": 7086
}, {
    "id": 77,
    "balance": 7846
}, {
    "id": 78,
    "balance": 5003
}, {
    "id": 79,
    "balance": 7014
}, {
    "id": 80,
    "balance": 6143
}, {
    "id": 81,
    "balance": 8409
}, {
    "id": 82,
    "balance": 6826
}, {
    "id": 83,
    "balance": 3378
}, {
    "id": 84,
    "balance": 4972
}, {
    "id": 85,
    "balance": 9709
}, {
    "id": 86,
    "balance": 1139
}, {
    "id": 87,
    "balance": 2028
}, {
    "id": 88,
    "balance": 1584
}, {
    "id": 89,
    "balance": 5269
}];

var async = require("async");
console.time('taskA');
async.waterfall(
    [
        function(cb) {
            async.map(arr, function(item, callb) {
                callb(null, item.balance * 1000);
            }, function(err, res) {
                cb(null, res);
            });
        },
        function(arr, cb) {
            async.filter(arr, function(item, callb) {
                callb(item > 7000000);
            }, function(res) {
                cb(null, res);
            });
        }
    ], function(err, res) {
         console.timeEnd('taskA');
    });
