/**
 * Created by cuong on 10/31/15.
 */
'use strict';
let SuperLog = require('./SuperLog');
let dbLogger = new SuperLog('DB');
dbLogger.info('Chuoi');
dbLogger.verbose('Mama');