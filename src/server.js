'use strict'
const Hapi = require('hapi')
const {graphqlHapi, graphiqlHapi} = require('apollo-server-hapi')
const BookSchema = require('./books.schema')
const server = Hapi.server({ host: 'localhost', port: 4545 })

async function registerRoutes () {
  server.route({
    method: 'GET',
    path: '/',
    handler: () => 'Up and Running'
  })
  await registerGraphQL()
}

async function registerGraphQL () {
  await server.register({
    plugin: graphqlHapi,
    options: {
      path: '/graph',
      graphqlOptions: { schema: new GraphQLSchema({}) },
      route: { cors: false }
    }
  })

  await server.register({
    plugin: graphiqlHapi,
    options: { path: '/graphiql', graphiqlOptions: { endpointURL: '/graph' } }
  })
}

// Inicia servidor
async function start (server) {
  try {
    await registerRoutes() // Espera o registro de todas as rotas
    await server.start()
    console.log(`Servidor rodando em ${server.info.uri}`)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

start(server)
