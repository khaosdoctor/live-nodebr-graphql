const { MongoClient } = require('mongodb')
const MONGODB_URI = 'mongodb://0.0.0.0:64193'

async function handler (root, inputs) { // Recebe o root e os dados que vão ser inseridos
  if (!inputs.name) throw new Error('O campo nome é necessário para inserir um autor')
  if (inputs.isBrazilian === undefined || inputs.isBrazilian === null) throw new Error('É necessário informar se o autor é brasileiro')

  let author = {
    name: inputs.name,
    isBrazilian: inputs.isBrazilian,
    age: inputs.birthday ? parseInt(new Date().getFullYear(), 10) - parseInt(new Date(inputs.birthday).getFullYear()) : null,
    birthday: inputs.birthday,
    nationality: inputs.nationality,
    category: inputs.category
  }

  const client = await MongoClient.connect(MONGODB_URI)
  const {ops: result} = await client.db('graphql').collection('authors').insert(author)
  return result.shift()
}

module.exports = handler
