// At terminal run this line
// NODE_DEBUG=cluster node server.js
//https://nodejs.org/api/cluster.html#cluster_how_it_works
var cluster = require('cluster');
var http = require('http');
var numCPUs = require('os').cpus().length;
var util = require('util');
var debuglog = util.debuglog('cluster');

if (cluster.isMaster) {
    // Fork workers.
    console.log('num CPUS: ' + numCPUs);
    for (var i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', function(worker, code, signal) {
        console.log('worker ' + worker.process.pid + ' died');
    });
} else {
    debuglog('Master Worker [%d] online', cluster.worker.process.pid);
    // Workers can share any TCP connection
    // In this case it is an HTTP server
    http.createServer(function(req, res) {
        res.writeHead(200);
        res.end("hello world\n");
    }).listen(8000);
}