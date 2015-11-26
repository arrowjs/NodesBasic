/**
 * Created by techmaster on 1/13/15.
 */
var Currency = require('./currency');
var canadianDollar = 0.91;

var currency = new Currency(canadianDollar);
console.log(currency.canadianToUS(50));