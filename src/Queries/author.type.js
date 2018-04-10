const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLNonNull,
  GraphQLInt
} = require('graphql')

module.exports = new GraphQLObjectType({
  name: 'author',
  description: 'Objeto de autor',
  fields: {
    uuid: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'ID único do autor',
      resolve: (author) => author._id
    },
    isBrazilian: {
      type: new GraphQLNonNull(GraphQLBoolean),
      description: 'Informa se o autor é nacional ou estrangeiro'
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Nome do autor'
    },
    age: {
      type: GraphQLInt,
      description: 'Idade do autor'
    },
    birthday: {
      type: GraphQLString,
      description: 'Data de nascimento do autor'
    },
    nationality: {
      type: GraphQLString,
      description: 'Nacionalidade do autor'
    },
    category: {
      type: require('./category.type')
    }
  }
})
