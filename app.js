const logger = require('./util/logger');
const helper = require('./util/helper').Helper;


//how to log
logger.info(helper.getRandom(5));
logger.trace('Entering cheese testing');
logger.debug('Got cheese.');
logger.info('Cheese is Gouda.');
logger.log('Something funny about cheese.');
logger.warn('Cheese is quite smelly.');

// these end up only in cheese.log
logger.error('Cheese %s is too ripe!', 'gouda');
logger.fatal('Cheese was breeding ground for listeria.');