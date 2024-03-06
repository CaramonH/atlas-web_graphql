// Set up Schema and require GraphQL

const { GraphQLSchema, GraphQLObjectType, GraphQLInt, GraphQLString } = require('graphql');

// TaskType
const TaskType = new GraphQLObjectType({
  name: 'Task',
  fields: () => ({
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    weight: { type: GraphQLInt },
    description: { type: GraphQLString },
  })
});

// RootQuert for the TaskType
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    task: {
      type: TaskType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
