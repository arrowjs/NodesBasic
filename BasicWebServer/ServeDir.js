/**
 * Created by techmaster on 3/30/15.
 */
"use strict";
const http = require('http');
const fs = require('fs');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.readdir('.', function(err, files){
       for (var i=0; i < files.length; i++){
            res.write(files[i] + '</br>');
       }
        res.end();
    });

}).listen(3000, '127.0.0.1');
console.log('Serve directory at http://127.0.0.1:3000/');