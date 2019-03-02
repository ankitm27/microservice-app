const server = require('express')();
const bodyParser = require('body-parser');
const config  = require('./config/index.js');
console.log("config",config);

server.use(bodyParser.json())
  
require('./routes/get')(server);
require('./dbUtil/index.js')(config);
require('./routes/post')(server);

server.listen(config.port,()=>{
    console.log(`check123456789 ${config.port}`);
});