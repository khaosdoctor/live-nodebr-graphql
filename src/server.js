'use strict'
const Hapi = require('hapi')
const {graphqlHapi, graphiqlHapi} = require('apollo-server-hapi')
const BookSchema = require('./books.schema')
const server = Hapi.server({ host: 'localhost', port: 4545 })

async function registerRoutes () { // Registra uma rota padrão de status
  server.route({
    method: 'GET',
    path: '/',
    handler: () => 'Up and Running'
  })
  await registerGraphQL()
}

async function registerGraphQL () {
  await server.register({
    plugin: graphqlHapi, // Registra o servidor GraphQL de produção
    options: {
      path: '/graph', // Nosso endpoint
      graphqlOptions: { schema: BookSchema, debug: true }, // Cria um schema para podermos utilizar
      route: { cors: false } // Desativamos o cors só para motivos didáticos
    }
  })

  await server.register({
    plugin: graphiqlHapi, // Registramos o GraphiQL para dev
    options: {
      path: '/graphiql', // Endpoint do GraphiQL
      graphiqlOptions: {
        endpointURL: '/graph', // Endpoint GraphQL que ele vai apontar
        formatError: (error) => ({message: error.message, location: error.location, stack: error.stack}), // Ativamos a formatação de erros
        debug: true // Modo de debug
      }
    }
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
