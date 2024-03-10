// Initialize the server set on port 4000

const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema');
const { TaskType } = require('./schema/schema');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Cluster0');

mongoose.connection.once('open', () =>
  console.log('connected to database')
);

const app = express();

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
}));

app.listen(4000,()=>{
  console.log('now listening for request on port 4000');
});
