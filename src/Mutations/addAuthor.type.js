const {
  GraphQLNonNull,
  GraphQLString,
  GraphQLBoolean
} = require('graphql')

module.exports = {
  type: require('../Queries/author.type'), // Tipo de retorno da mutation
  args: { // Campos que vamos inserir no banco
    name: { name: 'name', type: new GraphQLNonNull(GraphQLString), description: 'Nome do autor' },
    isBrazilian: { name: 'isBrazilian', type: new GraphQLNonNull(GraphQLBoolean), description: 'O autor é brasileiro?' },
    birthday: { name: 'birthday', type: GraphQLString, description: 'Data de nascimento do autor no formato YYYY-MM-DD' },
    nationality: { name: 'nationality', type: GraphQLString, description: 'Nacionalidade do autor no formato de duas letras (Ex: US, RU, BR)' },
    category: { name: 'category', type: require('../Queries/category.type'), description: 'Categoria que o autor se encaixa' }
  },
  resolve: (root, inputs) => require('./Handlers/addAuthor.handler')(root, inputs) // Função que vai fazer a inserção
}
