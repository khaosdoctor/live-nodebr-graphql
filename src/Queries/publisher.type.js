const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull
} = require('graphql')

module.exports = new GraphQLObjectType({
  name: 'publisher',
  description: 'Objeto de editora',
  fields: {
    uuid: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'ID único da editora',
      resolve: (publisher) => publisher._id
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Nome da editora'
    }
  }
})
