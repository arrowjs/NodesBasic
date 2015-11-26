var Ticker = require('./ticker');
var ticker = new Ticker();
//ticker.start();

console.log("Test ticker");
ticker.on("tick", function () {
   console.log("tic tac");
});