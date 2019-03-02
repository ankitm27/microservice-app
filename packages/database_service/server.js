const server = require('express')();
const bodyParser = require('body-parser');
const { port } = require('./config/index.js');


server
  .use(bodyParser.json())
  .listen(port,()=>{
      console.log(`check123 ${port}`);
  })