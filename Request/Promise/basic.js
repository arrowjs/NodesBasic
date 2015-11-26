/**
 * Created by techmaster on 2/25/15.
 */
var rp = require('request-promise');

rp('http://www.google.com').then(console.dir).catch(console.error);