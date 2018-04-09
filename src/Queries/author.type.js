const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLEnumType
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
      type: new GraphQLEnumType({
        name: 'authorCategory_enum',
        values: {
          science_fiction: { value: 'science_fiction', description: 'Define o tipo de ficção científica' },
          action: { value: 'action', description: 'Define o tipo de ação' },
          adventure: { value: 'adventure', description: 'Define o tipo de aventura' },
          drama: { value: 'drama', description: 'Define o tipo de drama' }
        }
      })
    }
  }
})
