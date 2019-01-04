
var config = {
    log4js: {
        appenders: {
          file: { 
            type: 'dateFile', 
            filename: './logs/out', 
            pattern: "-yyyyMMdd.log",
            alwaysIncludePattern: true
          }
        },
        categories: {
          default: { appenders: ['file'], level: 'info' }
        }
    }
};

module.exports = config;