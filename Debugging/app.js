var debug = require('debug')('http');  //Require debug truyền vào tham số 'http'
var http = require('http');
var name = 'My App';


// fake app
debug('booting %s', name);

http.createServer(function(req, res){
    debug(req.method + ' ' + req.url);
    res.end('hello\n');
}).listen(3000, function(){
    debug('listening');

});

// fake worker of some kind
require('./worker');