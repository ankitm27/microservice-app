const configDev = require('./config.dev.js');
const configProd = require('./config.prod.js');


module.exports = process.env.NODE_ENV === "production" 
    ? configProd
    : configDev