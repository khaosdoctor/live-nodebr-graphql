const {GraphQLObjectType} = require('graphql')

module.exports = new GraphQLObjectType({
  name: 'mutation',
  description: 'Manipula os objetos do banco de dados',
  fields: {
    addAuthor: require('./addAuthor.type'),
    addPublisher: require('./addPublisher.type'),
    addBook: require('./addBook.type')
  }
})
