
const log4js = require('log4js');
const settings = require('./settings');

log4js.configure(settings.log4js);
const logger = log4js.getLogger('debug');

module.exports = logger;