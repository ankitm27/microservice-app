const server = require('express')();
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');
const { port } = require('./config/index.js');
const schema = require('./data/schema.js');


server
  .use(bodyParser.json())
  .use('/graphql',graphqlExpress({ schema }))
  .use('/gq',graphiqlExpress({ endpointURL : '/graphql' }))
  .listen(port,()=>{
      console.log(`check123 ${port}`);
  })