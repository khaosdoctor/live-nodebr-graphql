const {GraphQLSchema} = require('graphql')
const QueryType = require('./Queries/query.type')
const MutationType = require('./Mutations/mutation.type')

module.exports = new GraphQLSchema({
  name: 'Books Schema',
  description: 'Schema para busca de uma database de livros',
  query: QueryType, // Todas as queries da API
  mutation: MutationType // Todos as mutações de dados da API
})
