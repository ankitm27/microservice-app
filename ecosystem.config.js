const path = require('path');

const basePath = path.join(__dirname,'/packages');

module.exports = {
  apps : [{
    name: 'gateway',
    script: basePath + '/gateway/server.js',
    env: {
      PORT: 3000,
      SERVICE_DB_PORT:4000,
      Q_URI:"amqp://epkulpjz:zd_RqGPiVpnuQgZLwV4tlj2AgvEIrPSH@termite.rmq.cloudamqp.com/epkulpjz"
    },
    watch:true,
    // instances:"max",
    // exec_mode:"cluster",
    },{
    name: 'db service',
    script: basePath + '/database_service/server.js',
    env: {
      PORT: 4000
    },
    watch:true
  }]

  
};
