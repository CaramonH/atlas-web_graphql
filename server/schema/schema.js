// Set up Schema and require GraphQL

const { GraphQLSchema, GraphQLObjectType, GraphQLInt, GraphQLString } = require('graphql');

const TaskType = new GraphQLObjectType({
  name: 'Task',
  description: 'This represents a Task',
  fields: () => ({
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    weight: { type: GraphQLInt },
    description: { type: GraphQLString },
  })
});

module.exports = { TaskType };
