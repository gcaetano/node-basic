
var settings = {
    log4js: {
        appenders: {
          default: { 
            type: 'dateFile', 
            filename: './logs/out', 
            pattern: "-yyyyMMdd.log",
            alwaysIncludePattern: true
          }
        },
        categories: {
          default: { appenders: ['default'], level: 'info' },
          debug: { appenders: ['default'], level: 'debug' }
        }
    }
};

module.exports = settings;