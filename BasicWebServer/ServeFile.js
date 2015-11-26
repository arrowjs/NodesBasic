/**
 * Created by techmaster on 3/30/15.
 */
"use strict";
const http = require('http');
const fs = require('fs');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'image/jpeg'});
    let stream = fs.createReadStream('./bus.jpeg');
    stream.pipe(res);


}).listen(3000, '127.0.0.1');
console.log('Server running at http://127.0.0.1:3000/');