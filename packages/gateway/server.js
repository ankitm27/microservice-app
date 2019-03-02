const server = require('express')();
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');

const typeDefs = `
   type Query {hey : String!}
`

const resolvers = {
    Query : {
        hey : () => 'hey there'
    }
};

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

server
  .use(bodyParser.json())
  .use('/graphql',graphqlExpress({ schema }))
  .use('/gq',graphiqlExpress({ endpointURL : '/graphql' }))
  .listen(3000,()=>{
      console.log("check123");
  })