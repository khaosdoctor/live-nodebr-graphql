const BookType = require('./book.type')
const AuthorType = require('./author.type')
const PublisherType = require('./publisher.type')
const BookLoader = require('./Loaders/book.loader')
const AuthorLoader = require('./Loaders/author.loader')
const PublisherLoader = require('./Loaders/publisher.loader')
const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString
} = require('graphql')

module.exports = new GraphQLObjectType({
  name: 'query',
  description: 'Query para interação com a API do sistema de livros',
  fields: () => ({
    books: {
      description: 'Busca livros',
      args: {
        title: { description: 'Nome do livro', type: GraphQLString },
        id: { description: 'ID único do livro', type: GraphQLString },
        author: { description: 'Autor do livro', type: GraphQLString },
        publisher: { description: 'Editora do livro', type: GraphQLString }
      },
      type: new GraphQLList(BookType),
      resolve: (root, args) => BookLoader.fetchAll(args.title, args.id, args.author)
    },
    authors: {
      description: 'Busca autores',
      args: {
        name: { type: GraphQLString, description: 'Nome do autor' },
        id: { type: GraphQLString, description: 'ID do autor' }
      },
      type: new GraphQLList(AuthorType),
      resolve: (root, args) => AuthorLoader.fetchAll(args.name, args.id)
    },
    publishers: {
      description: 'Busca editoras',
      args: {
        name: { type: GraphQLString, description: 'Nome da editora' },
        id: { type: GraphQLString, description: 'ID da editora' }
      },
      type: new GraphQLList(PublisherType),
      resolve: (root, args) => PublisherLoader.fetchAll(args.name, args.id)
    }
  })
})
