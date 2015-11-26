/**
 * Created by cuong on 10/31/15.
 */
'use strict';
let Logger = require('./Logger');
let dbLogger = new Logger('DB');
dbLogger.info('This is normal boot');

let accessLogger = new Logger('ACCESS');
accessLogger.verbose('Write to database');