/**
 * Created by techmaster on 2/22/15.
 */
var fs = require('fs');
var gzip = require('zlib').createGzip();
var inp = fs.createReadStream('cool.txt');
var out = fs.createWriteStream('cool.txt.gz');
inp.pipe(gzip).pipe(out);