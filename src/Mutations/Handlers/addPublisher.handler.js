const { MongoClient } = require('mongodb')
const MONGODB_URI = 'mongodb://0.0.0.0:64193'

async function handler (root, inputs) {
  if (!inputs.name) throw new Error('O campo nome é necessário para inserir uma editora')

  let publisher = { name: inputs.name }
  const client = await MongoClient.connect(MONGODB_URI)
  const {ops: result} = await client.db('graphql').collection('publishers').insert(publisher)
  return result.shift()
}

module.exports = handler
