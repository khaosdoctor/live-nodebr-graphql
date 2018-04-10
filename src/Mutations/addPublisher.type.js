const {
  GraphQLNonNull,
  GraphQLString
} = require('graphql')

module.exports = {
  type: require('../Queries/publisher.type'), // Tipo de retorno da mutation
  args: { // Campos que vamos inserir no banco
    name: { name: 'name', type: new GraphQLNonNull(GraphQLString), description: 'Nome da editora' }
  },
  resolve: (root, inputs) => require('./Handlers/addPublisher.handler')(root, inputs) // Função que vai fazer a inserção
}
