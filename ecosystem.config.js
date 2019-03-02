const path = require('path');

const basePath = path.join(__dirname,'/packages');

module.exports = {
  apps : [{
    name: 'gateway',
    script: basePath + '/gateway/server.js',
    env: {
      PORT: 3000,
      SERVICE_DB_PORT:4000
    },
    watch:true
  },{
    name: 'db service',
    script: basePath + '/database_service/server.js',
    env: {
      PORT: 4000
    },
    watch:true
  }]

  
};
