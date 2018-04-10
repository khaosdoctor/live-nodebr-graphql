const {
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean
} = require('graphql')

module.exports = {
  type: require('../Queries/book.type'), // Tipo de retorno da mutation
  args: { // Campos que vamos inserir no banco
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
      type: new GraphQLNonNull(GraphQLString),
      description: 'Autor do livro'
    },
    publisher: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Editora do livro'
    }
  },
  resolve: (root, inputs) => require('./Handlers/addBook.handler')(root, inputs) // Função que vai fazer a inserção
}
