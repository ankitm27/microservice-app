const server = require('express')();
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');

server
  .use(bodyParser.json())
  .use('/graphql',graphqlExpress({ schema }))
  .use('/gq',graphiqlExpress({ endpointURL : '/graphql' }))
  .listen(3000,()=>{
      console.log("check123");
  })