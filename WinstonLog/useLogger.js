/**
 * Created by cuong on 11/8/15.
 */
'use strict';
const logger = require('./logger');
logger.warn('your warning');
logger.info('This is cool', 15);
logger.error('cannot connect Internet');


logger.log('info', 'test message %s', 'my string');
logger.error('Kinnapped');
