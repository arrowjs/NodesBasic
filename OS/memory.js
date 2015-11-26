var os = require('os');
var gigabyte = 1 / (Math.pow(1024, 3));
console.log('Total memory', os.totalmem() * gigabyte, 'GBs');
console.log('Available memory', os.freemem() * gigabyte, 'GBs');
console.log('Percent consumed', 100 * (1 - os.freemem() / os.totalmem()));
console.log('This machine has', os.cpus().length, 'CPUs');