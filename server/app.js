// Initialize the server set on port 4000

const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const { TaskType } = require('./schema/schema');

const app = express();

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
}));

app.listen(4000,()=>{
  console.log('now listening for request on port 4000');
});
