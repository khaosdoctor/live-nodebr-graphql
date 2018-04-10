const {GraphQLEnumType} = require('graphql')

module.exports = new GraphQLEnumType({
  name: 'authorCategory_enum',
  values: {
    science_fiction: { value: 'science_fiction', description: 'Define o tipo de ficção científica' },
    action: { value: 'action', description: 'Define o tipo de ação' },
    adventure: { value: 'adventure', description: 'Define o tipo de aventura' },
    drama: { value: 'drama', description: 'Define o tipo de drama' }
  }
})
