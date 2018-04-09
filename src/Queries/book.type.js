const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLNonNull,
  GraphQLInt
} = require('graphql')
const AuthorType = require('./author.type')
const PublisherType = require('./publisher.type')

module.exports = new GraphQLObjectType({
  name: 'book',
  description: 'Objeto de livro',
  fields: {
    uuid: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'ID único do livro',
      resolve: (book) => book._id
    },
    isBrazilian: {
      type: new GraphQLNonNull(GraphQLBoolean),
      description: 'Informa se o livro é nacional ou estrangeiro'
    },
    title: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Título do livro'
    },
    page_number: {
      type: GraphQLInt,
      description: 'Número de páginas do livro'
    },
    author: {
      type: AuthorType,
      description: 'Autor do livro'
    },
    publisher: {
      type: PublisherType,
      description: 'Editora do livro'
    }
  }
})
